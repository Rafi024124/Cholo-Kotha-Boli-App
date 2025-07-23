import React, { useEffect, useState } from "react";
import { UserRound } from "lucide-react";
import SidebarSkeleton from "../pages/skeletons/SidebarSkeleton";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore.js";

const UserSidebar = () => {
  const { selectedUser, setSelectedUser, isUserLoading, users, getUsers } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  if (isUserLoading) return <SidebarSkeleton />;

  return (
    <aside
      className="
        bg-gradient-to-br from-cyan-100 via-purple-200 to-cyan-300
        text-cyan-900
        shadow-md border border-cyan-300
        h-full flex flex-col overflow-hidden overflow-x-hidden
        w-16 md:w-64 min-w-0
      "
    >
      {/* Header: only visible on md and up */}
      <h2
        className="
          hidden md:flex text-xl font-bold mb-4 px-4 py-5 items-center gap-2
          text-cyan-700 border-b border-cyan-300
        "
      >
        <UserRound className="w-6 h-6" />
        Contacts
      </h2>

      {/* Checkbox & online count: hide on small screens */}
      <div
        className="
          hidden md:flex mb-4 px-4 items-center gap-2 text-sm text-cyan-700
        "
      >
        <label className="cursor-pointer flex items-center gap-2">
          <input
            type="checkbox"
            checked={showOnlineOnly}
            onChange={(e) => setShowOnlineOnly(e.target.checked)}
            className="accent-cyan-500 w-4 h-4"
          />
          Show online only
        </label>
        <span className="text-xs text-cyan-600">({onlineUsers.length - 1} online)</span>
      </div>

      {/* User list container */}
      <ul
        className="
          flex flex-col
          md:block
          overflow-y-auto
          overflow-x-hidden
          max-h-[calc(100vh-9rem)]
          pr-1
          custom-scroll
          w-full
          md:w-auto
          min-w-0
        "
      >
        {filteredUsers.map((user) => {
          const isSelected = selectedUser?._id === user._id;
          const isOnline = onlineUsers.includes(user._id);

          return (
            <li
              key={user._id}
              onClick={() => setSelectedUser(user)}
              className={`
                cursor-pointer
                transition-all
                border
                rounded-xl
                flex
                items-center
                gap-3
                p-3
                md:p-3
                md:flex-row
                flex-col
                md:hover:bg-cyan-200
                md:border-transparent
                justify-center
                md:justify-start
                ${isSelected ? "bg-cyan-300 border-cyan-500" : "border-transparent"}
                w-16
                md:w-auto
                min-w-0
              `}
            >
              <div className="relative">
                <img
                  src={user.profilePic || "/avatar.jpg"}
                  alt={user.fullName}
                  className="w-11 h-11 rounded-full object-cover border-2 border-cyan-400 shadow-sm"
                />
                {isOnline && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                )}
              </div>

              {/* Name & status only on md and above */}
              <div className="hidden md:flex flex-col">
                <span className="font-semibold text-cyan-900">{user.fullName}</span>
                <span className="text-xs text-cyan-700">
                  {isOnline ? "Online" : "Offline"}
                </span>
              </div>
            </li>
          );
        })}

        {filteredUsers.length === 0 && (
          <div className="text-center text-cyan-600 py-4">No users found</div>
        )}
      </ul>
    </aside>
  );
};

export default UserSidebar;
