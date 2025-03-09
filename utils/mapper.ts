import { mapValues } from "lodash-es";
import type { Film } from "../types";

/**
 * Data mappers that maps entities from persistent storage to in-memory models.
 */

export const toFilm = (record: Object): Film => {
  const numberFields = ["id", "year", "runtime"];
  return mapValues(record, (value, key) =>
    numberFields.includes(key) ? value.toNumber() : value,
  ) as Film;
};
