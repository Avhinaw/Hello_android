import React from "react";
import UserChat from "../ui/UserChat";
import AiChat from "../ui/AiChat";
import { useChat } from "../context/ChatContext";
import ChatInput from "./ChatInput";

function ChatInterface() {
  const { messages } = useChat();

  return (
    <div className="relative w-screen lg:w-[70vw] h-[87vh] flex flex-col dark:bg-gray-800">
      
      {/* Scrollable messages */}
      <div className="flex-1 overflow-y-auto px-2 lg:px-4 pb-24 pt-8 flex flex-col gap-8">
        {messages.map((msg, i) => (
          <div key={i}>
            {msg.role === "user" ? (
              <UserChat text={msg.text} />
            ) : (
              <AiChat text={msg.text} />
            )}
          </div>
        ))}
      </div>

      {/* Mobile-only chat input */}
      <div className="sticky bottom-0 left-0 w-full md:hidden z-50 bg-white dark:bg-gray-900 px-4 py-2 border-t border-gray-300 dark:border-gray-700">
        <ChatInput />
      </div>
    </div>
  );
}

export default ChatInterface;