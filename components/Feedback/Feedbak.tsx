"use client";

import { FC, useState, FormEvent } from "react";
import { LuArrowDownRight } from "react-icons/lu";
import { Button, TextField } from "..";
import { sendEmail } from "./action";
import styles from "./Feedback.module.css";

type Props = {
  className?: string;
};

export const Feedback: FC<Props> = ({ className }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    setIsSubmitting(true);
    setStatus(null);

    try {
      const result = await sendEmail(formData);

      if (result?.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Ошибка отправки:", err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={`${styles.form} ${className}`} onSubmit={handleSubmit}>
      <div className={styles.formHeader}>
        <h3>Давай работать вместе</h3>
        <LuArrowDownRight />
      </div>

      <p className={styles.formSubtitle}>
        Есть своя идея для наклеек? Мы открыты к сотрудничеству с авторами. Предложи концепт — мы
        реализуем его вместе.
      </p>

      <TextField
        className={styles.textField}
        id="email"
        name="email"
        type="email"
        label="Почта *"
        required
        placeholder="Ваша почта"
        disabled={status === "success"}
      />

      <TextField
        className={styles.textField}
        id="message"
        name="message"
        label="Сообщение *"
        placeholder="Напиши нам, можешь скинуть ссылку на соцсети или свои работы…"
        multiline
        required
        disabled={status === "success"}
      />

      <p className={styles.submitMessage}>
        {status === "success"
          ? "Спасибо! Сообщение отправлено!"
          : status === "error"
            ? "Ошибка при отправке. Попробуйте позже!"
            : ""}
      </p>

      <div className={styles.formFooter}>
        <Button type="submit" size="sm" disabled={status === "success" || isSubmitting}>
          {isSubmitting ? "Отправка..." : "Отправить"}
        </Button>
        <p>* обязательно</p>
      </div>
    </form>
  );
};
