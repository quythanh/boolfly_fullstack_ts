import type IMember from "../models/Member";
import Controller from "./base";

const MEMBERS: IMember[] = [
	{ id: 1, name: "Phan Chí Hiếu" },
	{ id: 2, name: "Tsàn Quý Thành" },
	{ id: 3, name: "Phạm Đỗ Minh Vương" },
];

export default class MemberController extends Controller<IMember> {
	constructor() {
		super(MEMBERS);
	}
}
