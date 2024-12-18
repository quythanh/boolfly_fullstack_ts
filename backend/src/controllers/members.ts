import type { IMember } from "@shared/types";
import Controller from "./base";
import MEMBERS from "../data/members";

export default class MemberController extends Controller<IMember> {
	constructor() {
		super(MEMBERS);
	}
}
