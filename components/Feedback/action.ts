"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData) {
  const email = formData.get("email");
  const message = formData.get("message");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Форма сайта" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: "Новое сообщение",
      html: `<p>Email: ${email}</p><p>${message}</p>`,
    });

    return { ok: true };
  } catch (error) {
    console.error(error);
    return { ok: false };
  }
}
