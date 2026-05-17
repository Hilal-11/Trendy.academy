"use client";

import { useRef, useState, useCallback } from "react";
import { FiCamera, FiUpload, FiX } from "react-icons/fi";
import { cn } from "@/lib/utils";

// ──────────────────────────────────────────────────
// PhotoUpload — drag-and-drop image uploader
// with preview, remove button, and error display
// ──────────────────────────────────────────────────
interface PhotoUploadProps {
  value: string | null;
  onChange: (dataUrl: string | null) => void;
  onError?: (msg: string) => void;
  /** max file size in bytes — default 5 MB */
  maxSize?: number;
}

export function PhotoUpload({
  value,
  onChange,
  onError,
  maxSize = 5 * 1024 * 1024,
}: PhotoUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  const handleFile = useCallback(
    (file: File | undefined | null) => {
      if (!file) return;
      if (!file.type.startsWith("image/")) {
        onError?.("please upload an image file (jpg, png, webp)");
        return;
      }
      if (file.size > maxSize) {
        onError?.(`image must be under ${Math.round(maxSize / 1024 / 1024)} mb`);
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => onChange(e.target?.result as string);
      reader.readAsDataURL(file);
    },
    [maxSize, onChange, onError]
  );

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragging(false);
      handleFile(e.dataTransfer.files[0]);
    },
    [handleFile]
  );

  return (
    <div className="space-y-1.5">
      <label className="text-[12.5px] font-medium text-muted-foreground block">
        profile photo{" "}
        <span className="text-muted-foreground/50 font-normal">(optional)</span>
      </label>

      {/* drop zone */}
      <div
        role="button"
        tabIndex={0}
        aria-label="upload profile photo"
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => e.key === "Enter" && inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        className={cn(
          "relative border-2 border-dashed rounded-[14px] p-6 text-center cursor-pointer",
          "transition-all duration-200 bg-muted/30",
          "hover:border-primary/50 hover:bg-primary/5",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
          dragging && "border-primary bg-primary/8 scale-[1.01]",
          value && "border-solid border-primary/50 bg-primary/5"
        )}
      >
        {value ? (
          /* ─── preview state ─── */
          <div className="flex flex-col items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={value}
              alt="profile preview"
              className="w-24 h-24 rounded-full object-cover border-[3px] border-primary shadow-md"
            />
            <span className="text-[12px] text-muted-foreground">
              click to change photo
            </span>
            {/* remove button */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onChange(null); }}
              aria-label="remove photo"
              className={cn(
                "absolute top-3 right-3 w-6 h-6 rounded-full",
                "bg-destructive/10 text-destructive flex items-center justify-center",
                "hover:bg-destructive/20 transition-colors"
              )}
            >
              <FiX size={12} />
            </button>
          </div>
        ) : (
          /* ─── empty state ─── */
          <div className="flex flex-col items-center gap-3 pointer-events-none">
            <div className="w-12 h-12 rounded-[14px] bg-primary/10 flex items-center justify-center">
              {dragging ? (
                <FiUpload size={22} className="text-primary" />
              ) : (
                <FiCamera size={22} className="text-primary" />
              )}
            </div>
            <div>
              <p className="text-[13px] font-medium text-foreground">
                {dragging ? "drop your photo here" : "upload your photo"}
              </p>
              <p className="text-[12px] text-muted-foreground mt-0.5">
                jpg, png or webp &nbsp;·&nbsp; max{" "}
                {Math.round(maxSize / 1024 / 1024)} mb
              </p>
            </div>
          </div>
        )}
      </div>

      {/* hidden file input */}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        aria-hidden="true"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />
    </div>
  );
}