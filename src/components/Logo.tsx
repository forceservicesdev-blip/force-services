const Logo = ({ isDark = false }: { isDark?: boolean }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          className="text-fresh-green"
        >
          <path
            d="M12 2C9.5 4.5 7 7 7 10.5C7 14.1 9.2 17 12 17C14.8 17 17 14.1 17 10.5C17 7 14.5 4.5 12 2Z"
            fill="currentColor"
            fillOpacity="0.2"
          />
          <path
            d="M12 6C10.5 7.5 9.5 9 9.5 10.5C9.5 12.5 10.6 14 12 14C13.4 14 14.5 12.5 14.5 10.5C14.5 9 13.5 7.5 12 6Z"
            fill="currentColor"
          />
          <path
            d="M5 16C5 16 6 18 8 19C10 20 14 20 16 19C18 18 19 16 19 16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 20C4 20 5.5 21.5 8 22C10.5 22.5 13.5 22.5 16 22C18.5 21.5 20 20 20 20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeOpacity="0.4"
          />
        </svg>
      </div>
      <span className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-primary'}`}>
        [COMPANY NAME]
      </span>
    </div>
  );
};

export default Logo;
