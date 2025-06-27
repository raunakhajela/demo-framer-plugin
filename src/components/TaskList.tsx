import React from "react";
import TaskRow from "./TaskRow";

type Task = { text: string; completed: boolean };

type TaskListProps = {
  tasks: Task[];
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

export default function TaskList({
  tasks,
  editingIdx,
  editingText,
  editInputRef,
  onToggle,
  onDelete,
  onEdit,
  onEditInputKeyDown,
  onEditInputChange,
  onSaveEdit,
}: TaskListProps) {
  return (
    <div
      style={{
        flex: 1,
        minHeight: 0,
        overflowY: "auto",
        padding: "0",
        paddingBottom: 50,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        scrollbarWidth: "thin",
        scrollbarColor: "var(--framer-color-divider) var(--framer-color-bg-tertiary)",
      }}
    >
      {tasks.length === 0 ? (
        <p>
          Add a task and click <b>+</b> or press <b>Enter</b> to include it in the list.
        </p>
      ) : (
        tasks.map((task, idx) => (
          <TaskRow
            key={idx}
            task={task}
            idx={idx}
            editingIdx={editingIdx}
            editingText={editingText}
            editInputRef={editInputRef}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
            onEditInputKeyDown={onEditInputKeyDown}
            onEditInputChange={onEditInputChange}
            onSaveEdit={onSaveEdit}
          />
        ))
      )}
    </div>
  );
} 