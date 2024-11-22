import IBase from "./base";

export default interface IBook extends IBase {
	title: string;
	author: string;
	publicationYear: number;
	available: boolean;
}

export interface ICreateBook extends Omit<IBook, "id" | "available"> {}
