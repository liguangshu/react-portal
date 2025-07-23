import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    onAddNote({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card text-card-foreground p-4 rounded shadow mb-4 flex flex-col gap-3 transition-colors">
      <Input
        type="text"
        placeholder="标题"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="bg-background text-foreground placeholder:text-muted-foreground"
      />
      <Textarea
        placeholder="内容"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={3}
        className="bg-background text-foreground placeholder:text-muted-foreground"
      />
      <Button type="submit" className="bg-primary text-primary-foreground h-8">
        添加便签
      </Button>
    </form>
  );
};

export default NoteForm;
