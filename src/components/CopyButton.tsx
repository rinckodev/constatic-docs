"use client";
import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

interface CopyButtonProps {
  text: string;
}
export function CopyButton({ text }: CopyButtonProps){
  const [copied, setCopied] = useState(false);

  function copy(){
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {});
  }
  return (
    <button onClick={copy} className="relative flex items-center justify-center gap-2 w-4 hover:cursor-pointer">
      <FiCopy className={`absolute transition-opacity duration-300 ${copied ? "opacity-0 scale-90" : "opacity-100 scale-100"}`} />
      <FiCheck className={`absolute transition-opacity duration-300 ${copied ? "opacity-100 scale-100" : "opacity-0 scale-100"}`} />
    </button>
  );
}
