import Image from "next/image";
import greenCheck from "@img/greencheck.svg";

const VotingResults = () => {
  return (
    <div className="absolute top-[345px] left-1/2 transform -translate-x-1/2 w-[884px] h-[236px]">
      <div className="absolute top-[0px] left-[0px] rounded-xl bg-white [backdrop-filter:blur(50px)] w-[884px] h-[236px]" />
      <div className="absolute top-[135px] left-[23px] rounded bg-gainsboro-200 box-border w-[362px] h-[34px] border-[1px] border-solid border-gainsboro-100" />
      <div className="absolute top-[79px] left-[23px] rounded bg-gainsboro-200 box-border w-[362px] h-[34px] border-[1px] border-solid border-gainsboro-100" />
      <div className="absolute top-[136px] left-[24px] rounded bg-salmon-200 w-9 h-8" />
      <div className="absolute top-[80px] left-[24px] rounded bg-mediumaquamarine-200 w-[324px] h-8" />
      <div className="absolute top-[55.5px] left-[23.5px] box-border w-[837px] h-px opacity-[0.5] border-t-[1px] border-solid border-lightsteelblue" />
      <div className="absolute top-[16px] left-[24px] text-sm leading-[24px] font-semibold">
        Voting results
      </div>
      <div className="absolute top-[86px] left-[40px] leading-[20px] font-semibold">
        Support
      </div>
      <div className="absolute top-[142px] left-[40px] leading-[20px] font-semibold">
        Reject
      </div>
      <div className="absolute top-[88px] left-[240px] text-3xs leading-[16px] text-right">
        9,000,000 VOTE
      </div>
      <div className="absolute top-[144px] left-[242px] text-3xs leading-[16px] text-right">
        1,000,000 VOTE
      </div>
      <div className="absolute top-[80px] left-[540px] leading-[20px]">
        Quorum
      </div>
      <div className="absolute top-[108px] left-[540px] leading-[20px]">
        Current Votes
      </div>
      <div className="absolute top-[136px] left-[540px] leading-[20px]">
        Differential
      </div>
      <div className="absolute top-[167px] left-[653px] text-3xs leading-[16px] opacity-[0.5]">
        Required 00K
      </div>
      <div className="absolute top-[111px] left-[623px] text-3xs leading-[16px] opacity-[0.5]">
        Required 000K
      </div>
      <div className="absolute top-[164px] left-[540px] leading-[20px]">
        Current Differential
      </div>
      <div className="absolute top-[192px] left-[540px] leading-[20px]">
        Total Voting Power
      </div>
      <div className="absolute top-[80px] left-[789px] leading-[20px] font-semibold text-right">
        Reached
      </div>
      <div className="absolute top-[108px] left-[823px] leading-[20px] font-semibold text-right">
        000K
      </div>
      <div className="absolute top-[136px] left-[789px] leading-[20px] font-semibold text-right">
        Reached
      </div>
      <div className="absolute top-[164px] left-[810px] leading-[20px] font-semibold text-right">
        00.00K
      </div>
      <div className="absolute top-[192px] left-[780px] leading-[20px] font-semibold text-right">
        00,000,000
      </div>
      <div className="absolute top-[86px] left-[339px] leading-[20px] font-semibold text-right">
        90%
      </div>
      <div className="absolute top-[142px] left-[342px] leading-[20px] font-semibold text-right">
        10%
      </div>
      <div className="absolute top-[192px] left-[24px] [text-decoration:underline] leading-[20px] font-semibold hover:cursor-pointer">
        View all votes
      </div>
      <Image
        className="absolute top-[84px] left-[845px] w-3 h-3"
        alt=""
        src={greenCheck}
      />
      <Image
        className="absolute top-[140px] left-[845px] w-3 h-3"
        alt=""
        src={greenCheck}
      />
    </div>
  );
};

export default VotingResults;
