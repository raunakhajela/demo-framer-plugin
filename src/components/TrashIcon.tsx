import React from "react";

export default function TrashIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="8" width="1.5" height="6" rx="0.75" fill="currentColor" />
      <rect x="9.25" y="8" width="1.5" height="6" rx="0.75" fill="currentColor" />
      <rect x="13" y="8" width="1.5" height="6" rx="0.75" fill="currentColor" />
      <rect x="3" y="5" width="14" height="2" rx="1" fill="currentColor" />
      <rect x="7" y="2" width="6" height="2" rx="1" fill="currentColor" />
      <rect x="4" y="7" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
} 