import Image from "next/image";
import styles from "./page.module.scss";
import { FaGear } from "react-icons/fa6";

export default function Home() {
  return (
    <main className={styles.page}>
      <h1>
        Já iniciaremos os trabalhos... <FaGear />
      </h1>
    </main>
  );
}
