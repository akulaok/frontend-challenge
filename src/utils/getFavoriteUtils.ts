import {Cat} from "../types";
import {saveCatsToStorage, saveFavoriteIdsToStorage} from "./storageUtils";

export const toggleFavorite = (
  id: string,
  setFavoriteIds: React.Dispatch<React.SetStateAction<Set<string>>>,
  setCats: React.Dispatch<React.SetStateAction<Map<string, Cat>>>
) => {
  setFavoriteIds((prevFavoriteIds) => {
    const updatedFavorites = new Set(prevFavoriteIds);
    if (updatedFavorites.has(id)) {
      updatedFavorites.delete(id);
    } else {
      updatedFavorites.add(id);
    }

    setCats((prevCats) => {
      const updatedCats = new Map(prevCats);
      const cat = updatedCats.get(id);
      if (cat) {
        const updatedCat = {...cat, isFavorite: !cat.isFavorite};
        updatedCats.set(id, updatedCat);
      }
      saveCatsToStorage(updatedCats);
      return new Map(updatedCats);
    });
    saveFavoriteIdsToStorage(updatedFavorites);
    return updatedFavorites;
  });
};
