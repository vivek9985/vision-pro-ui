import Image from "next/image";
import calendarIcon from "@/app/assets/icons/calendar.svg";
import greenArrowTop from "@/app/assets/icons/green-arrow-top.svg";
import dollar from "@/app/assets/icons/dollar-icon.svg";
import redArrowBottom from "@/app/assets/icons/red-arrow-bottom.svg";
import profile from "@/app/assets/profile.png";
import plusIcon from "@/app/assets/icons/plus.svg";
import CircleArrowButton from "../utils/CircleArrowButton";

const Dashborad = () => {
  return (
    <div className="w-[1250px] p-10 bg-[#ffffff10] backdrop-blur-[25px] rounded-[56px] border-[1px] border-[#ffffff25]">
      <div className="flex justify-between mb-[18px]">
        <div>
          <p className="text-lg font-bold text-[#3c3c3d]">Welcome back</p>
          <h2 className="text-[48px] leading-[74.6px] tracking-[-1.49px] font-bold text-white">
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
          <div className="rounded-[20px] bg-[#28324170]">
            <div className="flex items-center justify-between pl-[17px] pr-[8px]">
              <h3 className="font-bold text-lg text-white">Mark Attendance</h3>
              <div className="flex items-center gap-2 py-2">
                <div className="rounded-[40px] bg-gradient-to-b from-[#EBEBF504] to-[#EBEBF505]">
                  <ul className="py-2 px-2 backdrop-blur-[25px] rounded-[56px] flex items-center gap-2 text-white font-medium text-xs shadow-[inset_1px_3px_6px_1px_rgba(0,0,0,0.20)]">
                    <li className="py-2 px-4 bg-[#ffffff20] rounded-[40px] cursor-pointer">
                      <span>Work From Home</span>
                    </li>
                    <li className="py-2 px-4 hover:bg-[#ffffff20] rounded-[40px] cursor-pointer">
                      <span>Office</span>
                    </li>
                  </ul>
                </div>
                <CircleArrowButton />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 px-[17px] py-[30px]">
              <button className="rounded-full py-3 px-8 text-white font-bold text-lg bg-[#0466C8]">Out for Lunch</button>
              <button className="rounded-full py-3 px-8 text-white font-bold text-lg bg-[#00000078]">Out for Break</button>
              <button className="col-span-2 rounded-full py-3 px-8 text-[#E94045] font-bold text-lg bg-[#00000078]">Clock Out</button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-[20px] bg-[#28324170]">Income</div>
            <div className="rounded-[20px] bg-[#28324170]">Income</div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
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
                    <span className="text-[#55CD0A] font-bold text-[11px]">
                      7,2%
                    </span>
                  </div>
                  <span className="text-[#9d9d9d] font-bold text-[14px]">
                    Higher
                  </span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <Image
                    className="w-[15px] h-[32px] object-contain"
                    src={dollar}
                  />
                  <span className="text-white font-medium text-[28px]">
                    12,800.00
                  </span>
                </div>
              </div>
              <div className="rounded-[20px] bg-[#28324170] px-4 py-2">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-white">Expenses</h3>
                  <CircleArrowButton />
                </div>
                <div className="flex items-center gap-1">
                  <div className="bg-[#283241] rounded-lg py-1 px-2 flex items-center justify-center gap-1">
                    <Image
                      className="w-[9px] h-[10px] object-contain"
                      src={redArrowBottom}
                    />
                    <span className="text-[#E94045] font-bold text-[11px]">
                      -12,2%
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <Image
                    className="w-[15px] h-[32px] object-contain"
                    src={dollar}
                  />
                  <span className="text-white font-medium text-[28px]">
                    2,800.00
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-[20px] bg-[#28324170] px-4 py-2">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-white">Message</h3>
                  <CircleArrowButton />
                </div>
                <div className="flex items-center gap-1">
                  <div className="bg-[#202121] rounded-lg px-1 flex items-center justify-center gap-1">
                    <span className="text-white font-bold text-[11px]">
                      +2 Unread
                    </span>
                  </div>
                  <span className="text-[#9d9d9d] font-bold text-[14px]">
                    Chat
                  </span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-white font-medium text-[28px]">15</span>
                </div>
              </div>
              <div className="rounded-[20px] bg-[#28324170] px-4 py-2">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-white">HR Letters</h3>
                  <CircleArrowButton />
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-white font-bold text-[14px]">
                    Status
                  </span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-white font-medium text-[28px]">21</span>
                  <div className="bg-[#202121] rounded-lg px-1 flex items-center justify-center gap-2 mt-[5px]">
                    <span className="text-[#55CD0A] font-bold text-[11px]">
                      Approved
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 rounded-[20px] bg-[#28324170]">
                <Image className="w-h-6 h-6 object-cover" src={plusIcon} />
                <span className="text-[#9d9d9d] font-bold text-[14px]">
                  Add widget
                </span>
              </div>
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
