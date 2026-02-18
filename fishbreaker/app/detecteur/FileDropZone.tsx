"use client";

import { useCallback, useState, useRef } from "react";

export default function FileDropZone() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  }, []);

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target.files?.[0];
      if (selectedFile) {
        setFile(selectedFile);
      }
    },
    [],
  );

  const handleRemoveFile = useCallback(() => {
    setFile(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }, []);

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="space-y-4">
      {/* Drop Zone */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={`group relative cursor-pointer rounded-2xl border-2 border-dashed p-12 text-center transition-all ${
          isDragging
            ? "border-sky-500 bg-sky-50/50 dark:border-sky-400 dark:bg-sky-500/5"
            : file
              ? "border-emerald-300 bg-emerald-50/50 dark:border-emerald-500/30 dark:bg-emerald-500/5"
              : "border-zinc-300 bg-white hover:border-sky-300 hover:bg-sky-50/30 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-sky-500/30 dark:hover:bg-sky-500/5"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          onChange={handleFileSelect}
          className="hidden"
          accept=".eml,.msg,.pdf,.html,.txt,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.zip"
        />

        {file ? (
          /* File selected state */
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8"
              >
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <polyline points="9 15 12 12 15 15" />
              </svg>
            </div>
            <div>
              <p className="text-base font-semibold text-zinc-900 dark:text-white">
                {file.name}
              </p>
              <p className="mt-1 text-sm text-zinc-500">
                {formatFileSize(file.size)}
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveFile();
              }}
              className="text-sm font-medium text-zinc-500 transition hover:text-red-500"
            >
              Supprimer le fichier
            </button>
          </div>
        ) : (
          /* Empty state */
          <div className="flex flex-col items-center gap-4">
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-2xl transition-colors ${
                isDragging
                  ? "bg-sky-100 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400"
                  : "bg-zinc-100 text-zinc-400 group-hover:bg-sky-100 group-hover:text-sky-600 dark:bg-zinc-800 dark:text-zinc-500 dark:group-hover:bg-sky-500/10 dark:group-hover:text-sky-400"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8"
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </div>
            <div>
              <p className="text-base font-semibold text-zinc-900 dark:text-white">
                {isDragging
                  ? "Relâchez pour déposer"
                  : "Glissez-déposez votre fichier ici"}
              </p>
              <p className="mt-1 text-sm text-zinc-500">
                ou{" "}
                <span className="font-medium text-sky-600 dark:text-sky-400">
                  cliquez pour parcourir
                </span>
              </p>
            </div>
            <p className="text-xs text-zinc-400 dark:text-zinc-500">
              Taille maximale : 25 MB
            </p>
          </div>
        )}
      </div>

      {/* Analyze button */}
      {file && (
        <button className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-linear-to-r from-sky-500 to-indigo-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:shadow-xl hover:shadow-sky-500/30 hover:brightness-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          Lancer l&apos;analyse
        </button>
      )}
    </div>
  );
}
