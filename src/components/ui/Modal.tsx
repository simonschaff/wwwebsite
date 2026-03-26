"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string; // used for custom max-width or backgrounds
}

export function Modal({ isOpen, onClose, children, className }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />
      <div 
        className={cn(
          "relative bg-background w-full max-h-[90vh] overflow-y-auto animate-[fade-in-up_0.3s_ease-out_forwards] rounded-2xl shadow-2xl",
          className
        )}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-dark hover:text-primary transition-colors bg-white/60 backdrop-blur-md rounded-full shadow-sm"
        >
          <X size={20} />
        </button>
        {children}
      </div>
    </div>
  );
}
