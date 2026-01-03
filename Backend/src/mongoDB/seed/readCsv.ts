import fs from "fs";
import { parse } from "csv-parse";

export const readCsv = <T>(path: string): Promise<T[]> => {
  return new Promise((resolve, reject) => {
    const records: T[] = [];

    fs.createReadStream(path)
      .pipe(parse({ columns: true, trim: false }))
      .on("data", (row) => {
        records.push(row);
      })
      .on("end", () => resolve(records))
      .on("error", reject);
  });
};
