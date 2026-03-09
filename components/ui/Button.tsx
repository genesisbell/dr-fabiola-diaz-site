import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({ variant = "primary", children, ...props }: ButtonProps) {
  return (
    <button {...props}>
      {children}
    </button>
  );
}
