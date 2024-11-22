import IBase from "../models/base";

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

	getAll(): T[] {
		return this._l;
	}

	create(m: T): void {
		this._l.push(m);
		this._counter++;
	}

	update(id: number, m: T): void {
		if (id !== m.id) return;

		const idx = this._l.findIndex((i) => i.id === id);
		if (idx === -1) return;

		this._l[idx] = m;
	}

	delete(id: number): boolean | T {
		const idx = this._l.findIndex((i) => i.id === id);
		if (idx === -1) return false;

		return this._l.splice(idx, 1)[0];
	}
}
