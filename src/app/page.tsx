import Image from "next/image";
import styles from "./page.module.scss";
import { FaGear } from "react-icons/fa6";
import Main from "@/components/main";
import StatusProvider from "@/providers/status.providers";

export default function Home() {
  return (
    <main className={styles.page}>
      <StatusProvider>
        <Main />
      </StatusProvider>
    </main>
  );
}
