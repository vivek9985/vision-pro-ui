import CircleArrowButton from "../utils/CircleArrowButton";

export const MarkAttendance = () => {
  return (
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
        <button className="rounded-full py-3 px-8 text-white font-bold text-lg bg-[#0466C8]">
          Out for Lunch
        </button>
        <button className="rounded-full py-3 px-8 text-white font-bold text-lg bg-[#00000078]">
          Out for Break
        </button>
        <button className="col-span-2 rounded-full py-3 px-8 text-[#E94045] font-bold text-lg bg-[#00000078]">
          Clock Out
        </button>
      </div>
    </div>
  );
};
