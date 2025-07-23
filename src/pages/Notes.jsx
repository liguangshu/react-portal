import React, { useEffect } from "react";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";
import useNotesStore from "../store/useNotesStore";
import ThemeToggle from "../components/ThemeToggle";

const Notes = () => {
  const { notes, addNote, deleteNote, setNotes } = useNotesStore();

  // 持久化：初始化时从localStorage加载
  useEffect(() => {
    const saved = localStorage.getItem("notes");
    if (saved) setNotes(JSON.parse(saved));
  }, [setNotes]);

  // 持久化：notes变化时保存到localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="max-w-2xl mx-auto py-8 px-2 relative bg-background text-foreground min-h-screen transition-colors">
      <ThemeToggle />
      <h1 className="text-2xl font-bold mb-6 text-center">便签应用</h1>
      <NoteForm onAddNote={addNote} />
      <NoteList notes={notes} onDeleteNote={deleteNote} />
    </div>
  );
};

export default Notes; 