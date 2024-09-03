import Image from "next/image";
import dashboardIcon from "@/app/assets/icons/dashboard.svg";
import dollarIcon from "@/app/assets/icons/dollar.svg";
import clockIcon from "@/app/assets/icons/clock.svg";
import settingIcon from "@/app/assets/icons/setting.svg";

const NavTwo = () => {
  return (
    <ul className="flex items-center justify-center gap-4 py-3 px-[24px] bg-[#ffffff20] backdrop-blur-[25px] rounded-full border-[1px] border-[#ffffff40] -translate-y-4 select-none">
      <li className="py-2 pl-3 pr-4 bg-[#00000010] rounded-full flex items-center justify-center gap-[6px] cursor-pointer">
        <Image className="w-6 h-6 object-cover" src={dashboardIcon} />
        <span className="text-white">Dashboard</span>
      </li>
      <li className="py-2 pl-3 pr-4 hover:bg-[#00000010] rounded-full flex items-center justify-center gap-[6px] cursor-pointer">
        <Image className="w-6 h-6 object-cover" src={dollarIcon} />
        <span className="text-white">Expense</span>
      </li>
      <li className="py-2 pl-3 pr-4 hover:bg-[#00000010] rounded-full flex items-center justify-center gap-[6px] cursor-pointer">
        <Image className="w-6 h-6 object-cover" src={clockIcon} />
        <span className="text-white">Timesheet</span>
      </li>
      <li className="py-2 pl-3 pr-4 hover:bg-[#00000010] rounded-full flex items-center justify-center gap-[6px] cursor-pointer">
        <Image className="w-6 h-6 object-cover" src={settingIcon} />
        <span className="text-white">Settings</span>
      </li>
    </ul>
  );
};

export default NavTwo;
