import React from "react";

function AiChat({ text }: { text: string }) {
  return (
    <div className="flex gap-2 items-start w-full">
      {/* Avatar */}
      <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-blue-500 flex-shrink-0"></div>

      {/* Message bubble */}
      <div className="bg-gray-100 p-3 rounded-lg max-w-[76%] w-fit break-words">
        <p className="whitespace-pre-wrap break-words text-sm">{text}</p>
      </div>
    </div>
  );
}

export default AiChat;