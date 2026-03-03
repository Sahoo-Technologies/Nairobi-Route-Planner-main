import React from "react";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      width="120"
      height="28"
      viewBox="0 0 120 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="18" y="4" width="84" height="20" rx="2" fill="#D7302C" />
      <polygon points="0,14 12,6 12,22" fill="#7ED957" />
      <polygon points="120,14 108,6 108,22" fill="#7ED957" />
      <text x="60" y="18" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize="14" fill="white">VEEW</text>
    </svg>
  );
}

export default Logo;
