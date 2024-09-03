import Image from "next/image";
import tabIcon from "@/app/assets/icons/tab.svg";
import appleIcon from "@/app/assets/icons/apple.svg";
import appleTV from "@/app/assets/icons/apps/appletv.svg";
import music from "@/app/assets/icons/apps/music.svg";
import mindfullness from "@/app/assets/icons/apps/mindfullness.svg";
import setting from "@/app/assets/icons/apps/setting.svg";
import freefrom from "@/app/assets/icons/apps/freeform.svg";
import safari from "@/app/assets/icons/apps/safari.svg";
import photos from "@/app/assets/icons/apps/photos.svg";
import note from "@/app/assets/icons/apps/notes.svg";
import appStore from "@/app/assets/icons/apps/app-store.svg";
import mail from "@/app/assets/icons/apps/mail.svg";
import message from "@/app/assets/icons/apps/message.svg";
import keynote from "@/app/assets/icons/apps/keynote.svg";
import apps from "@/app/assets/icons/apps/apps.svg";
import a from "@/app/assets/icons/a.svg";

const Apps = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-[#ffffff25] backdrop-blur-[10px]">
      <div className="flex items-center justify-center gap-[116px]">
        <ul className="flex flex-col items-center justify-center gap-2 py-[10px] w-[68px] bg-[#00000020] backdrop-blur-[25px] rounded-full border-[1px] border-[#ffffff10] shadow-2xl">
          <li className="w-[52px] h-[52px] bg-[#00000010] rounded-full flex items-center justify-center cursor-pointer">
            <Image className="w-[31px] h-[27px] object-cover" src={a} />
          </li>
          <li className="w-[52px] h-[52px] hover:bg-[#00000010] rounded-full flex items-center justify-center cursor-pointer">
            <Image className="w-8 h-8 object-cover" src={tabIcon} />
          </li>
          <li className="w-[52px] h-[52px] hover:bg-[#00000010] rounded-full flex items-center justify-center cursor-pointer">
            <Image className="w-8 h-8 object-cover" src={appleIcon} />
          </li>
        </ul>
        <div className="flex flex-col items-center justify-center gap-[62px]">
          <ul className="flex items-center justify-center gap-[144px]">
            <li className="flex flex-col items-center justify-center gap-[14px]">
              <Image
                className="w-[120px] h-[120px] object-cover cursor-pointer hover:scale-105 duration-100 active:scale-95 shadow-2xl rounded-full"
                src={appleTV}
              />
              <span className="text-white font-semibold text-lg">TV</span>
            </li>
            <li className="flex flex-col items-center justify-center gap-[14px]">
              <Image
                className="w-[120px] h-[120px] object-cover cursor-pointer hover:scale-105 duration-100 active:scale-95 shadow-2xl rounded-full"
                src={music}
              />
              <span className="text-white font-semibold text-lg">Music</span>
            </li>
            <li className="flex flex-col items-center justify-center gap-[14px]">
              <Image
                className="w-[120px] h-[120px] object-cover cursor-pointer hover:scale-105 duration-100 active:scale-95 shadow-2xl rounded-full"
                src={mindfullness}
              />
              <span className="text-white font-semibold text-lg">
                Mindfullness
              </span>
            </li>
            <li className="flex flex-col items-center justify-center gap-[14px]">
              <Image
                className="w-[120px] h-[120px] object-cover cursor-pointer hover:scale-105 duration-100 active:scale-95 shadow-2xl rounded-full"
                src={setting}
              />
              <span className="text-white font-semibold text-lg">Setting</span>
            </li>
          </ul>
          <ul className="flex items-center justify-center gap-[144px]">
            <li className="flex flex-col items-center justify-center gap-[14px]">
              <Image
                className="w-[120px] h-[120px] object-cover cursor-pointer hover:scale-105 duration-100 active:scale-95 shadow-2xl rounded-full"
                src={freefrom}
              />
              <span className="text-white font-semibold text-lg">Freefrom</span>
            </li>
            <li className="flex flex-col items-center justify-center gap-[14px]">
              <Image
                className="w-[120px] h-[120px] object-cover cursor-pointer hover:scale-105 duration-100 active:scale-95 shadow-2xl rounded-full"
                src={safari}
              />
              <span className="text-white font-semibold text-lg">Safari</span>
            </li>
            <li className="flex flex-col items-center justify-center gap-[14px]">
              <Image
                className="w-[120px] h-[120px] object-cover cursor-pointer hover:scale-105 duration-100 active:scale-95 shadow-2xl rounded-full"
                src={photos}
              />
              <span className="text-white font-semibold text-lg">Photos</span>
            </li>
            <li className="flex flex-col items-center justify-center gap-[14px]">
              <Image
                className="w-[120px] h-[120px] object-cover cursor-pointer hover:scale-105 duration-100 active:scale-95 shadow-2xl rounded-full"
                src={note}
              />
              <span className="text-white font-semibold text-lg">Notes</span>
            </li>
            <li className="flex flex-col items-center justify-center gap-[14px]">
              <Image
                className="w-[120px] h-[120px] object-cover cursor-pointer hover:scale-105 duration-100 active:scale-95 shadow-2xl rounded-full"
                src={appStore}
              />
              <span className="text-white font-semibold text-lg">
                App Store
              </span>
            </li>
          </ul>
          <ul className="flex items-center justify-center gap-[144px]">
            <li className="flex flex-col items-center justify-center gap-[14px]">
              <Image
                className="w-[120px] h-[120px] object-cover cursor-pointer hover:scale-105 duration-100 active:scale-95 shadow-2xl rounded-full"
                src={mail}
              />
              <span className="text-white font-semibold text-lg">Mail</span>
            </li>
            <li className="flex flex-col items-center justify-center gap-[14px]">
              <Image
                className="w-[120px] h-[120px] object-cover cursor-pointer hover:scale-105 duration-100 active:scale-95 shadow-2xl rounded-full"
                src={message}
              />
              <span className="text-white font-semibold text-lg">Message</span>
            </li>
            <li className="flex flex-col items-center justify-center gap-[14px]">
              <Image
                className="w-[120px] h-[120px] object-cover cursor-pointer hover:scale-105 duration-100 active:scale-95 shadow-2xl rounded-full"
                src={keynote}
              />
              <span className="text-white font-semibold text-lg">Keynote</span>
            </li>
            <li className="flex flex-col items-center justify-center gap-[14px]">
              <Image
                className="w-[120px] h-[120px] object-cover cursor-pointer hover:scale-105 duration-100 active:scale-95 shadow-2xl rounded-full"
                src={apps}
              />
              <span className="text-white font-semibold text-lg">
                Compatible Apps
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Apps;
