import type { NextPage } from 'next';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HotDrop from '../components/HotDrop';
import LiveAucition from '../components/Live-aucition';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <HotDrop />
      <LiveAucition />
      <Hero />
    </div>
  );
};

export default Home;
