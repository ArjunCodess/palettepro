'use client'

import React, { useState } from "react";

interface UploadedListItemProps {
  hex: string;
  rgb: string;
}

function ListItem({ hex, rgb }: UploadedListItemProps) {
  const [copied, setCopied] = useState(false);

  // Copy to clipboard
  const copyToClipboard = (e: React.MouseEvent<HTMLSpanElement>) => {
    const color = (e.target as HTMLSpanElement).innerText;
    navigator.clipboard.writeText(color);
  };

  return (
    <li className="relative list-none w-64 h-40 border rounded-md shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-5" style={{ background: rgb }}>
      <span
        className="absolute w-full p-2 bottom-0 border-t border-white-50 bg-opacity-25 flex items-center justify-between font-semibold text-slate-50 bg-blue-50 cursor-pointer"
        onClick={(e) => {
          copyToClipboard(e);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1000);
        }}
      >
        {copied ? "Copied!" : hex} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
</svg>

      </span>
    </li>
  );
}

export default ListItem;
