import {Cat} from "../types";
import {fetchCatsFromApi} from "./catsApiUtils";
import {
  loadCatsFromStorage,
  loadFavoriteIds,
  saveCatsToStorage,
} from "./storageUtils";

export const fetchCats = async (
  setFavoriteIds: React.Dispatch<React.SetStateAction<Set<string>>>,
  setCats: React.Dispatch<React.SetStateAction<Map<string, Cat>>>
) => {
  try {
    const favoriteIdsSet = loadFavoriteIds();
    setFavoriteIds(favoriteIdsSet);

    const storedCats = loadCatsFromStorage();
    if (storedCats.size > 0) {
      setCats(storedCats);
    } else {
      const fetchedCats = await fetchCatsFromApi(favoriteIdsSet);
      setCats(fetchedCats);
      saveCatsToStorage(fetchedCats);
    }
  } catch (error) {
    console.error("Error fetching cats:", error);
  }
};
