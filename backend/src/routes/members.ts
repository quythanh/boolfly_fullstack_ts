import type { Request, Response } from "express";
import type IMember from "../models/Member";
import type { ICreateMember } from "../models/Member";

import { Router } from "express";
import MemberController from "../controllers/members";

const router = Router();
const _c = new MemberController();

router.get("/", (req: Request, res: Response) => {
	const members = _c.getAll();
	res.status(200).json(members);
});

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

router.put("/:id", (req: Request, res: Response) => {
	res.status(200).json({ hello: "world" });
});

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
