import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styles from "./button.module.css";

type Variant = "primary" | "secondary";

type Size = "sm" | "m" | "l";

type Props = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = ({ children, variant = "primary", size = "m", className = "", ...rest }) => {
  return (
    <button className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`} {...rest}>
      {children}
    </button>
  );
};
