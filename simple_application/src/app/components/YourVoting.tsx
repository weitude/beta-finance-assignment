const YourVoting = () => {
  return (
    <div className="absolute top-[249px] left-1/2 transform -translate-x-1/2 rounded-xl bg-white [backdrop-filter:blur(50px)] w-[884px] h-20 text-center">
      <div className="absolute top-[28px] left-[25px] text-sm leading-[24px] font-semibold text-left inline-block w-[77px]">
        Your Voting
      </div>
      <div className="absolute top-[15px] left-[520px] leading-[20px] text-right">
        Voting Power
      </div>
      <div className="absolute top-[40px] left-[476px] text-sm leading-[24px] font-semibold text-right">
        00,000.00 VOTE
      </div>
      <button className="absolute top-[20px] left-[636px] rounded-lg bg-mediumaquamarine-100 w-[100px] h-10 text-white hover:cursor-pointer">
        Support
      </button>
      <button className="absolute top-[20px] left-[744px] rounded-lg bg-salmon-100 w-[100px] h-10 text-white hover:cursor-pointer">
        Reject
      </button>
    </div>
  );
};

export default YourVoting;
