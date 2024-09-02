import Image from "next/image";
import calendarIcon from "@/app/assets/icons/calendar.svg";
import arrowTopRightIcon from "@/app/assets/icons/arrow-top-right.svg";
import profile from "@/app/assets/profile.png";

const Dashborad = () => {
    return (
        <div className="w-[1372px] p-10 bg-[#ffffff10] backdrop-blur-[25px] rounded-[56px] border-[1px] border-[#ffffff25]">
            <div className="flex justify-between mb-[18px]">
                <div>
                    <p className="text-lg font-bold text-[#999ba1]">Welcome back</p>
                    <h2 className="text-[48px] leading-[74.6px] tracking-[-1.49px] font-bold text-white">Ibrahim Memon</h2>
                </div>
                <div className="flex items-center gap-2">
                    <div className="p-px rounded-[40px] bg-gradient-to-b from-[#ffffff10] to-[#ffffff40]">
                        <ul className="py-1 px-2 bg-[#3f4046] backdrop-blur-[25px] rounded-[40px] flex items-center gap-2 text-white font-bold text-sm shadow-[inset_1px_3px_6px_1px_rgba(0,0,0,0.20)]">
                            <li className="py-[15px] px-4 hover:bg-[#ffffff20] rounded-[40px] cursor-pointer">
                                <span>Today</span>
                            </li>
                            <li className="py-[15px] px-4 bg-[#ffffff20] rounded-[40px] cursor-pointer">
                                <span>This month</span>
                            </li>
                            <li className="flex items-center gap-[6px] py-[15px] px-4 hover:bg-[#ffffff20] rounded-[40px] cursor-pointer">
                                <Image className="w-[18px] h-[19px] object-cover" src={calendarIcon} />
                                <span>Date</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-px rounded-[40px] bg-gradient-to-b from-[#ffffff10] to-[#ffffff40]">
                        <div className="w-[56px] h-[56px] flex items-center justify-center bg-[#3f4046] backdrop-blur-[25px] rounded-full p-1 shadow-[inset_1px_3px_6px_1px_rgba(0,0,0,0.20)]">
                            <Image className="w-full h-full object-cover" src={profile} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <div className="w-[580px] h-[336px] rounded-[20px] bg-[#28324170]">
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
                                <div className="rounded-[20px] bg-gradient-to-b from-[#ffffff10] to-[#ffffff10]">
                                    <div className="w-[44px] h-[44px] flex items-center justify-center backdrop-blur-[25px] rounded-full p-1 shadow-[inset_1px_3px_6px_1px_rgba(0,0,0,0.20)]">
                                        <Image className="w-4 h-4 object-cover" src={arrowTopRightIcon} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-[340px] h-[336px] rounded-[20px] bg-[#28324170]"></div>
                        <div className="w-[340px] h-[336px] rounded-[20px] bg-[#28324170]"></div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-[580px] h-[336px] rounded-[20px] bg-[#28324170]">

                    </div>
                    <div className="flex gap-4">
                        <div className="w-[340px] h-[336px] rounded-[20px] bg-[#28324170]"></div>
                        <div className="w-[340px] h-[336px] rounded-[20px] bg-[#28324170]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashborad;