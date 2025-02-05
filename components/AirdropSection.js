// components/AirdropSection.js
function AirdropSection() {
  const [twitterHandle, setTwitterHandle] = React.useState('');
  const [isVerified, setIsVerified] = React.useState(false);

  const verifyTwitter = () => {
    alert('Contul tău Twitter a fost verificat!');
    setIsVerified(true);
  };

  return (
    <section className="bg-gray-900 text-white p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Airdrop</h2>
      <p>Urmează-ne pe Twitter, Retweetează postarea noastră și primește $BRAIN gratuit!</p>
      <input
        type="text"
        placeholder="Introduceți contul dvs. Twitter..."
        value={twitterHandle}
        onChange={(e) => setTwitterHandle(e.target.value)}
        className="w-full p-2 mb-4"
      />
      <button
        onClick={verifyTwitter}
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        Verifică Contul
      </button>
      {isVerified && <p>Felicitări! Ai obținut $BRAIN gratuit!</p>}
    </section>
  );
}

export default AirdropSection;
