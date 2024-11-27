export interface IBook {
	id: number;
	title: string;
	author: string;
	publicationYear: number;
	available: boolean;
}

export interface IMember {
	id: number;
	name: string;
}

export interface IPage<T> {
	current: number;
	total: number;
	data: T[];
}
