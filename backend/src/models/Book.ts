import type { IBook } from "@shared/types";

export interface ICreateBook extends Omit<IBook, "id" | "available"> {}
