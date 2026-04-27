export default function PeakMark({ className = "", strokeWidth = 1.6, ...rest }) {
  return (
    <svg
      viewBox="0 0 32 14"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      <path d="M1 12 L10 3 L16 9 L22 2 L31 12" />
    </svg>
  );
}
