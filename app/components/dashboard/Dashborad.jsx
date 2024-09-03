import Image from "next/image";
import calendarIcon from "@/app/assets/icons/calendar.svg";
import profile from "@/app/assets/profile.png";
import { MarkAttendance } from "../cards/MarkAttendance";
import Income from "../cards/Income";
import Expenses from "../cards/Expenses";
import Message from "../cards/Message";
import HRLetters from "../cards/HRLetters";
import AddWidget from "../cards/AddWidget";
import LeaveSummery from "../cards/LeaveSummery";

const Dashborad = () => {
  return (
    <div className="w-[1250px] h-[750px] p-10 bg-[#ffffff10] backdrop-blur-[25px] rounded-[56px] border-[1px] border-[#ffffff25] shadow-2xl overflow-y-scroll scroll-bar overscroll-x-none">
      <div className="flex justify-between mb-[18px]">
        <div>
          <p className="text-lg font-bold text-[#3c3c3d]">Welcome back</p>
          <h2 className="text-[48px] tracking-[-1.49px] font-bold text-white leading-[100%]">
            Vivek Anando
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="p-px rounded-[40px] bg-gradient-to-b from-[#ffffff10] to-[#ffffff40]">
            <ul className="py-1 px-2 bg-[#3f4046] backdrop-blur-[25px] rounded-[40px] flex items-center gap-2 text-white font-bold text-sm shadow-[inset_1px_3px_6px_1px_rgba(0,0,0,0.20)] select-none">
              <li className="py-[15px] px-4 hover:bg-[#ffffff20] rounded-[40px] cursor-pointer">
                <span>Today</span>
              </li>
              <li className="py-[15px] px-4 bg-[#ffffff20] rounded-[40px] cursor-pointer">
                <span>This month</span>
              </li>
              <li className="flex items-center gap-[6px] py-[15px] px-4 hover:bg-[#ffffff20] rounded-[40px] cursor-pointer">
                <Image
                  className="w-[18px] h-[19px] object-cover"
                  src={calendarIcon}
                />
                <span>Date</span>
              </li>
            </ul>
          </div>
          <div className="p-px rounded-[40px] bg-gradient-to-b from-[#ffffff10] to-[#ffffff40] select-none">
            <div className="w-[56px] h-[56px] flex items-center justify-center bg-[#3f4046] backdrop-blur-[25px] rounded-full p-1 shadow-[inset_1px_3px_6px_1px_rgba(0,0,0,0.20)]">
              <Image className="w-full h-full object-cover" src={profile} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <MarkAttendance />
          <div className="grid grid-cols-2 gap-4">
            <LeaveSummery />
            <div className="rounded-[20px] bg-[#28324170]">Income</div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <Income />
              <Expenses />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Message />
              <HRLetters />
              <AddWidget />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-[20px] bg-[#28324170]">Income</div>
            <div className="flex flex-col gap-4">
              <div className="rounded-[20px] bg-[#28324170]">Income</div>
              <div className="rounded-[20px] bg-[#28324170]">Income</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashborad;
