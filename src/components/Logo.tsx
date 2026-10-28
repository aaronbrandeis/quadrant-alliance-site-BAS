/**
 * Four quadrants, one of them live. Reads as a mark at 24px and as a
 * four-pane grid at larger sizes.
 */
export default function Logo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="9" height="9" rx="1.5" fill="currentColor" />
      <rect
        x="13"
        y="2"
        width="9"
        height="9"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <rect
        x="2"
        y="13"
        width="9"
        height="9"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <rect
        x="13"
        y="13"
        width="9"
        height="9"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.75"
      />
    </svg>
  );
}
