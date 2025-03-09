import type { z } from "zod";
import type { FilmSchema } from "./schemas";

export type Optional<T> = T | null | undefined;

export type ElementType = "book" | "film" | "music" | "painting";
export type Element = Film;

export type Film = z.infer<typeof FilmSchema>;
