import {JSX} from "react";
import styles from "./CatCard.module.css";
import {Cat} from "../../types";
import {toggleFavorite} from "../../utils/getFavoriteUtils";

type CatsCardProps = {
  cat: Cat;
  setFavoriteIds: React.Dispatch<React.SetStateAction<Set<string>>>;
  setCats: React.Dispatch<React.SetStateAction<Map<string, Cat>>>;
};

function CatsCard({cat, setFavoriteIds, setCats}: CatsCardProps): JSX.Element {
  return (
    <div className={styles.card}>
      <div
        style={{backgroundImage: `url(${cat.url})`}}
        className={styles.img}
      ></div>
      <div
        className={`${cat.isFavorite ? styles.favorite : styles.notFavorite}`}
        onClick={() => {
          toggleFavorite(cat.id, setFavoriteIds, setCats);
        }}
      ></div>
    </div>
  );
}
export default CatsCard;
