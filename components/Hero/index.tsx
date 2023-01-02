import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const icones = [
    {
      src: '/coinabase.svg',
      alt: 'coinabase',
    },
    {
      src: '/dropbox.svg',
      alt: 'Marketplace',
    },
    {
      src: '/slack.svg',
      alt: 'slack.',
    },
    {
      src: '/spotify.svg',
      alt: 'spotify',
    },
    {
      src: '/webflow.svg',
      alt: 'webflow',
    },
  ];

  return (
    <div className="px-[24px] md:px-[40px] lg:px-[60px] xl:px-[120px] pt-6 md:pt-[120px]">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col font-extrabold text-[41px] leading-[40px] md:text-[94px] lg:text-[70px] xl:text-[94px] md:leading-[90px] lg:leading-[70px] xl:leading-[90px]">
          <div>
            <div className="-tracking-[2px]">Create Your</div>
            <div className="flex flex-row whitespace-pre">
              <div className="-tracking-[2px]">Own&nbsp;</div>
              <div className="color-title -tracking-[2px]">NFT Dream</div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="-tracking-[2px]">Gallery</div>
            <Image
              className="py-[19.5px] hidden lg:block"
              src="/star.svg"
              alt="logo"
              width={84}
              height={84}
            />
          </div>

          <div className="mt-[32px] flex flex-col md:flex-row gap-[30px]">
            <button className="hidden md:flex items-center justify-center w-[120px] h-[120px] btn-description gradient rounded-full font-semibold text-[16px] leading-[26px]">
              Discover NFT
            </button>
            <div className="text-[16px] leading-[26px] flex justify-center w-fit md:w-[418px] font-normal">
              The Larges NFT Marketplace. Automatic and truly unique digital creation. Signed and
              issued by the creator, made possible by blockchain technologi
            </div>
            <div className="block md:hidden text-[16px] leading-[19px] font-semibold bg-[#1C51FE] rounded-[66px] py-[16px] w-full text-center flex justify-center">
              Discover NFT
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="absolute right-[103px] top-[195px] z-30 w-[240.73px] h-[287px] 2xl:w-[388.13px] 2xl:h-[463px]">
            <Image className="" src="/image_1.png" alt="logo" layout="fill" />
          </div>
          <div className="absolute right-[182px] top-[146px] z-20 w-[240.73px] h-[287px] 2xl:w-[388.13px] 2xl:h-[463px]">
            <Image className="" src="/image_2.png" alt="logo" layout="fill" />
          </div>
          <div className="absolute right-[47px] top-[260px] z-10 w-[240.73px] h-[287px] 2xl:w-[388.13px] 2xl:h-[463px]">
            <Image className="" src="/image_3.png" alt="logo" layout="fill" />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-[29px] pt-[44px] md:pt-[69px]">
        <div className="flex flex-col gap-[8px]">
          <div className="text-[16px] leading-[19px]">Artwork</div>
          <div className="font-bold text-[28px] leading-[34px]">25.1k</div>
        </div>
        <div className="flex flex-col gap-[8px]">
          <div className="text-[16px] leading-[19px]">Artist</div>
          <div className="font-bold text-[28px] leading-[34px]">15.6k</div>
        </div>
        <div className="flex flex-col gap-[8px]">
          <div className="text-[16px] leading-[19px]">Aucition</div>
          <div className="font-bold text-[28px] leading-[34px]">10.2k</div>
        </div>
      </div>
      <div className="pt-[32px] flex flex-wrap md:flex-row md:justify-between justify-center items-center md:py-6 gap-4 md:gap-[48px]">
        {icones.map(({ src, alt }, index) => {
          return (
            <div className="py-[24px]" key={`${index}`}>
              <Image className="  md:block" src={src} alt={alt} width={140} height={48} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
