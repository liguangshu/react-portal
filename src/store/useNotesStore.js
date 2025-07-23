import { create } from "zustand";

const useNotesStore = create((set) => ({
  notes: [],
  setNotes: (notes) => set({ notes }),
  addNote: (note) => set((state) => ({ notes: [note, ...state.notes] })),
  deleteNote: (idx) => set((state) => ({ notes: state.notes.filter((_, i) => i !== idx) })),
}));

export default useNotesStore; 