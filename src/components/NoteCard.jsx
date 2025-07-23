import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const NoteCard = ({ note, onDelete }) => {
  return (
    <Card className="relative bg-yellow-100 text-gray-800 transition-colors">
      <CardHeader className="pb-2 pr-8">
        <CardTitle className="break-words text-lg">{note.title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0 pb-4">
        <p className="break-words whitespace-pre-line">{note.content}</p>
      </CardContent>
      <button
        onClick={onDelete}
        className="absolute top-2 right-2 text-destructive hover:text-red-700 text-xl"
        aria-label="删除便签"
      >
        ×
      </button>
    </Card>
  );
};

export default NoteCard;
