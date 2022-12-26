import Image from 'next/image';
import useWindowWidth from '../../utils/hooks/use-window-width';
import { useState } from 'react';
import Hamburger from '../../public/Hamburger';

const Header = () => {
  const routes = [
    {
      url: '/drop',
      text: 'Drop'
    },
    {
      url: '/marketplace',
      text: 'Marketplace'
    },
    {
      url: '/creator',
      text: 'Creator'
    },
    {
      url: '/community',
      text: 'Community'
    }
  ];

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const width = useWindowWidth();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <div className='px-[24px] md:px-[40px] lg:px-[60px] xl:px-[120px] flex flex-row justify-between items-center'>
      <div className='absolute md:w-[555px] h-[555px] -left-[87px] -top-[41px] ellipse-header -z-10 flex justify-between' />
      <Image className='py-[19.5px]' src='/ApolloNFT.svg' alt='logo' width={171} height={40} />
      <div className='flex flex-row gap-[40px]'>
        <div className={'relative'}>
          <div
            className={`${
              hamburgerOpen && width <= 1024
                ? 'fixed flex flex-col bg-[#1E2129] top-0 right-0 bottom-0 w-3/5 py-[50px] z-40'
                : 'relative grid-cols-4 hidden lg:flex lg:gap-10'
            }`}
          >
            {routes.map(({ url, text }, index) => {
              return (
                <div
                  key={`${index}-${text}`}
                  className={`flex flex-col items-center justify-center w-full lg:w-[80px] whitespace-nowrap`}
                >
                  <div
                    className='relative link mb-6 lg:mb-0 lg:after:hover:w-full lg:after:hover:left-0 lg:font-bold
                          after:bottom-0 lg:after:-bottom-[28px]'>
                    {text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className='hidden lg:grid text-white text-[16px] leading-[19px] w-[149px] h-[51px] rounded-[66px] flex justify-center items-center btn-gradient'>
        Contact Us
      </div>
      <div className={`w-full flex justify-end lg:hidden py-6`} onClick={toggleHamburger}>
      <Hamburger isOpen={hamburgerOpen} />
    </div>
    </div>
  );
};

export default Header;
