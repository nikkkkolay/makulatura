import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary";

type Size = "sm" | "m" | "l";

type Props = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  round?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = ({ children, variant = "primary", size = "m", round = false, className = "", ...rest }) => {
  return (
    <button
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
};
