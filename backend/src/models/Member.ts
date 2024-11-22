import IBase from "./base";

export default interface IMember extends IBase {
	name: string;
}

export interface ICreateMember extends Omit<IMember, "id"> {}
