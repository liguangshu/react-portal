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
  const coloredNotes = notes.map((note, i) => ({
    ...note,
    color: noteColors[i % noteColors.length],
  }));

  return (
    <div className="flex flex-col md:flex-row gap-12 p-2 md:p-4 min-h-screen h-screen bg-background text-foreground transition-colors relative">
      {/* 左侧标题区 */}
      <div
        className="hidden md:flex w-1/5 h-full bg-purple-100 dark:bg-[#241c2c] rounded-xl pt-4 pb-4 flex-col items-center overflow-y-auto"
        style={{
          scrollbarWidth: "none",  
          msOverflowStyle: "none"
        }}
      >
        <div>
          {coloredNotes.length
            ? coloredNotes.map((note, i) => (
              <div
                key={i}
                className="bg-purple-300 dark:bg-[#32243d] rounded-lg mb-4 w-80 h-80 flex items-center justify-center text-gray-900 dark:text-gray-100 shadow text-base md:text-lg lg:text-xl font-semibold text-center break-words"
              >
                {note.title}
              </div>
            ))
            : null}
        </div>
        <button
          className="flex items-center gap-2 text-blue-500 mt-4 text-sm md:text-base lg:text-lg"
          onClick={() => setModalOpen(true)}
        >
          <span className="text-2xl md:text-3xl lg:text-4xl">＋</span>{" "}
          <span className="font-medium">Add notes</span>
        </button>
      </div>
      {/* 中间内容区 */}
      <div className="flex-1 h-full bg-yellow-50 dark:bg-[#232336] rounded-xl p-2 sm:p-4 md:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4 auto-rows-[20rem] justify-items-center">        {!coloredNotes.length ? (
        <div className="col-span-1 sm:col-span-2 text-gray-400 text-center py-8">
          暂无便签
        </div>
      ) : (
        coloredNotes.map((note, i) => (
          <div
            key={i}
            className={`rounded-lg shadow-lg p-2 ${note.color} dark:bg-[#2d3142] dark:border dark:border-[#4b3869] text-gray-800 dark:text-gray-100 font-medium relative transition-all duration-200 w-80 h-80 flex flex-col items-center justify-center overflow-hidden hover:dark:border-[#a78bfa] hover:dark:shadow-[0_4px_32px_0_rgba(167,139,250,0.15)] hover:scale-105`}
          >
            {/* 移动端：标题+内容一起显示 */}
            <div className="block md:hidden mb-2 font-bold text-base break-words">
              {note.title}
            </div>
            <div className="text-center break-words whitespace-pre-line w-full">
              {note.content}
            </div>
            <button
              onClick={() => onDeleteNote(i)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-200 text-xl transition-colors duration-200"
              aria-label="删除便签"
            >
              ×
            </button>
          </div>
        ))
      )}
        {/* 移动端悬浮添加按钮 */}
        <button
          className="md:hidden fixed left-4 bottom-4 z-50 p-4 rounded-full bg-blue-500 text-white dark:bg-[#35354d] dark:text-[#a78bfa] shadow-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-[#a78bfa] transition-colors duration-200"
          onClick={() => setModalOpen(true)}
          aria-label="添加便签"
        >
          <Plus size={28} />
        </button>
        {/* 添加便签弹窗 */}
        <AddNoteModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onAddNote={onAddNote}
        />
      </div>
      {/* 右侧灰色装饰区 */}
      <div className="hidden md:flex w-1/5 h-full bg-gray-100 dark:bg-[#232336] rounded-xl flex-col gap-4">
        <div className="bg-gray-200 dark:bg-[#3a3a4d] rounded-2xl h-24 shadow-lg" />
        <div className="bg-gray-200 dark:bg-[#3a3a4d] rounded-lg h-24 shadow" />
        <div className="bg-gray-200 dark:bg-[#3a3a4d] rounded-lg h-24 shadow" />
      </div>
    </div>
  );
};

export default NoteList;