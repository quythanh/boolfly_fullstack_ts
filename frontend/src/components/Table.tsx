type TableCellType = string | number;

interface Props {
	header: string[];
	data: TableCellType[][];
	onRowSelect: (rowData: TableCellType[]) => void;
}

export default function Table({ header, data, onRowSelect }: Props) {
	return (
		<table className="w-full border-collapse border border-gray-600 bg-gray-900 rounded-xl overflow-hidden">
			<thead className="bg-gray-800 text-white text-lg">
				<tr>
					{header.map((title, i) => (
						<th key={i} className="border border-gray-700 p-3">
							{title}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data?.map((row, i) => {
					return (
						<tr
							key={i}
							className="hover:bg-gray-800 transition duration-300 cursor-pointer"
							onClick={() => {
								onRowSelect(row);
							}}
						>
							{row.map((v, j) => (
								<td key={j} className="border border-gray-700 p-3 text-center">
									{v}
								</td>
							))}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
