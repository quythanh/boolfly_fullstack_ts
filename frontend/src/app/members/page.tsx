"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { IMember, IPage } from "~/interfaces";
import { del, get, post, put } from "~/utils/request";
import Table from "~/components/Table";
import Pagination from "~/components/Pagination";

const INIT_FORM: IMember = {
	id: -1,
	name: "",
};

export default function Member() {
	const [formData, setFormData] = useState(INIT_FORM);
	const [page, setPage] = useState({
		current: 0,
		total: 1,
		items: 5,
	});

	const { data: members, refetch } = useQuery<IMember[]>({
		queryKey: ["members", page.current, page.items],
		queryFn: async () => {
			const data = (await get(
				`members?page=${page.current}&items=${page.items}`,
			)) as IPage<IMember>;
			setPage((prev) => ({
				...prev,
				current: data.current,
				total: data.total,
			}));
			return data.data;
		},
	});

	const handleFormChange = (e: React.SyntheticEvent) => {
		const { name, value } = e.target as HTMLInputElement;
		setFormData({
			...formData,
			[name]: value,
		});
	};
	const resetForm = () => {
		setFormData(INIT_FORM);
	};

	let Legend = () => (
		<legend className="text-xl font-semibold text-gold-500">
			Create Member
		</legend>
	);
	let ActionButtons = () => (
		<div className="mt-6 flex space-x-4">
			<button
				type="button"
				className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300"
				onClick={() => {
					post("members", formData).then(() => {
						resetForm();
						refetch();
					});
				}}
			>
				Add Member
			</button>
			<button
				type="button"
				className="w-full py-3 bg-gray-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300"
				onClick={resetForm}
			>
				Clear Form
			</button>
		</div>
	);

	if (formData.id !== -1) {
		Legend = () => (
			<legend
				className="text-xl font-semibold text-gold-500"
				onClick={resetForm}
			>
				Edit Member
			</legend>
		);
		ActionButtons = () => (
			<div className="mt-6 flex space-x-4">
				<button
					type="button"
					className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300"
					onClick={() => {
						put(`members/${formData.id}`, formData).then(() => {
							refetch();
						});
					}}
				>
					Save
				</button>
				<button
					type="button"
					className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300"
					onClick={() => {
						if (formData.id === -1) return;
						del(`members/${formData.id}`).then(() => {
							resetForm();
							refetch();
						});
					}}
				>
					Delete Member
				</button>
			</div>
		);
	}

	return (
		<div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black min-h-screen flex items-center justify-center text-gray-100">
			<div className="space-y-12 w-full max-w-5xl px-6">
				<div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black p-10 rounded-3xl shadow-2xl text-white">
					<h1 className="text-3xl font-extrabold mb-8 text-center text-white tracking-wide">
						Member Management
					</h1>

					<form>
						<fieldset className="border border-gray-600 p-6 rounded-xl">
							<Legend />
							<div>
								<label
									htmlFor="name"
									className="block text-lg font-medium mb-2"
								>
									Name:
								</label>
								<input
									type="text"
									name="name"
									className="w-full p-3 border border-gray-600 rounded-lg bg-gray-900 text-white placeholder-gray-500"
									placeholder="Enter name"
									value={formData.name}
									onChange={handleFormChange}
								/>
							</div>
						</fieldset>
						<ActionButtons />
					</form>

					<div className="mt-12">
						<div className="flex justify-between items-center mb-6">
							<h2 className="text-2xl font-semibold text-white">Members</h2>
							<input
								id="inpSearch"
								type="text"
								className="p-3 w-1/3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-500"
								placeholder="Type to search..."
							/>
						</div>
						<Table
							header={["ID", "Name"]}
							data={members?.map((member) => [member.id, member.name]) ?? []}
							onRowSelect={(row) => {
								setFormData({
									id: row[0] as number,
									name: row[1] as string,
								});
							}}
						/>
						<Pagination
							{...page}
							onChange={(value) => {
								setPage({
									...page,
									current: value,
								});
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
