import React from 'react';
import { MessageCircleOff } from 'lucide-react';

const NoChatSelected = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4 py-10 bg-gradient-to-br from-cyan-100 via-purple-100 to-cyan-100 text-cyan-900">
      <MessageCircleOff className="w-16 h-16 text-cyan-600 mb-4" />
      <h2 className="text-2xl font-semibold mb-2 text-cyan-700">No Conversation Selected</h2>
      <p className="text-sm max-w-md text-cyan-700">
        Please select a user from the sidebar to start chatting. Your messages will appear here.
      </p>
    </div>
  );
};

export default NoChatSelected;
