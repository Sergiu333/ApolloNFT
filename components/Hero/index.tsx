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
    <div className="px-[120px] pt-[120px]">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col font-extrabold text-[94px] leading-[90px]">
          <div>Create Your</div>
          <div className="flex flex-row">
            <div>Own&nbsp;</div>
            <div className="color-title">NFT Dream</div>
          </div>
          <div className="flex flex-row">
            <div>Gallery</div>
            <Image className="py-[19.5px]" src="/star.svg" alt="logo" width={84} height={84} />
          </div>

          <div className="mt-[32px] flex flex-row gap-[30px]">
            <div className="flex items-center justify-center w-[120px] h-[120px] btn-description gradient rounded-full font-semibold text-[16px] leading-[26px]">
              Discover NFT
            </div>
            <div className="text-[16px] leading-[26px] flex justify-center w-[418px] font-normal">
              The Larges NFT Marketplace. Automatic and truly unique digital creation. Signed and
              issued by the creator, made possible by blockchain technologi
            </div>
          </div>
        </div>
        <div className="">
          <div className="absolute right-[103px] top-[195px] z-30">
            <Image className="" src="/image_1.png" alt="logo" width={388.13} height={463} />
          </div>
          <div className="absolute right-[182px] top-[146px] z-20">
            <Image className="" src="/image_2.png" alt="logo" width={388.13} height={463} />
          </div>
          <div className="absolute right-[47px] top-[260px] z-10">
            <Image className="" src="/image_3.png" alt="logo" width={388.13} height={463} />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-[29px] pt-[69px]">
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
      <div className="pt-[32px] flex flex-row justify-between items-center">
        {icones.map(({ src, alt }, index) => {
          return (
            <div className="py-[24px]" key={`${index}`}>
              <Image src={src} alt={alt} width={140} height={48} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
