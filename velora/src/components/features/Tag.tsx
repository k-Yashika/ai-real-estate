import { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
  className?: string;
};

export default function Tag({ children, className = "" }: TagProps) {
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-full bg-teal-50 px-[10px] py-[3px] text-xs font-medium text-teal-700 ${className}`}
    >
      {children}
    </span>
  );
}
