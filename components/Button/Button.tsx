import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary";
type Size = "sm" | "m" | "l" | "xl";

type Props = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  round?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, variant = "primary", size = "m", round = false, className = "", ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={`
          ${styles.button}
          ${styles[variant]}
          ${styles[size]}
          ${round ? styles.round : ""}
          ${className}
        `}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
