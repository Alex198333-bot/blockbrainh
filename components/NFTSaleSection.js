// components/NFTSaleSection.js
function NFTSaleSection() {
  const [selectedNFT, setSelectedNFT] = React.useState(null);

  const handleBuy = () => {
    if (!selectedNFT) {
      alert('Te rog să selectezi un NFT.');
      return;
    }

    alert(`Ai cumpărat ${selectedNFT}!`);
  };

  return (
    <section className="bg-gray-900 text-white p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">NFT Sale</h2>
      <div className="grid grid-cols-3 gap-4">
        {/* Exemple de NFT */}
        <div
          onClick={() => setSelectedNFT('NFT #1')}
          className="border p-4 cursor-pointer"
        >
          <img
            src="https://via.placeholder.com/200?text=NFT+1"
            alt="NFT #1"
            className="w-full mb-2"
          />
          <p>NFT #1</p>
        </div>
        <div
          onClick={() => setSelectedNFT('NFT #2')}
          className="border p-4 cursor-pointer"
        >
          <img
            src="https://via.placeholder.com/200?text=NFT+2"
            alt="NFT #2"
            className="w-full mb-2"
          />
          <p>NFT #2</p>
        </div>
      </div>
      <button
        onClick={handleBuy}
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4"
      >
        Cumpără Acum
      </button>
    </section>
  );
}

export default NFTSaleSection;
