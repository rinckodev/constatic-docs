"use client";
import React from "react";
import { FiCopy } from "react-icons/fi";

interface CopyButtonProps {
  text: string;
}
export function CopyButton({ text }: CopyButtonProps){
  function copy(){
    navigator.clipboard.writeText(text).catch(() => {});
  }
  return <button onClick={copy}><FiCopy/></button>
}
