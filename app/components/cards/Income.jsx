import Image from "next/image";
import greenArrowTop from "@/app/assets/icons/green-arrow-top.svg";
import dollar from "@/app/assets/icons/dollar-icon.svg";
import CircleArrowButton from "../utils/CircleArrowButton";

const Income = () => {
  return (
    <div className="rounded-[20px] bg-[#28324170] px-4 py-2">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg text-white">Income</h3>
        <CircleArrowButton />
      </div>
      <div className="flex items-center gap-1">
        <div className="bg-[#283241] rounded-lg py-1 px-2 flex items-center justify-center gap-1">
          <Image
            className="w-[9px] h-[10px] object-contain"
            src={greenArrowTop}
          />
          <span className="text-[#55CD0A] font-bold text-[11px]">7,2%</span>
        </div>
        <span className="text-[#9d9d9d] font-bold text-[14px]">Higher</span>
      </div>
      <div className="flex items-center gap-1 mt-1">
        <Image className="w-[15px] h-[32px] object-contain" src={dollar} />
        <span className="text-white font-medium text-[28px]">12,800.00</span>
      </div>
    </div>
  );
};

export default Income;
