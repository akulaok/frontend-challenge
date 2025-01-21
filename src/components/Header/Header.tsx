import {Dispatch, JSX, SetStateAction} from "react";
import styles from "./Header.module.css";

type HeaderProps = {
  isFavoriteTab: boolean;
  setIsFavoriteTab: Dispatch<SetStateAction<boolean>>;
};

function Header({isFavoriteTab, setIsFavoriteTab}: HeaderProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div 
        className={isFavoriteTab ? styles.tab : styles.tab_active}
        onClick={() => setIsFavoriteTab(false)}
      >
        Все котики
      </div>
      <div
        className={isFavoriteTab ? styles.tab_active : styles.tab}
        onClick={() => setIsFavoriteTab(true)}
      >
        Любимые котики
      </div>
    </div>
  );
}
export default Header;
