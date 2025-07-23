import React, { useEffect, useRef } from "react";
import { useChatStore } from "../store/useChatStore";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "../pages/skeletons/MessageSkeleton";
import { useAuthStore } from "../store/useAuthStore";
import { formatMessageTime } from "../lib/utils";

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessageLoading,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    getMessages(selectedUser._id);
    subscribeToMessages();
    return () => unsubscribeFromMessages();
  }, [selectedUser._id, getMessages, unsubscribeFromMessages, subscribeToMessages]);

  useEffect(() => {
    if (messageEndRef.current && messages)
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (isMessageLoading)
    return (
      <div className="bg-gradient-to-br from-gray-200 via-purple-200 to-cyan-300 h-full flex flex-col">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );

  return (
    <div
      className="flex-1 flex flex-col overflow-hidden h-full text-cyan-900"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 0,
      }}
    >
      <ChatHeader />

      <div
        className="
          flex-1
          overflow-y-auto
          p-4
          space-y-4
          scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-cyan-900
          max-h-[calc(100vh-12rem)] sm:max-h-[calc(100vh-10rem)]
          bg-white/90
          rounded-lg
          shadow-inner
        "
      >
        {messages.map((message) => (
          <div
            key={message._id}
            className={`chat ${message.senderId === authUser._id ? "chat-end" : "chat-start"}`}
            ref={messageEndRef}
          >
            <div className="chat-image avatar">
              <div className="size-10 rounded-full border border-cyan-600 shadow-sm">
                <img
                  src={
                    message.senderId === authUser._id
                      ? authUser.profilePic || "/avatar.jpg"
                      : selectedUser.profilePic || "/avatar.jpg"
                  }
                  alt="profile pic"
                />
              </div>
            </div>
            <div className="chat-header mb-1 text-xs text-cyan-700 opacity-80">
              <time className="ml-1">{formatMessageTime(message.createdAt)}</time>
            </div>
            <div
              className={`chat-bubble flex flex-col text-sm rounded-lg shadow-md px-3 py-2 max-w-[80vw] sm:max-w-[60vw] ${
                message.senderId === authUser._id
                  ? "bg-gradient-to-r from-purple-200 via-cyan-100 to-purple-200 text-cyan-800"
                  : "bg-gray-100 text-cyan-900"
              }`}
              style={{ boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}
            >
              {message.image && (
                <img
                  src={message.image}
                  alt="pic"
                  className="sm:max-w-[200px] rounded-md mb-2 border border-cyan-300"
                />
              )}
              {message.text && <p>{message.text}</p>}
            </div>
          </div>
        ))}
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatContainer;
