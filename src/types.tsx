export type Cat = {
  id: string;
  url: string;
  width: number;
  height: number;
  isFavorite: boolean;
};

export const cats = new Map<string, Cat>();
export const favoriteCats = new Map<string, Cat>();


export type UseCatsResult = {
  cats: Map<string, Cat>;
  favoriteIds: Set<string>;
  toggleFavorite: (id: string) => void;
};