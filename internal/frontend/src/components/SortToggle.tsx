export type SortMode = "manual" | "name" | "updated";

export const SORT_MODES: SortMode[] = ["manual", "name", "updated"];

const NEXT_MODE: Record<SortMode, SortMode> = {
  manual: "name",
  name: "updated",
  updated: "manual",
};

const LABEL: Record<SortMode, string> = {
  manual: "Manual order",
  name: "Sort by name",
  updated: "Sort by updated",
};

interface SortToggleProps {
  sortMode: SortMode;
  onChange: (mode: SortMode) => void;
}

export function SortToggle({ sortMode, onChange }: SortToggleProps) {
  const next = NEXT_MODE[sortMode];
  return (
    <button
      type="button"
      className={`flex items-center justify-center bg-transparent border border-gh-border rounded-md p-1.5 cursor-pointer transition-colors duration-150 hover:bg-gh-bg-hover text-gh-header-text ${
        sortMode !== "manual" ? "bg-gh-bg-hover" : ""
      }`}
      onClick={() => onChange(next)}
      aria-label="Sort order"
      title={`${LABEL[sortMode]} (next: ${LABEL[next]})`}
    >
      {sortMode === "manual" ? (
        <svg
          className="size-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      ) : sortMode === "name" ? (
        <svg
          className="size-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h12M4 12h8M4 18h4M18 5v14m0 0-3-3m3 3 3-3"
          />
        </svg>
      ) : (
        <svg
          className="size-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="8.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5V12l3 2" />
        </svg>
      )}
    </button>
  );
}
