import {JSX, useState} from "react";
import Header from "../components/Header/Header";
import styles from "./CatsPage.module.css";
import CatsList from "../components/CatsList/CatsList";

function CatsPage(): JSX.Element {
  const [isFavoriteTab, setIsFavoriteTab] = useState<boolean>(false);
  return (
    <div className={styles.page}>
      <Header
        isFavoriteTab={isFavoriteTab}
        setIsFavoriteTab={setIsFavoriteTab}
      />
      <main className={styles.main}>
        <CatsList isFavorite={isFavoriteTab} />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

export default CatsPage;
