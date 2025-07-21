import React from "react";

function UserChat({text}: {text: string}) {
  return (
    <div className="flex gap-2 items-end justify-end">
      <div className="bg-gray-100 p-2 lg:p-3 rounded-lg max-w-[70%] w-fit break-words">
        <p className="whitespace-pre-wrap break-words text-sm">{text}</p>
      </div>
      <div className="w-6 lg:w-8 h-6 lg:h-8 rounded-full bg-blue-500"></div>
    </div>
  );
}

export default UserChat;
