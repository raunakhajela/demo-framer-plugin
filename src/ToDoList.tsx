import React, { useState, useRef } from "react";
import ToDoListHeader from "./components/ToDoListHeader";
import ToDoListInput from "./components/ToDoListInput";
import TaskList from "./components/TaskList";

const initialTasks = [
  { text: "Finalize pitch deck for investor meeting", completed: false },
  { text: "Review product roadmap with the team", completed: false },
  { text: "Prepare for the upcoming sales meeting", completed: false },
  { text: "Update the marketing website with new features", completed: false },
  { text: "Review and approve the latest marketing campaign", completed: false },
];

export default function ToDoList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [collapsed, setCollapsed] = useState(false);
  const [input, setInput] = useState("");
  const [editingIdx, setEditingIdx] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const editInputRef = useRef<HTMLInputElement>(null);

  // Debug: log tasks state
  console.log("Current tasks state:", tasks);

  const completedCount = tasks.filter(t => t.completed).length;

  const handleAddTask = () => {
    const value = input.trim();
    if (!value) return;
    setTasks([...tasks, { text: value, completed: false }]);
    setInput("");
    inputRef.current?.focus();
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleAddTask();
  };

  const handleToggleTask = (idx: number) => {
    setTasks(tasks =>
      tasks.map((t, i) =>
        i === idx ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const handleDeleteTask = (idx: number) => {
    setTasks(tasks => tasks.filter((_, i) => i !== idx));
  };

  const handleEditTask = (idx: number) => {
    setEditingIdx(idx);
    setEditingText(tasks[idx].text);
    setTimeout(() => editInputRef.current?.focus(), 0);
  };

  const handleEditInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === "Enter") {
      handleSaveEdit(idx);
    } else if (e.key === "Escape") {
      setEditingIdx(null);
    }
  };

  const handleSaveEdit = (idx: number) => {
    setTasks(tasks =>
      tasks.map((t, i) => (i === idx ? { ...t, text: editingText } : t))
    );
    setEditingIdx(null);
  };

  const handleCollapse = () => setCollapsed(c => !c);

  return (
    <div
      style={{
        background: 'var(--framer-color-bg)',
        width: 340,
        height: '100%',
        minHeight: 0,
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        fontFamily: 'var(--framer-font, Inter, sans-serif)',
      }}
    >
      <div
        style={{
          background: 'var(--framer-color-bg-secondary)',
          width: '100%',
          height: '100%',
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ToDoListHeader
          completedCount={completedCount}
          totalCount={tasks.length}
          collapsed={collapsed}
          onCollapse={handleCollapse}
        />
        {!collapsed && (
          <TaskList
            tasks={tasks}
            editingIdx={editingIdx}
            editingText={editingText}
            editInputRef={editInputRef}
            onToggle={handleToggleTask}
            onDelete={handleDeleteTask}
            onEdit={handleEditTask}
            onEditInputKeyDown={handleEditInputKeyDown}
            onEditInputChange={setEditingText}
            onSaveEdit={handleSaveEdit}
          />
        )}
        <ToDoListInput
          input={input}
          inputRef={inputRef}
          onInputChange={setInput}
          onInputKeyDown={handleInputKeyDown}
          onAddTask={handleAddTask}
        />
      </div>
    </div>
  );
} 