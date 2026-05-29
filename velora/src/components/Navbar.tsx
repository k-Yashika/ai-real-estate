import { PAGES } from "../utils/constants";

type Page = (typeof PAGES)[keyof typeof PAGES];

type NavbarProps = {
  page: Page;
  setPage: (page: Page) => void;
};

export default function Navbar({ page, setPage }: NavbarProps) {
  const navItems = [
    ["Home", PAGES.HOME],
    ["Compare", PAGES.COMPARE],
    ["Area Insights", PAGES.AREA],
  ] as const;

  return (
    <nav className="fixed left-0 right-0 top-0 z-[100] flex h-[58px] items-center justify-between border-b border-slate-200 bg-white/90 px-8 backdrop-blur-2xl">
      <div
        onClick={() => setPage(PAGES.HOME)}
        className="flex cursor-pointer items-center gap-[9px]"
      >
        <div className="flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-teal-600">
          <svg width="17" height="17" viewBox="0 0 18 18" fill="none">
            <rect x="2" y="9" width="6" height="7" rx="1" fill="white" />
            <rect
              x="10"
              y="5"
              width="6"
              height="11"
              rx="1"
              fill="rgba(255,255,255,0.65)"
            />
            <path
              d="M1.5 9.5L9 3L16.5 9.5"
              stroke="white"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <span className="text-base font-semibold tracking-[-0.3px] text-slate-900">
          Velora
        </span>
      </div>

      <div className="flex items-center gap-1">
        {navItems.map(([label, p]) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={`cursor-pointer rounded-lg px-[13px] py-1.5 text-sm ${
              page === p
                ? "bg-teal-50 font-medium text-teal-700"
                : "bg-transparent font-normal text-slate-500"
            }`}
          >
            {label}
          </button>
        ))}

        <button
          onClick={() => setPage(PAGES.UPLOAD)}
          className="ml-2 cursor-pointer rounded-[9px] bg-teal-600 px-4 py-2 text-[13px] font-semibold text-white"
        >
          Analyze property
        </button>
      </div>
    </nav>
  );
}
