import Image from "next/image";
import arrowTopRightIcon from "@/app/assets/icons/arrow-top-right.svg";

const CircleArrowButton = () => {
  return (
    <div className="rounded-[20px] bg-gradient-to-b from-[#ffffff10] to-[#ffffff10]">
      <div className="w-[44px] h-[44px] flex items-center justify-center backdrop-blur-[25px] rounded-full p-1 shadow-[inset_1px_3px_6px_1px_rgba(0,0,0,0.20)]">
        <Image className="w-4 h-4 object-cover" src={arrowTopRightIcon} />
      </div>
    </div>
  );
};

export default CircleArrowButton;
