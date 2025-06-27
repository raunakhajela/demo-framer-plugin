import React, { useState } from "react";
import TrashIcon from "./TrashIcon";

type Task = { text: string; completed: boolean };

type TaskRowProps = {
  task: Task;
  idx: number;
  editingIdx: number | null;
  editingText: string;
  editInputRef: React.RefObject<HTMLInputElement>;
  onToggle: (idx: number) => void;
  onDelete: (idx: number) => void;
  onEdit: (idx: number) => void;
  onEditInputKeyDown: (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => void;
  onEditInputChange: (text: string) => void;
  onSaveEdit: (idx: number) => void;
};

export default function TaskRow({
  task,
  idx,
  editingIdx,
  editingText,
  editInputRef,
  onToggle,
  onDelete,
  onEditInputKeyDown,
  onEditInputChange,
  onSaveEdit,
}: TaskRowProps) {
  const [deleteHover, setDeleteHover] = useState(false);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '500',
        minWidth: 0,
        background: 'var(--framer-color-bg-tertiary)',
        padding: '10px 14px',
      }}
    >
      <label style={{ display: "flex", alignItems: "center", marginRight: 6, position: "relative" }}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(idx)}
          style={{
            opacity: 0,
            width: 22,
            height: 22,
            margin: 0,
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 2,
            cursor: "pointer",
          }}
        />
        <span
          style={{
            width: 22,
            height: 22,
            borderRadius: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: task.completed ? 'var(--framer-color-tint)' : 'var(--framer-color-bg-secondary)',
            transition: "background 0.2s, border 0.2s",
            zIndex: 1,
            marginRight: 8,
          }}
        >
          {task.completed && (
            <svg width="13" height="13" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6.5L5.5 9L9 4.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
      </label>
      {editingIdx === idx ? (
        <input
          ref={editInputRef}
          style={{
            flex: 1,
            fontSize: 16,
            outline: "none",
            background: 'var(--framer-color-bg-tertiary)',
            color: 'var(--framer-color-text)',
            border: '1px solid var(--framer-color-divider)',
            fontWeight: 500,
            marginRight: 6,
          }}
          value={editingText}
          onChange={e => onEditInputChange(e.target.value)}
          onBlur={() => onSaveEdit(idx)}
          onKeyDown={e => onEditInputKeyDown(e, idx)}
        />
      ) : (
        <span 
          style={{ 
            padding: 4,
          }}>
            {task.text}
        </span>
      )}
      <button
        style={{
          background: "none",
          fontSize: 18,
          width: 40,
          height: 40,
          cursor: "pointer",
          lineHeight: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: deleteHover ? '#ff5555' : '#d32f2f',
          transition: "color 0.2s",
        }}
        onClick={() => onDelete(idx)}
        title="Delete Task"
        onMouseEnter={() => setDeleteHover(true)}
        onMouseLeave={() => setDeleteHover(false)}
      >
        <TrashIcon />
      </button>
    </div>
  );
} 