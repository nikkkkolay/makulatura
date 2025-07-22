"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";
import { GiBackPain } from "react-icons/gi";
import { Button } from "@/components";

const NotFound: FC = () => {
  const router = useRouter();
  return (
    <div
      style={{
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <h1
          style={{
            marginBottom: "20px",
            fontSize: "30px",
            fontWeight: 500,
          }}
        >
          <GiBackPain />
          &nbsp;404
        </h1>
        <p
          style={{
            marginBottom: "15px",
          }}
        >
          Страница не существует
        </p>
        <Button
          onClick={() => router.push("/")}
          style={{
            fontWeight: 300,
            margin: "auto",
          }}
          size="sm"
        >
          На главную
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
