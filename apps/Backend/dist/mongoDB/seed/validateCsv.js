export const parseCSVRows = (schema, rows) => {
    const valid = [];
    const errors = [];
    rows.forEach((row, index) => {
        const result = schema.safeParse(row);
        if (result.success) {
            valid.push(result.data);
        }
        else {
            errors.push({
                row: index + 2,
                error: result.error,
            });
        }
    });
    return { valid, errors };
};
//# sourceMappingURL=validateCsv.js.map