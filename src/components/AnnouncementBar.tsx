"use client";

import { announcement } from "@/data/siteContent";
import { useState } from "react";
import { X } from "lucide-react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(announcement.enabled);

  if (!visible) return null;

  return (
    <div className="bg-primary text-white text-center py-2 px-4 text-sm font-medium relative">
      <span>{announcement.text}</span>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity"
        aria-label="Close announcement"
      >
        <X size={16} />
      </button>
    </div>
  );
}
