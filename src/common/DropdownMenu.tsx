"use client"
import { DropdownMenuProps } from "@/types/type";
import React, { useState, useEffect, useRef, forwardRef, ReactNode } from "react";

const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ children, trigger, customeClass, direction, menuClass }, ref) => {

    const [open, setOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const btnRef = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        btnRef.current &&
        !wrapperRef.current.contains(event.target as Node) &&
        !btnRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    useEffect(() => {
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, []);

    return (
      <div className={`dropdown ${customeClass} `}>
        <div ref={btnRef} onClick={() => setOpen(!open)}>
          {trigger}
        </div>
        {open && (
          <div ref={wrapperRef} className={`dropdown-menu ${direction} ${menuClass}`}>
            {children}
          </div>
        )}
      </div>
    );
  }
);

DropdownMenu.displayName = "DropdownMenu";
export default DropdownMenu;
