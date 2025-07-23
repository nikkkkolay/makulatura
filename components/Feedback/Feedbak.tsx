import { FC } from "react";
import { LuArrowDownRight } from "react-icons/lu";
import { Button, TextField } from "..";
import styles from "./Feedback.module.css";

type Props = {
  className?: string;
};

export const Feedback: FC<Props> = ({ className }) => {
  return (
    <form className={`${styles.form} ${className}`} action="">
      <div className={styles.formHeader}>
        <h4>Давай работать вместе</h4>
        <LuArrowDownRight />
      </div>
      <p className={styles.formSubtitle}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure aliquam odio facere saepe veniam earum consequuntur incidunt blanditiis
        deleniti eaque!
      </p>
      <TextField className={styles.textField} id="email" type="email" label="Почта *" required placeholder="Ваша почта" />
      <TextField className={styles.textField} id="message" label="Сообщение *" placeholder="Напишите что-нибудь..." multiline required />
      <div className={styles.formFooter}>
        <Button type="submit" size="sm">
          Отправить
        </Button>
        <p>* обязательно</p>
      </div>
    </form>
  );
};
