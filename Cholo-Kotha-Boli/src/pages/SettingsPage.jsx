import React from 'react';
import { useThemeStore, themes } from '../store/useThemeStore';

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 transition-colors">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">
        Choose Your Theme
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-xl mx-auto">
        {themes.map((th) => (
          <button
            key={th}
            onClick={() => setTheme(th)}
            className={`
              rounded-lg p-4 border-2
              flex items-center justify-center
              cursor-pointer
              transition
              ${
                theme === th
                  ? 'border-cyan-500 bg-cyan-500 text-white shadow-lg'
                  : 'border-gray-300 bg-white text-gray-800 hover:bg-cyan-100'
              }
            `}
            aria-label={`Select ${th} theme`}
          >
            {th.charAt(0).toUpperCase() + th.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SettingsPage;
