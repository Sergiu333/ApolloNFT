import Image from 'next/image';

const Community = () => {
  return (
    <div className="px-[120px] py-[98px] flex flex-col">
      <Image
        className="rounded-[20px] w-full flex justify-center"
        src="/community.jpg"
        alt="community"
        width={1200}
        height={290}
      />
      <button className="flex bg-white text-[#1C51FE] py-[16px] px-[32px] w-fit rounded-[66px] self-center -mt-[120px]">
        Watch Video
      </button>
    </div>
  );
};

export default Community;
