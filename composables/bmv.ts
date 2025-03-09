import type { Film, Optional } from "~/types";

export const fetchFilms = async (): Promise<Optional<Film[]>> => {
  const { data, error } = await useFetch("/api/film");
  if (error.value) {
    return null;
  }
  return data.value;
};
