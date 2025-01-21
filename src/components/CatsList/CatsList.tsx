import {JSX, useEffect, useState} from "react";
import styles from "./CatsList.module.css";
import CatsCard from "../CatCard/CatCard";
import {Cat} from "../../types";
import {fetchCats} from "../../utils/getCatsUtils";

type CatsListProps = {
  isFavorite: boolean;
};

function CatsList({isFavorite}: CatsListProps): JSX.Element {
  const [cats, setCats] = useState<Map<string, Cat>>(new Map());
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    fetchCats(setFavoriteIds, setCats);
  }, []);

  const displayedCats = isFavorite
    ? Array.from(favoriteIds)
        .map((id) => cats.get(id))
        .filter((cat): cat is Cat => !!cat)
    : Array.from(cats.values());

  return (
    <div className={styles.list}>
      {displayedCats.length > 0 ? (
        displayedCats.map((cat) => (
          <CatsCard
            key={cat.id}
            cat={cat}
            setFavoriteIds={setFavoriteIds}
            setCats={setCats}
          />
        ))
      ) : (
        <p className={styles.empty}>Коты не найдены </p>
      )}
    </div>
  );
}

export default CatsList;
