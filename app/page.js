import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <header>
        <Link href='/redirect' passHref>
          리다이렉트
        </Link>
        <Link href='/test' passHref>
          이외
        </Link>
      </header>
      <h1>
        <i> Next.config </i> <br /> 설정
      </h1>
    </main>
  );
}
