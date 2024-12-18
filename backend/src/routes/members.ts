import type { Request, Response } from "express";
import type { IMember, IPage } from "@shared/types";
import type { ICreateMember } from "../models/Member";

import { Router } from "express";
import MemberController from "../controllers/members";

const router = Router();
const _c = new MemberController();

router.get(
	"/",
	(
		req: Request<{}, IPage<IMember>, {}, { page?: string; items?: string }>,
		res: Response,
	) => {
		const { page, items } = req.query;

		let response: IPage<IMember>;

		if (page === undefined && items === undefined) {
			response = _c.getAll();
		} else {
			const _page = page ? parseInt(page) : 0;
			const _items = items ? parseInt(items) : 5;

			response = _c.getPage(_page, _items);
		}
		res.status(200).json(response);
	},
);

router.get("/:id", (req: Request<{ id: string }>, res: Response) => {
	const { id } = req.params;
	const member = _c.get(parseInt(id));

	if (!member) {
		res.status(404).json({ message: "Item not found" });
		return;
	}
	res.status(200).json(member);
});

router.post("/", (req: Request<{}, {}, ICreateMember>, res: Response) => {
	const newMember: IMember = {
		...req.body,
		id: _c.counter + 1,
	};

	_c.create(newMember);
	res.status(201).json(newMember);
});

router.put(
	"/:id",
	(req: Request<{ id: string }, {}, ICreateMember>, res: Response) => {
		const { id } = req.params;
		const _id = parseInt(id);

		const member = _c.get(_id);

		if (member === undefined) {
			res.status(404).json({ message: "Item not found" });
			return;
		}

		const updatedMember: IMember = {
			...member,
			...req.body,
		};

		const result = _c.update(_id, updatedMember);
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
