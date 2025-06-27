import React from "react";

type ToDoListHeaderProps = {
  completedCount: number;
  totalCount: number;
  collapsed: boolean;
  onCollapse: () => void;
};

export default function ToDoListHeader({ completedCount, totalCount, collapsed, onCollapse }: ToDoListHeaderProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px 0 24px" }}>
      <span style={{ fontWeight: 600, fontSize: 16, color: 'var(--framer-color-text)' }}>
        Tasks <span style={{ color: 'var(--framer-color-text-secondary)', fontWeight: 500 }}>({completedCount}/{totalCount})</span>
      </span>
      <button
        style={{
          background: "none",
          border: "none",
          fontSize: 18,
          color: 'var(--framer-color-text)',
          cursor: "pointer",
          marginLeft: 8,
          padding: 0,
          lineHeight: 1,
          borderRadius: 'var(--framer-radius, 6px)',
          transition: "background 0.2s",
        }}
        onClick={onCollapse}
        title="Collapse/Expand"
      >
        <span style={{ display: "inline-block", transform: collapsed ? "rotate(-90deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>▲</span>
      </button>
    </div>
  );
} 