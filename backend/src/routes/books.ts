import type { Request, Response } from "express";
import type IBook from "../models/Book";
import type { ICreateBook } from "../models/Book";

import { Router } from "express";
import BookController from "../controllers/books";

const router = Router();
const _c = new BookController();

router.get("/", (req: Request, res: Response) => {
	const books = _c.getAll();
	res.status(200).json(books);
});

router.get("/:id", (req: Request<{ id: string }>, res: Response) => {
	const { id } = req.params;
	const book = _c.get(parseInt(id));

	if (!book) {
		res.status(404).json({ message: "Item not found" });
		return;
	}
	res.status(200).json(book);
});

router.post("/", (req: Request<{}, {}, ICreateBook>, res: Response) => {
	const newBook: IBook = {
		...req.body,
		id: _c.counter + 1,
		available: true,
	};

	_c.create(newBook);
	res.status(201).json(newBook);
});

router.put(
	"/:id",
	(req: Request<{ id: string }, {}, ICreateBook>, res: Response) => {
		const { id } = req.params;
		const _id = parseInt(id);

		const book = _c.get(_id);

		if (book === undefined) {
			res.status(404).json({ message: "Item not found" });
			return;
		}

		const updatedBook: IBook = {
			...book,
			...req.body,
		};

		const result = _c.update(_id, updatedBook);
		res.status(200).json(result);
	},
);

router.delete("/:id", (req: Request<{ id: string }>, res: Response) => {
	const { id } = req.params;
	const result = _c.delete(parseInt(id));
	if (!result) {
		res.status(404).json({ message: "Item not found" });
		return;
	}
	res.status(200).json(result);
});

export default router;
