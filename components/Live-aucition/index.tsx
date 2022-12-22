import Image from 'next/image';

const LiveAucition = () => {
  return (
    <div className="h-[300px]">
      <div className="pt-24 absolute overflow-hidden w-full h-full ">
        <div className="h-[184px] bg-red-800 -rotate-[6.19deg] absolute w-[3000px]  mt-14 -left-[870px] flex flex-row gap-[22px] justify-center items-center font-extrabold text-[136px] leading-[146px] -tracking-[0.03em] whitespace-pre">
          <div>LIVE AUCITION</div>
          <Image src="/Star 2.svg" alt="star 2" width={84} height={84} />
          <div>LIVE AUCITION</div>
        </div>
      </div>
    </div>
  );
};

export default LiveAucition;
