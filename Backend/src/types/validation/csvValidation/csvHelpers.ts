import { z } from "../../../../../Shared/node_modules/zod";

export const csvNumber = (schema: z.ZodNumber) =>
  z.preprocess((v) => Number(v), schema);
export const csvNumberOptional = (schema: z.ZodNumber) =>
  z.preprocess((v) => (v === "" ? undefined : Number(v)), schema.optional());
export const csvNumberDefault = (schema: z.ZodNumber, def: number) =>
  z.preprocess((v) => (v === "" ? def : Number(v)), schema);

export const csvArray = (arraySplitter: string) =>
  z
    .string()
    .transform((v) => (v ? v.split(arraySplitter).map((s) => s.trim()) : []));
export const csvArrayOptional = (arraySplitter: string) =>
  z
    .preprocess((v) => (v === "" ? undefined : v), z.string())
    .transform((v) =>
      v ? v.split(arraySplitter).map((s) => s.trim()) : undefined
    )
    .optional();
export const csvStringOptional = z.preprocess(
  (v) =>
    typeof v === "string" && v.trim() === ""
      ? undefined
      : typeof v === "string"
        ? v.trim()
        : v,
  z.string().optional()
);
export const csvEnumOptional = (values: string[]) =>
  z.preprocess((v) => {
    if (typeof v !== "string") return v;
    const trimmed = v.trim();
    return trimmed === "" ? undefined : trimmed;
  }, z.enum(values).optional());
export const csvBoolean = z.preprocess((v) => {
  if (typeof v === "boolean") return v;
  if (typeof v !== "string") return v;

  const t = v.trim().toLowerCase();
  if (t === "true") return true;
  if (t === "false") return false;

  return v;
}, z.boolean());
