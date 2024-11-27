interface Props {
	current: number;
	total: number;
	onChange: (value: number) => void;
}

export default function Pagination({ current, total, onChange }: Props) {
	return (
		<nav className="flex justify-center items-center space-x-3 mt-6">
			{Array.from({ length: total }).map((_, i) => {
				const commonClassName =
					"py-2 px-4 rounded-full text-sm font-bold tracking-wide transition";

				const selectedClassName =
					"bg-gradient-to-r from-gold-400 to-amber-500 text-amber-500 shadow-lg scale-105";

				const otherClassName =
					"bg-gray-700 hover:bg-gradient-to-r hover:from-gold-400 hover:to-amber-500 hover:text-amber-500 hover:shadow";

				return (
					<button
						key={i}
						className={`${commonClassName} ${current === i ? selectedClassName : otherClassName}`}
						onClick={() => {
							onChange(i);
						}}
					>
						{i + 1}
					</button>
				);
			})}
		</nav>
	);
}
