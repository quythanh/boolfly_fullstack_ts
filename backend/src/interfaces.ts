export interface IPage<T> {
	current: number;
	total: number;
	data: T[];
}
