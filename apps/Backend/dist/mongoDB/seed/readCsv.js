import fs from "fs";
import { parse } from "csv-parse";
export const readCsv = (path) => {
    return new Promise((resolve, reject) => {
        const records = [];
        fs.createReadStream(path)
            .pipe(parse({ columns: true, trim: false }))
            .on("data", (row) => {
            records.push(row);
        })
            .on("end", () => resolve(records))
            .on("error", reject);
    });
};
//# sourceMappingURL=readCsv.js.map