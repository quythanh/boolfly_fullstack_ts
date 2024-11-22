"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { IBook } from "~/interfaces";

export default function Book() {
	const [isCreate, setIsCreate] = useState<boolean>(true);

	const { data: books } = useQuery<IBook[]>({
		queryKey: ["books"],
		queryFn: async () => {
			const req = await fetch("http://localhost:8000/books");
			return await req.json();
		},
	});

	let Legend = () => (
		<legend className="text-xl font-semibold text-gold-500">Create Book</legend>
	);
	let ActionButtons = () => (
		<div className="mt-6 flex space-x-4">
			<button
				type="button"
				className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300"
			>
				Add Book
			</button>
			<button
				type="button"
				className="w-full py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300"
			>
				Clear Form
			</button>
		</div>
	);

	if (!isCreate) {
		Legend = () => (
			<legend
				className="text-xl font-semibold text-gold-500"
				onClick={() => {
					setIsCreate(true);
				}}
			>
				Edit Book
			</legend>
		);
		ActionButtons = () => (
			<div className="mt-6 flex space-x-4">
				<button
					type="button"
					className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300"
				>
					Save
				</button>
				<button
					type="button"
					id="btnDeleteBook"
					className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300"
				>
					Delete Book
				</button>
			</div>
		);
	}

	return (
		<div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black min-h-screen flex items-center justify-center text-gray-100">
			<div className="space-y-12 w-full max-w-5xl px-6">
				<div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black p-10 rounded-3xl shadow-2xl text-white">
					<h1 className="text-3xl font-extrabold mb-8 text-center text-white tracking-wide">
						Book Management
					</h1>

					<form>
						<fieldset className="border border-gray-600 p-6 rounded-xl">
							<Legend />
							<div>
								<label
									htmlFor="bookTitle"
									className="block text-lg font-medium mb-2"
								>
									Title:
								</label>
								<input
									type="text"
									id="bookTitle"
									className="w-full p-3 border border-gray-600 rounded-lg bg-gray-900 text-white placeholder-gray-500"
									placeholder="Enter book title"
								/>
							</div>
							<div>
								<label
									htmlFor="bookAuthor"
									className="block text-lg font-medium mb-2"
								>
									Author:
								</label>
								<input
									type="text"
									id="bookAuthor"
									className="w-full p-3 border border-gray-600 rounded-lg bg-gray-900 text-white placeholder-gray-500"
									placeholder="Enter author name"
								/>
							</div>
							<div>
								<label
									htmlFor="bookPublicationYear"
									className="block text-lg font-medium mb-2"
								>
									Publication Year:
								</label>
								<input
									type="number"
									id="bookPublicationYear"
									className="w-full p-3 border border-gray-600 rounded-lg bg-gray-900 text-white placeholder-gray-500"
									placeholder="Enter publication year"
								/>
							</div>
						</fieldset>
						<ActionButtons />
					</form>

					<div className="mt-12">
						<div className="flex justify-between items-center mb-6">
							<h2 className="text-2xl font-semibold text-white">Books</h2>
							<input
								id="inpSearchBook"
								type="text"
								className="p-3 w-1/3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-500"
								placeholder="Type to search..."
							/>
						</div>
						<table className="w-full border-collapse border border-gray-600 bg-gray-900 rounded-xl overflow-hidden">
							<thead className="bg-gray-800 text-white text-lg">
								<tr>
									<th className="border border-gray-700 p-3">ID</th>
									<th className="border border-gray-700 p-3">Title</th>
									<th className="border border-gray-700 p-3">Author</th>
									<th className="border border-gray-700 p-3">
										Publication Year
									</th>
									<th className="border border-gray-700 p-3">Available</th>
								</tr>
							</thead>
							<tbody>
								{books?.map((book) => {
									return (
										<tr className="hover:bg-gray-800 transition duration-300 cursor-pointer">
											<td className="border border-gray-700 p-3 text-center">
												{book.id}
											</td>
											<td className="border border-gray-700 p-3 text-center">
												{book.title}
											</td>
											<td className="border border-gray-700 p-3 text-center">
												{book.author}
											</td>
											<td className="border border-gray-700 p-3 text-center">
												{book.publicationYear}
											</td>
											<td className="border border-gray-700 p-3 text-center">
												{book.available ? "Yes" : "No"}
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
