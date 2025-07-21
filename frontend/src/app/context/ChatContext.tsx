'use client';

import React, { createContext, ReactNode, useContext, useState } from "react";

type Message = { // type for Message either user or ai
    role: 'user' | 'ai';
    text: string;
};

interface chatContextType { // types for context message which is Message and function to addMessage return void and a setMessages to set in the state
    messages: Message[];
    addMessage: (msg: Message) => void;
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

const chatContext = createContext<chatContextType | undefined>(undefined); // context created

interface chatProviderProps { // children interface
    children: ReactNode;
}

export const ChatProvider = ({children}: chatProviderProps) => { // main context provider funtion where everything be maintained
    const [messages, setMessages] = useState<Message[]>([]);

    const addMessage = (msg: Message) => {
        setMessages((prev)=> [...prev, msg]);
    };

    return (
        <chatContext.Provider value = {{messages, addMessage, setMessages}}>
            {children}
        </chatContext.Provider>
    );
};

export const useChat = () => {
    const context = useContext(chatContext);
    if(!context) throw new Error("useChat must be used inside <ChatProvider>");
    return context;
}