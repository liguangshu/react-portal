import React from "react";
import AddNoteModal from "./AddNoteModal";
import { Plus } from "lucide-react";

const noteColors = [
  "bg-red-200",
  "bg-blue-200",
  "bg-green-200",
  "bg-yellow-200",
  "bg-purple-200",
  "bg-pink-200",
  "bg-orange-200",
];

const NoteList = ({
  notes,
  onDeleteNote,
  onAddNote,
  modalOpen,
  setModalOpen,
}) => {
  const coloredNotes = notes.map((note, i) => ({ ...note, color: noteColors[i % noteColors.length] }));

  return (
    <div className="flex flex-col md:flex-row gap-4 p-2 md:p-4 min-h-screen bg-background text-foreground transition-colors relative">
      {/* 左侧标题区 */}
      <div className="hidden md:flex w-1/5 bg-purple-100 rounded-xl p-4 flex-col justify-between dark:bg-card dark:text-card-foreground">
        <div>
          {coloredNotes.length ? coloredNotes.map((note, i) => (
            <div key={i} className="bg-purple-300 rounded-lg mb-4 p-4 text-gray-800 shadow text-base md:text-lg lg:text-xl font-semibold break-words">
              {note.title}
            </div>
          )) : null}
        </div>
        <button
          className="flex items-center gap-2 text-blue-500 mt-4 text-sm md:text-base lg:text-lg"
          onClick={() => setModalOpen(true)}
        >
          <span className="text-2xl md:text-3xl lg:text-4xl">＋</span> <span className="font-medium">Add notes</span>
        </button>
      </div>
      {/* 中间内容区 */}
      <div className="flex-1 bg-yellow-50 rounded-xl p-2 sm:p-4 md:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4 auto-rows-[8rem]">
        {!coloredNotes.length ? (
          <div className="col-span-1 sm:col-span-2 text-gray-400 text-center py-8">暂无便签</div>
        ) : (
          coloredNotes.map((note, i) => (
            <div
              key={i}
              className={`rounded-lg shadow p-1 sm:p-2 md:p-2 lg:p-2 ${note.color} text-gray-800 font-medium relative transition-colors dark:bg-card dark:text-card-foreground h-32 overflow-y-auto`}
            >
              {/* 移动端：标题+内容一起显示 */}
              <div className="block md:hidden mb-2 font-bold text-base break-words">{note.title}</div>
              <div className="break-words whitespace-pre-line">{note.content}</div>
              {/* 桌面端：只显示内容，标题在左侧栏 */}
              <button
                onClick={() => onDeleteNote(i)}
                className="absolute top-2 right-2 text-destructive hover:text-red-700 text-xl"
                aria-label="删除便签"
              >
                ×
              </button>
            </div>
          ))
        )}
      </div>
      {/* 右侧灰色装饰区 */}
      <div className="hidden md:flex w-1/5 flex-col gap-4">
        <div className="bg-gray-200 rounded-lg h-24 shadow" />
        <div className="bg-gray-200 rounded-lg h-24 shadow" />
        <div className="bg-gray-200 rounded-lg h-24 shadow" />
      </div>
      {/* 移动端悬浮添加按钮 */}
      <button
        className="md:hidden fixed left-4 bottom-4 z-50 p-4 rounded-full bg-blue-500 text-white shadow-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={() => setModalOpen(true)}
        aria-label="添加便签"
      >
        <Plus size={28} />
      </button>
      {/* 添加便签弹窗 */}
      <AddNoteModal open={modalOpen} onClose={() => setModalOpen(false)} onAddNote={onAddNote} />
    </div>
  );
};

export default NoteList;
