import { z } from "zod";

export const FilmSchema = z.object({
  id: z.number(),
  title: z.string(),
  title_original: z.string(),
  year: z.number(),
  runtime: z.number(),
  language: z.string(),
});
