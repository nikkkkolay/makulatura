import { InputHTMLAttributes, TextareaHTMLAttributes, FC, ReactNode } from "react";
import styles from "./TextField.module.css";

type Props = {
  label?: ReactNode;
  id: string;
  className?: string;
  multiline?: boolean;
} & InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextField: FC<Props> = ({ label, id, className = "", multiline = false, ...rest }) => {
  return (
    <div className={styles.wrapper}>
      {label && <label htmlFor={id}>{label}</label>}
      {multiline ? (
        <textarea id={id} className={`${styles.textField} ${className}`} {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)} />
      ) : (
        <input id={id} className={`${styles.textField} ${className}`} {...(rest as InputHTMLAttributes<HTMLInputElement>)} />
      )}
    </div>
  );
};
