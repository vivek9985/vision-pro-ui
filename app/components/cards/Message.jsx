import CircleArrowButton from "../utils/CircleArrowButton";

const Message = () => {
  return (
    <div className="rounded-[20px] bg-[#28324170] px-4 py-2">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg text-white">Message</h3>
        <CircleArrowButton />
      </div>
      <div className="flex items-center gap-1">
        <div className="bg-[#202121] rounded-lg px-1 flex items-center justify-center gap-1">
          <span className="text-white font-bold text-[11px]">+2 Unread</span>
        </div>
        <span className="text-[#9d9d9d] font-bold text-[14px]">Chat</span>
      </div>
      <div className="flex items-center gap-1 mt-1">
        <span className="text-white font-medium text-[28px]">15</span>
      </div>
    </div>
  );
};

export default Message;
