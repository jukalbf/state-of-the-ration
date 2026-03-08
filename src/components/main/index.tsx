"use client";

import styles from "./styles.module.scss";
import useStatus from "@/hooks/useStatus";
import { useEffect, useState } from "react";

export default function Main() {
  const { status, setStatus } = useStatus();
  const options = [
    { status: "Pronto", color: "--light-green" },
    { status: "Pendente", color: "--light-yellow" },
    { status: "Deu Problema", color: "--light-red" },
  ];

  useEffect(() => {
    console.log("Atualizando status: ", status);
  }, [status]);

  return (
    <main className={styles.mainContainer}>
      <div className={styles.statusContainer}>
        <div
          style={{ backgroundColor: `var(${status?.color})` }}
          className={styles.colorBlock}
        />
        {/* Status vem do context */}
        <h1>{status?.status || ""}</h1>
      </div>
      <ul className={styles.statusOptions}>
        {options.map((option) => (
          <li key={option.status} onClick={() => setStatus(option)}>
            {option.status}
          </li>
        ))}
      </ul>
    </main>
  );
}
