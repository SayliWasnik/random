import Link from "next/link";
import { worksArr } from "../data/works";
import styles from "../styles/Home.module.css";

const Works = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.grid}>
            {worksArr.map((item) => (
              <Link key={item.key} href={`/works/${item.key}`}>
                <div className={styles.card}>
                  <h2>{item.key}</h2>
                  <p>{item.label}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Works;
