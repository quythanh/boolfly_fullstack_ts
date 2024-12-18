import type { IMember } from "@shared/types";

export interface ICreateMember extends Omit<IMember, "id"> {}
