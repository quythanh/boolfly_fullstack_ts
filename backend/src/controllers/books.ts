import type { IBook } from "@shared/types";
import Controller from "./base";
import BOOKS from "../data/books";

export default class BookController extends Controller<IBook> {
	constructor() {
		super(BOOKS);
	}
}
