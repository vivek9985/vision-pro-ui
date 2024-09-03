import Image from "next/image";
import userIcon from "@/app/assets/icons/users.svg";
import tabIcon from "@/app/assets/icons/tab.svg";
import appleIcon from "@/app/assets/icons/apple.svg";
import amazonIcon from "@/app/assets/icons/amazon.svg";
import plusIcon from "@/app/assets/icons/plus.svg";

const MainNav = () => {
  return (
    <ul className="flex flex-col items-center justify-center gap-2 py-[10px] w-[68px] bg-[#ffffff25] backdrop-blur-[25px] rounded-full border-[1px] border-[#ffffff10] select-none">
      <li className="w-[52px] h-[52px] bg-[#00000010] rounded-full flex items-center justify-center cursor-pointer">
        <Image className="w-8 h-8 object-cover" src={userIcon} />
      </li>
      <li className="w-[52px] h-[52px] hover:bg-[#00000010] rounded-full flex items-center justify-center cursor-pointer">
        <Image className="w-8 h-8 object-cover" src={tabIcon} />
      </li>
      <li className="w-[28px] h-px bg-[#ffffff]">{/* 6d7171 */}</li>
      <li className="w-[52px] h-[52px] hover:bg-[#00000010] rounded-full flex items-center justify-center cursor-pointer">
        <Image className="w-8 h-8 object-cover" src={appleIcon} />
      </li>
      <li className="w-[52px] h-[52px] hover:bg-[#00000010] rounded-full flex items-center justify-center cursor-pointer">
        <Image className="w-8 h-8 object-cover" src={amazonIcon} />
      </li>
      <li className="w-[52px] h-[52px] hover:bg-[#00000010] rounded-full flex items-center justify-center cursor-pointer">
        <Image className="w-h-6 h-6 object-cover" src={plusIcon} />
      </li>
    </ul>
  );
};

export default MainNav;
