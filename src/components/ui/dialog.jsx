import * as React from "react";

function Dialog({ open, onOpenChange, children }) {
  React.useEffect(() => {
    if (!open) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onOpenChange]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/30" onClick={() => onOpenChange(false)} />
      {children}
    </div>
  );
}

function DialogContent({ className = "", children }) {
  return (
    <div className={`relative bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-md mx-auto z-10 dark ${className}`}>
      {children}
    </div>
  );
}

function DialogHeader({ className = "", children }) {
  return <div className={`mb-4 ${className}`}>{children}</div>;
}

function DialogTitle({ className = "", children }) {
  return <div className={`text-lg font-bold ${className}`}>{children}</div>;
}

function DialogFooter({ className = "", children }) {
  return <div className={`flex justify-end gap-2 mt-4 ${className}`}>{children}</div>;
}

export { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter }; 