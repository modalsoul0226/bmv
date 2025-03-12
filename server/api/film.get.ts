import { map } from "lodash-es";
import { toFilm } from "../../utils/mapper";
import type { Film } from "../../types";

const getAll = async (): Promise<Film[]> => {
  const { records } = await useDriver().executeQuery(
    "MATCH (film:Film) RETURN film { .id, .title, .title_original, .year, .director, .runtime, .language, .overview, .backdrop } AS details;",
  );
  return map(records, (record) => toFilm(record.get("details")));
};

export default defineEventHandler(getAll);
