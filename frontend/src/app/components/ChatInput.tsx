import React, { useEffect, useRef, useState } from 'react';
import { useChat } from '../context/ChatContext';
import { sendMsgToBackend } from '../api/chat';
import { RiSendPlaneLine } from 'react-icons/ri';

export default function ChatInput() {
  const [question, setQuestion] = useState("");
  const { addMessage } = useChat();
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = async () => {
    if (!question.trim()) return;
    addMessage({ role: 'user', text: question });
    setQuestion('');

    try {
      const reply = await sendMsgToBackend(question);
      addMessage({ role: 'ai', text: reply });
    } catch (err) {
      addMessage({ role: 'ai', text: 'Something went wrong' });
    }
  };

  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;

    const handleFocus = () => {
      setTimeout(() => {
        input.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    };

    input.addEventListener('focus', handleFocus);
    return () => input.removeEventListener('focus', handleFocus);
  }, []);
  
  return (
    <div className="relative w-full max-w-[100vw] md:max-w-[70%] border rounded-xl border-[#e7edf4] bg-white dark:bg-gray-700 lg:dark:bg-gray-900 dark:text-white">
      <textarea
        ref={inputRef}
        placeholder="You ask, We answer"
        className="w-full resize-none p-3 pr-10 outline-none text-sm md:text-base bg-transparent h-25 max-h-48 min-h-[70px] lg:min-h-[150px] overflow-y-auto"
        value={question}
        rows={1}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <RiSendPlaneLine
        className="absolute text-blue-500 cursor-pointer text-xl bottom-3 right-4 hover:scale-110 transition-all duration-300 ease-in-out"
        onClick={handleSend}
      />
    </div>
  );
}
