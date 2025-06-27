import React from "react";

type ToDoListInputProps = {
  input: string;
  inputRef: React.RefObject<HTMLInputElement>;
  onInputChange: (value: string) => void;
  onInputKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onAddTask: () => void;
};

export default function ToDoListInput({ input, inputRef, onInputChange, onInputKeyDown, onAddTask }: ToDoListInputProps) {
  const theme = typeof window !== "undefined" && document.body.getAttribute("data-framer-theme") === "dark" ? "dark" : "light";
  return (
    <div style={{ display: "flex", alignItems: "center", padding: "20px 24px 24px 24px", gap: 10, borderTop: '1px solid var(--framer-color-divider)' }}>
      <input
        ref={inputRef}
        style={{
          flex: 1,
          fontSize: 16,
          padding: "12px 14px",
          borderRadius: 'var(--framer-radius, 10px)',
          outline: "none",
          background: 'var(--framer-color-bg-tertiary)',
          color: 'var(--framer-color-text)',
          border: '1.5px solid var(--framer-color-divider)',
          fontWeight: 500,
          transition: "border 0.2s",
        }}
        type="text"
        placeholder="Add new task"
        value={input}
        onChange={e => onInputChange(e.target.value)}
        onKeyDown={onInputKeyDown}
      />
      <button
        style={{
          border: "none",
          borderRadius: 'var(--framer-radius, 10px)',
          fontSize: 22,
          width: 44,
          height: 44,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          background: 'var(--framer-color-tint)',
          color: "#fff",
          boxShadow: theme === "dark"
            ? "0 1px 8px rgba(0,153,255,0.12)"
            : "0 1px 8px rgba(0,153,255,0.08)",
          transition: "background 0.2s, box-shadow 0.2s",
        }}
        onClick={onAddTask}
        title="Add Task"
      >
        +
      </button>
    </div>
  );
} 