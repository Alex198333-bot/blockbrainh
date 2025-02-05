// components/PresaleSection.js
import { useWallet } from '@solana/wallet-adapter-react';

function PresaleSection() {
  const wallet = useWallet();
  const [amount, setAmount] = React.useState(0);

  const handleBuy = () => {
    if (!wallet.publicKey) {
      alert('Te rog să te conectezi cu portofelul.');
      return;
    }

    if (amount < 0.5) {
      alert('Cantitatea minimă este 0.5 SOL.');
      return;
    }

    alert(`Ai cumpărat ${amount} $BRAIN!`);
  };

  return (
    <section className="bg-gray-900 text-white p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Presale În Desfășurare!</h2>
      <p>Progres: 75%</p>
      <input
        type="number"
        placeholder="Introduceți cantitatea în SOL..."
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
        className="w-full p-2 mb-4"
      />
      <button
        onClick={handleBuy}
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        Cumpără Acum
      </button>
    </section>
  );
}

export default PresaleSection;
