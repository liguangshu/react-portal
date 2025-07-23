import React from "react";
import AddNoteModal from "./AddNoteModal";

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
    <div className="flex gap-4 p-4 min-h-screen bg-background text-foreground transition-colors">
      {/* 左侧标题区 */}
      <div className="w-1/5 bg-purple-100 rounded-xl p-4 flex flex-col justify-between dark:bg-card dark:text-card-foreground">
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
      <div className="w-3/5 bg-yellow-50 rounded-xl p-8 grid grid-cols-4 gap-6">
        {!coloredNotes.length ? (
          <div className="col-span-2 text-gray-400 text-center py-8">暂无便签</div>
        ) : (
          coloredNotes.map((note, i) => (
            <div
              key={i}
              className={`rounded-lg shadow p-6 h-32 ${note.color} text-gray-800 font-medium relative transition-colors dark:bg-card dark:text-card-foreground`}
            >
              <div className="break-words whitespace-pre-line">{note.content}</div>
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
      <div className="w-1/5 flex flex-col gap-4">
        <div className="bg-gray-200 rounded-lg h-24 shadow" />
        <div className="bg-gray-200 rounded-lg h-24 shadow" />
        <div className="bg-gray-200 rounded-lg h-24 shadow" />
      </div>
      {/* 添加便签弹窗 */}
      <AddNoteModal open={modalOpen} onClose={() => setModalOpen(false)} onAddNote={onAddNote} />
    </div>
  );
};

export default NoteList;
