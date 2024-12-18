import type { IBase, IPage } from "@shared/types";

export default abstract class Controller<T extends IBase> {
	protected _l: T[];
	private _counter: number = 0;

	constructor(data: T[]) {
		this._l = data;
		this._counter = data.length;
	}

	get counter() {
		return this._counter;
	}

	get(id: number): T | undefined {
		return this._l.find((i) => i.id === id);
	}

	getAll(): IPage<T> {
		return {
			current: 0,
			total: 1,
			data: this._l,
		};
	}

	getPage(page: number, items: number): IPage<T> {
		return {
			current: page,
			total: Math.ceil(this._l.length / items),
			data: this._l.slice(page * items, (page + 1) * items),
		};
	}

	create(m: T): void {
		this._l.push(m);
		this._counter++;
	}

	update(id: number, m: T): boolean | T {
		if (id !== m.id) return false;

		const idx = this._l.findIndex((i) => i.id === id);
		if (idx === -1) return false;

		this._l[idx] = m;
		return m;
	}

	delete(id: number): boolean | T {
		const idx = this._l.findIndex((i) => i.id === id);
		if (idx === -1) return false;

		return this._l.splice(idx, 1)[0];
	}
}
