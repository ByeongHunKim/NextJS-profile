import { useTheme } from 'next-themes';

export default function DarkModeToggleButton() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <button
        className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none bg-gray-100 hover:bg-gray-50 hover: text-orange-500 dark:bg-slate-600 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-yellow-300 rounded text-base mt-4 md:mt-0"
        type="button"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {/* light mode */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="visible dark:invisible dark:h-0 dark:w-0 h-5 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>

        {/* dark mode */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="visible dark:visible dark:h-5 dark:w-5 h-0 w-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </button>
    </>
  );
}
