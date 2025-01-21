import CatsApi from "../api/api";
import {Cat} from "../types";

export const fetchCatsFromApi = async (
  favoriteIdsSet: Set<string>
): Promise<Map<string, Cat>> => {
  const api = new CatsApi();
  const data: Cat[] = await api.GetCats();
  return new Map(
    data.map((cat) => [
      cat.id,
      {...cat, isFavorite: favoriteIdsSet.has(cat.id)},
    ])
  );
};
