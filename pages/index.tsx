import type { NextPage } from 'next';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HotDrop from '../components/HotDrop';
import LiveAucition from '../components/Live-aucition';
import SellNFT from '../components/SellNFT';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <HotDrop />
      <LiveAucition />
      <SellNFT />
    </div>
  );
};

export default Home;
