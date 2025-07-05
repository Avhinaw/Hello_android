import React from 'react'
import UserChat from '../ui/UserChat'
import AiChat from '../ui/AiChat'

function ChatInterface() {
  return (
    <div className="w-[70vw] h-[80vh] py-8 px-15 flex flex-col gap-5 overflow-y-auto">
  <UserChat />
  <AiChat />
</div>
  )
}

export default ChatInterface;