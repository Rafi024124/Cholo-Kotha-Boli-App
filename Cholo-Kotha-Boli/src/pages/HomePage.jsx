import React from 'react';

import NoChatSelected from '../components/NoChatSelected';
import ChatContainer from '../components/ChatContainer';
import UserSidebar from '../components/UserSidebar'; // We'll create this next
import { useChatStore } from '../store/useChatStore.js';




const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
  <div className="flex gap-2 h-[calc(100vh-4rem)] bg-[var(--bg-color)] text-[var(--text-color)] flex-row">
  {/* Sidebar */}
  <div className="w-16 sm:w-64 border-r border-[var(--primary-color)] bg-[var(--bg-color)]  overflow-y-auto flex-shrink-0">
    <UserSidebar />
  </div>

  {/* Main Chat Area */}
  <div className="flex-1 min-w-0 overflow-hidden">
    {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
  </div>
</div>


  );
};

export default HomePage;
