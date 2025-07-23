import React from "react";
import NoteCard from "./NoteCard";

const NoteList = ({ notes, onDeleteNote }) => {
  if (!notes.length) {
    return <div className="text-gray-400 text-center py-8">暂无便签</div>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {notes.map((note, idx) => (
        <NoteCard
          key={idx}
          note={note}
          onDelete={() => onDeleteNote(idx)}
        />
      ))}
    </div>
  );
};

export default NoteList;
