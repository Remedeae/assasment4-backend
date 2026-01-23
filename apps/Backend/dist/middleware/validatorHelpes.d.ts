import z from "zod";
type ErrorReturnSchema = {
    status: number;
    msg: string;
};
export declare const validateData: <S extends z.ZodTypeAny>(data: unknown, dataSchema: S, err: ErrorReturnSchema | undefined) => z.infer<S>;
export declare const errMsg: ErrorReturnSchema[];
export {};
//# sourceMappingURL=validatorHelpes.d.ts.map