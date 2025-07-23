import React from 'react';

const MessageSkeleton = () => {
  const skeletonCount = 6;

  return (
    <div>
      {[...Array(skeletonCount)].map((_, index) => {
        const isRightAligned = index % 2 !== 0;

        return (
          <div
            key={index}
            className={`flex ${isRightAligned ? 'flex-row-reverse' : ''} items-start gap-3 px-4 py-3 animate-pulse`}
          >
            {/* Avatar Skeleton */}
            <div className="w-10 h-10 bg-gray-800 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.4)]" />

            {/* Message bubble skeleton */}
            <div className="flex flex-col gap-2">
              <div className="w-32 h-4 bg-gray-500 rounded-md shadow-[0_0_6px_rgba(56,189,248,0.3)]" />
              <div className="w-48 h-4 bg-gray-500 rounded-md shadow-[0_0_6px_rgba(56,189,248,0.3)]" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageSkeleton;
