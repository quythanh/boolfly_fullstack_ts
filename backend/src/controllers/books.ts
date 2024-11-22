import type IBook from "../models/Book";
import Controller from "./base";

const BOOKS: IBook[] = [
	{
		id: 1,
		title: "Cho Tôi Xin Một Vé Đi Tuổi Thơ",
		author: "Nguyễn Nhật Ánh",
		publicationYear: 2008,
		available: true,
	},
	{
		id: 2,
		title: "Tôi Thấy Hoa Vàng Trên Cỏ Xanh",
		author: "Nguyễn Nhật Ánh",
		publicationYear: 2010,
		available: true,
	},
	{
		id: 3,
		title: "Người Lái Đò Sông Đà",
		author: "Nguyễn Tuân",
		publicationYear: 1960,
		available: true,
	},
	{
		id: 4,
		title: "Tuổi Thơ Dữ Dội",
		author: "Phùng Quán",
		publicationYear: 1988,
		available: true,
	},
	{
		id: 5,
		title: "Đất Rừng Phương Nam",
		author: "Đoàn Giỏi",
		publicationYear: 1957,
		available: true,
	},
	{
		id: 6,
		title: "Nỗi Buồn Chiến Tranh",
		author: "Bảo Ninh",
		publicationYear: 1990,
		available: true,
	},
	{
		id: 7,
		title: "Cánh Đồng Bất Tận",
		author: "Nguyễn Ngọc Tư",
		publicationYear: 2005,
		available: true,
	},
	{
		id: 8,
		title: "Mắt Biếc",
		author: "Nguyễn Nhật Ánh",
		publicationYear: 1990,
		available: true,
	},
	{
		id: 9,
		title: "Rừng Xà Nu",
		author: "Nguyễn Trung Thành",
		publicationYear: 1965,
		available: true,
	},
	{
		id: 10,
		title: "Dế Mèn Phiêu Lưu Ký",
		author: "Tô Hoài",
		publicationYear: 1941,
		available: true,
	},
	{
		id: 11,
		title: "Chí Phèo",
		author: "Nam Cao",
		publicationYear: 1941,
		available: true,
	},
	{
		id: 12,
		title: "Bỉ Vỏ",
		author: "Nguyên Hồng",
		publicationYear: 1938,
		available: true,
	},
	{
		id: 13,
		title: "Đôi Mắt",
		author: "Nam Cao",
		publicationYear: 1948,
		available: true,
	},
	{
		id: 14,
		title: "Số Đỏ",
		author: "Vũ Trọng Phụng",
		publicationYear: 1936,
		available: true,
	},
	{
		id: 15,
		title: "Thương Nhớ Mười Hai",
		author: "Vũ Bằng",
		publicationYear: 1974,
		available: true,
	},
];

export default class BookController extends Controller<IBook> {
	constructor() {
		super(BOOKS);
	}
}
