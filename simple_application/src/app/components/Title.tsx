import Image from "next/image";
import arrowLeft from "@img/arrowleft.svg";

const Title = () => {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 w-[884px]">
      <div className="absolute top-[120px] w-[53px] h-5 flex flex-row items-center justify-start gap-[8px]">
        <Image
          className="relative w-4 h-4 overflow-hidden shrink-0"
          alt=""
          src={arrowLeft}
        />
        <div className="relative leading-[20px] hover:cursor-pointer">Back</div>
      </div>
      <div className="absolute top-[160px]  w-[380px] h-[63px]">
        <div className="absolute top-[43px] left-[0px] leading-[20px]">
          Active ends in : 2 days
        </div>
        <div className="absolute top-[0px] left-[0px] text-[24px] leading-[32px] font-semibold">
          Lorem ipsum dolor sit amet
        </div>
        <div className="absolute top-[4px] left-[328px] rounded bg-lightgreen w-[52px] h-6 flex flex-col py-px px-0 box-border items-center justify-start text-white">
          <div className="relative leading-[20px]">Active</div>
        </div>
      </div>
    </div>
  );
};

export default Title;
