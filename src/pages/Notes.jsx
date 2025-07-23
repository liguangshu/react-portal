import React, { useEffect, useState } from "react";
import useNotesStore from "../store/useNotesStore";
import ThemeToggle from "../components/ThemeToggle";
import NoteList from "../components/NoteList";

const Notes = () => {
  const { notes, addNote, deleteNote, setNotes } = useNotesStore();
  const [modalOpen, setModalOpen] = useState(false);

  // 页面初始化时从localStorage加载
  useEffect(() => {
    const saved = localStorage.getItem("notes");
    if (saved) setNotes(JSON.parse(saved));
  }, [setNotes]);

  // notes数据变化时保存到localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      {/* 主题模式切换 */}
      <ThemeToggle />
      {/* 便签列表 */}
      <NoteList
        notes={notes}
        onDeleteNote={deleteNote}
        onAddNote={addNote}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </>
  );
};

export default Notes; 