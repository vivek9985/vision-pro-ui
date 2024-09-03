import CircleArrowButton from "../utils/CircleArrowButton";

const HRLetters = () => {
  return (
    <div className="rounded-[20px] bg-[#28324170] px-4 py-2">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg text-white">HR Letters</h3>
        <CircleArrowButton />
      </div>
      <div className="flex items-center gap-1">
        <span className="text-white font-bold text-[14px]">Status</span>
      </div>
      <div className="flex items-center gap-1 mt-1">
        <span className="text-white font-medium text-[28px]">21</span>
        <div className="bg-[#202121] rounded-lg px-1 flex items-center justify-center gap-2 mt-[5px]">
          <span className="text-[#55CD0A] font-bold text-[11px]">Approved</span>
        </div>
      </div>
    </div>
  );
};

export default HRLetters;
