import {Cat} from "../types";

export const saveCatsToStorage = (catsMap: Map<string, Cat>): void => {
  localStorage.setItem("cats", JSON.stringify([...catsMap.values()]));
};

export const saveFavoriteIdsToStorage = (favoriteIds: Set<string>): void => {
  localStorage.setItem("favoriteIds", JSON.stringify([...favoriteIds]));
};

export const loadCatsFromStorage = (): Map<string, Cat> => {
  const storedCats = localStorage.getItem("cats");
  if (!storedCats) return new Map();
  const parsedCats: Cat[] = JSON.parse(storedCats);
  return new Map(parsedCats.map((cat) => [cat.id, cat]));
};

export const loadFavoriteIds = (): Set<string> => {
  const storedFavorites = localStorage.getItem("favoriteIds");
  return new Set(storedFavorites ? JSON.parse(storedFavorites) : []);
};
