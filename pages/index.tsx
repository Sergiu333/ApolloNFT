import type { NextPage } from 'next';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HotDrop from '../components/HotDrop';
import LiveAucition from '../components/Live-aucition';
import SellNFT from '../components/SellNFT';
import TheWeek from '../components/TheWeek';
import Community from '../components/Community';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <HotDrop />
      <LiveAucition />
      <SellNFT />
      <TheWeek />
      <Community />
    </div>
  );
};

export default Home;
