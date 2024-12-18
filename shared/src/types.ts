export interface IBase {
	readonly id: number;
}

export interface IBook extends IBase {
	title: string;
	author: string;
	publicationYear: number;
	available: boolean;
}

export interface IMember extends IBase {
	name: string;
}

export interface IPage<T> {
	current: number;
	total: number;
	data: T[];
}
