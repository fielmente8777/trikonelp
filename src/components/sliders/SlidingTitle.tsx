import { JSX } from "react/jsx-runtime";
import "./sliding.title.scss";

export default function SlidingTitle({
  items,
  ariaHidden = false,
}: {
  items: string[];
  ariaHidden?: boolean;
}) {
  const titles = [...items, ...items, ...items];

  return (
    <div
      className="relative overflow-hidden py-3 border border-primary text-light max_screen_width bg-transparent"
      aria-hidden={ariaHidden}
    >
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {titles.map((t, i) => (
            <span
              key={i}
              aria-hidden={i >= items.length}
              className="marquee-item tracking-widest"
            >
              <span className="flex items-center gap-2">
                <span>
                  <ICon />
                </span>
                {t}
              </span>
              {/* <span className="separator">
                <ICon />
              </span> */}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export const ICon = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.6663 3.5L5.24967 9.91667L2.33301 7"
      stroke="#6D3207"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
