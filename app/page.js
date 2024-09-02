import Image from "next/image";
import userIcon from "@/app/assets/icons/users.svg";
import tabIcon from "@/app/assets/icons/tab.svg";
import appleIcon from "@/app/assets/icons/apple.svg";
import amazonIcon from "@/app/assets/icons/amazon.svg";
import plusIcon from "@/app/assets/icons/plus.svg";
import dashboardIcon from "@/app/assets/icons/dashboard.svg";
import dollarIcon from "@/app/assets/icons/dollar.svg";
import clockIcon from "@/app/assets/icons/clock.svg";
import settingIcon from "@/app/assets/icons/setting.svg";
import Dashborad from "./components/dashboard/Dashborad";

const Home = () => {
  return (
    <main className="bg-black flex flex-col items-center justify-center h-[100vh] w-full main-bg bg-no-repeat bg-cover bg-center">
      <div className="flex items-center justify-center gap-[56px]">
        <ul className="flex flex-col items-center justify-center gap-2 py-[10px] w-[68px] bg-[#ffffff25] backdrop-blur-[25px] rounded-full border-[1px] border-[#ffffff10]">
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
        <div className="flex flex-col items-center justify-center">
          <Dashborad />
          <ul className="flex items-center justify-center gap-4 py-3 px-[24px] bg-[#ffffff20] backdrop-blur-[25px] rounded-full border-[1px] border-[#ffffff40] -translate-y-6">
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
        </div>
      </div>
    </main>
  );
};
export default Home;
