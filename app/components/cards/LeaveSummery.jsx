import Image from "next/image";
import plane from "@/app/assets/icons/plane.png";
import house from "@/app/assets/icons/house.png";
import casualEmoji from "@/app/assets/icons/casual-imoji.png";
import plus from "@/app/assets/icons/plus.svg";

const LeaveSummery = () => {
  return (
    <div className="rounded-[20px] bg-[#28324170] px-4 py-2">
      <div className="flex justify-between mb-4">
        <div>
          <h3 className="font-bold text-lg text-white">Leaves Summery</h3>
          <h3 className="font-bold text-[28px] text-white leading-[100%]">
            2024
          </h3>
        </div>
        <span className="font-bold text-[12px] text-[#9d9d9d] mt-2">
          This year
        </span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-full">
          <span className="font-bold text-[10px] text-[#9d9d9d] mb-0.5 leading-[10%]">
            Annual Leave
          </span>
          <div className="w-full rounded-[20px] bar bg-no-repeat bg-cover bg-center overflow-hidden">
            <div className="w-full p-[3px] flex items-center gap-[6px] bg-[#8F8C88] rounded-[20px] bar bg-no-repeat bg-cover bg-center">
              <div className="w-[26px] h-[26px] bg-black rounded-full flex items-center justify-center">
                <Image
                  className="w-[16px] h-[18px] object-contain"
                  src={plane}
                />
              </div>
              <h3 className="font-bold text-lg text-white">15/15</h3>
            </div>
          </div>
        </div>
        <div className="w-full">
          <span className="font-bold text-[10px] text-[#9d9d9d] mb-0.5 leading-[100%]">
            Unpaid Leave
          </span>
          <div className="w-full rounded-[20px] bar bg-no-repeat bg-cover bg-center overflow-hidden">
            <div className="w-9/12 p-[3px] flex items-center gap-[6px] bg-[#8F8C88] rounded-[20px] bar bg-no-repeat bg-cover bg-center">
              <div className="w-[26px] h-[26px] bg-black rounded-full flex items-center justify-center">
                <Image
                  className="w-[16px] h-[18px] object-contain"
                  src={house}
                />
              </div>
              <h3 className="font-bold text-lg text-white">12/15</h3>
            </div>
          </div>
        </div>
        <div className="w-full">
          <span className="font-bold text-[10px] text-[#ffffff] mb-0.5 leading-[100%]">
            Casual Leave
          </span>
          <div className="flex items-center gap-[11px]">
            <div className="w-10/12 rounded-[20px] bar bg-no-repeat bg-cover bg-center overflow-hidden">
              <div className="w-6/12 p-[3px] flex items-center gap-[6px] bg-[#0466C8] rounded-[20px] bar bg-no-repeat bg-cover bg-center">
                <div className="w-[26px] h-[26px] bg-black rounded-full flex items-center justify-center">
                  <Image
                    className="w-[16px] h-[18px] object-contain"
                    src={casualEmoji}
                  />
                </div>
                <h3 className="font-bold text-lg text-white">2/5</h3>
              </div>
            </div>
            <div className="w-[32px] h-[32px] rounded-full bg-[#0466C8] flex items-center justify-center">
              <Image className="w-5 h-5 object-contain" src={plus} />
            </div>
          </div>
        </div>
        <div className="w-full">
          <span className="font-bold text-[10px] text-[#9d9d9d] mb-0.5 leading-[10%]">
            Annual Leave
          </span>
          <div className="w-full rounded-[20px] bar bg-no-repeat bg-cover bg-center overflow-hidden">
            <div className="w-full p-[3px] flex items-center gap-[6px] bg-[#8F8C88] rounded-[20px] bar bg-no-repeat bg-cover bg-center">
              <div className="w-[26px] h-[26px] bg-black rounded-full flex items-center justify-center">
                <Image
                  className="w-[16px] h-[18px] object-contain"
                  src={plane}
                />
              </div>
              <h3 className="font-bold text-lg text-white">15/15</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveSummery;
