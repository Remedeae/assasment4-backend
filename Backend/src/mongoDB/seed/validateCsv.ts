import { z } from "../../../../Shared/node_modules/zod";

export const parseCSVRows = <T>(schema: z.ZodSchema<T>, rows: unknown[]) => {
  const valid: T[] = [];
  const errors: {
    row: number;
    error: z.ZodError;
  }[] = [];

  rows.forEach((row, index) => {
    const result = schema.safeParse(row);
    if (result.success) {
      valid.push(result.data);
    } else {
      errors.push({
        row: index + 2,
        error: result.error,
      });
    }
  });

  return { valid, errors };
};
