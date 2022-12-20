import Link from 'next/link';
import Image from 'next/image';

const Header = () => {

    const routes = [
        {
            url: '/drop',
            text: 'Drop',
        },
        {
            url: '/marketplace',
            text: 'Marketplace',
        },
        {
            url: '/creator',
            text: 'Creator',
        },
        {
            url: '/community',
            text: 'Community',
        },
    ];

  return(
      <div className="px-[120px] flex flex-row justify-between items-center">
          <div className="absolute w-[555px] h-[555px] -left-[87px] -top-[41px] ellipse-header -z-10"/>
          <Image
              className="py-[19.5px]"
              src="/ApolloNFT.svg"
              alt="logo"
              width={171}
              height={40}
          />
          <div className="flex flex-row gap-[40px]">
              {routes.map(({ url, text }, index) => {
                  return (
                      <div className="text-[16px] leading-[19px]" key={`${index}`}>
                          <Link href={url}>
                              {text}
                          </Link>
                      </div>
                  )})}
          </div>
          <div className="text-white text-[16px] leading-[19px] w-[149px] h-[51px] rounded-[66px] flex justify-center items-center btn-gradient">
              Contact Us
          </div>
      </div>
  )
}

export default Header;
