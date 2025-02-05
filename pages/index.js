// pages/index.js
import Header from '../components/Header';
import PresaleSection from '../components/PresaleSection';
import AirdropSection from '../components/AirdropSection';
import NFTSaleSection from '../components/NFTSaleSection';
import DemoPlatform from '../components/DemoPlatform';

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Presale */}
      <PresaleSection />

      {/* Airdrop */}
      <AirdropSection />

      {/* NFT Sale */}
      <NFTSaleSection />

      {/* Demo Platform */}
      <DemoPlatform />
    </div>
  );
}
