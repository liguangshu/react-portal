import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "./ui/dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const AddNoteModal = ({ open, onClose, onAddNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const theme = window.localStorage.getItem("theme");
  console.log(theme);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    onAddNote({ title, content });
    setTitle("");
    setContent("");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={v => { if (!v) onClose(); }}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>添加便签</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
          <DialogFooter className="flex justify-end gap-2">
            <Button type="button" variant="secondary" onClick={onClose} className="h-8 w-20">取消</Button>
            <Button type="submit" className="bg-primary text-primary-foreground h-8 w-20">添加</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddNoteModal; 