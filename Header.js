// components/Header.js
import { useWallet, WalletMultiButton } from '@solana/wallet-adapter-react';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Logo Placeholder */}
      <div>
        <img
          src="https://via.placeholder.com/150?text=BlockBrainHQ+Logo"
          alt="BlockBrainHQ Logo"
          className="w-20 h-20"
        />
      </div>

      {/* Meniu Navigare */}
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#home">Acasă</a></li>
          <li><a href="#airdrop">Airdrop</a></li>
          <li><a href="#presale">Presale</a></li>
          <li><a href="#nft-sale">NFT Sale</a></li>
          <li><a href="#demo">Demo Platformă</a></li>
        </ul>
      </nav>

      {/* Conectare Portofel */}
      <div className="flex space-x-2">
        <WalletMultiButton />
        <a
          href="https://twitter.com/BlockBrainHQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://via.placeholder.com/30?text=Twitter"
            alt="Twitter"
            className="w-6 h-6"
          />
        </a>
        <a
          href="https://t.me/BlockBrainHQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://via.placeholder.com/30?text=Telegram"
            alt="Telegram"
            className="w-6 h-6"
          />
        </a>
        <a
          href="https://discord.gg/BlockBrainHQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://via.placeholder.com/30?text=Discord"
            alt="Discord"
            className="w-6 h-6"
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
