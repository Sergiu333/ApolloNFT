import type { NextPage } from 'next';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HotDrop from '../components/HotDrop';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <HotDrop />
    </div>
  );
};

export default Home;
