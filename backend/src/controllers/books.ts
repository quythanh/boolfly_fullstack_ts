import type IBook from "../models/Book";
import Controller from "./base";
import BOOKS from "../data/books";

export default class BookController extends Controller<IBook> {
	constructor() {
		super(BOOKS);
	}
}
