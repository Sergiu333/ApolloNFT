import Image from 'next/image';

const Footer = () => {
  const social = [
    {
      src: '/Social icon 1.svg',
      alt: 'logo',
    },
    {
      src: '/Social icon 2.svg',
      alt: 'logo',
    },
    {
      src: '/Social icon 3.svg',
      alt: 'logo',
    },
    {
      src: '/Social icon 4.svg',
      alt: 'logo',
    },
    {
      src: '/Social icon 5.svg',
      alt: 'logo',
    },
    {
      src: '/Social icon 6.svg',
      alt: 'logo',
    },
  ];

  return (
    <div className="px-[120px] pt-[176px]">
      <div className="pb-19px text-white ">
        <div className="gap-[125px] flex flex-row pb-[39px]">
          <div className="flex flex-col items-start gap-[17px]">
            <div className="font-bold text-[50.52px] leading-[61px]">
              <span className="header-logo-gradient">Apollo</span>
              <span className="text-secondary-main header-logo-gradient">NFT</span>
            </div>
            <div className="font-['Inter'] font-normal text-[18px] leading-[18px] text-[#999999] not-italic w-[279px]">
              This growth plan will help you reach your resolutions and achieve the goals you have
              been striving towards.
            </div>
            <div className="flex flex-row items-center gap-[24px]">
              {social.map(({ src, alt }, index) => {
                return <Image src={src} alt={alt} width={24} height={24} />;
              })}
            </div>
          </div>
          <div className="flex flex-row justify-between w-full ">
            <div className="flex flex-col items-start">
              <div className="pb-[20px] text-white font-semibold text-[16px] leading-[19px]">
                Marketplace
              </div>
              <div className="flex flex-col gap-[9px]">
                <div className="text-[#999999] font-normal text-[15px] leading-[18px]">
                  Buy Product
                </div>
                <div className="text-[#999999] font-normal text-[15px] leading-[18px]">
                  Sell Product
                </div>
                <div className="text-[#999999] font-normal text-[15px] leading-[18px]">
                  Our Creator
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start">
              <div className="pb-[20px] text-white font-semibold text-[16px] leading-[19px]">
                Resources
              </div>
              <div className="flex flex-col gap-[9px]">
                <div className="text-[#999999] font-normal text-[15px] leading-[18px]">
                  About Us
                </div>
                <div className="text-[#999999] font-normal text-[15px] leading-[18px]">Event</div>
                <div className="text-[#999999] font-normal text-[15px] leading-[18px]">
                  Tutorial
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start">
              <div className="pb-[20px] text-white font-semibold text-[16px] leading-[19px]">
                Company
              </div>
              <div className="flex flex-col gap-[9px]">
                <div className="text-[#999999] font-normal text-[15px] leading-[18px]">Media</div>
                <div className="text-[#999999] font-normal text-[15px] leading-[18px]">Blog</div>
                <div className="text-[#999999] font-normal text-[15px] leading-[18px]">Pricing</div>
              </div>
            </div>

            <div className="flex flex-col items-start">
              <div className="pb-[20px] text-white font-semibold text-[16px] leading-[19px]">
                Legal
              </div>
              <div className="flex flex-col gap-[9px]">
                <div className="text-[#999999] font-normal text-[15px] leading-[18px]">Terms</div>
                <div className="text-[#999999] font-normal text-[15px] leading-[18px]">Privacy</div>
                <div className="text-[#999999] font-normal text-[15px] leading-[18px]">Support</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center pt-8 gap-8 border-t border-t-inner-border">
          <span className="text-gray-400 font-normal text-base">
            © 2077 ApolloNFT. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
