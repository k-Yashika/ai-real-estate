import type { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
  className?: string;
};

export default function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-full px-[10px] py-[3px] text-xs font-medium ${className}`}
    >
      {children}
    </span>
  );
}
