import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

const variantClass: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "btn-primary",
  outline: "btn-outline",
};

export default function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <button className={`${variantClass[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
