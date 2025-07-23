import React from 'react';

const SidebarSkeleton = () => {
  return (
    <div className="space-y-3 animate-pulse">
      <div className="h-6 w-32 bg-[var(--primary-color)]/20 rounded"></div>
      {Array.from({ length: 6 }).map((_, idx) => (
        <div
          key={idx}
          className="flex items-center gap-3 p-2 rounded-lg bg-[var(--primary-color)]/10"
        >
          <div className="w-10 h-10 rounded-full bg-[var(--primary-color)]/30" />
          <div className="flex flex-col space-y-2 w-full">
            <div className="w-3/4 h-3 rounded bg-[var(--primary-color)]/30" />
            <div className="w-1/2 h-3 rounded bg-[var(--primary-color)]/20" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SidebarSkeleton;
