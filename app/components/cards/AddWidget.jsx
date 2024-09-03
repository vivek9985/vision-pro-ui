import Image from "next/image";
import plusIcon from "@/app/assets/icons/plus.svg";

const AddWidget = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-[20px] bg-[#28324170]">
      <Image className="w-h-6 h-6 object-cover" src={plusIcon} />
      <span className="text-[#9d9d9d] font-bold text-[14px]">Add widget</span>
    </div>
  );
};

export default AddWidget;
