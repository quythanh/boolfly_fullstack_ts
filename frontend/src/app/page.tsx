import Link from "next/link";

export default function Home() {
	return (
		<div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen flex items-center justify-center text-white">
			<div className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 p-10 rounded-2xl shadow-2xl w-96">
				<h1 className="text-3xl font-extrabold mb-8 text-center text-white">
					Welcome
				</h1>
				<p className="text-lg text-gray-300 mb-8 text-center">
					Please select page to continue
				</p>
				<div className="space-y-6">
					<Link href="/books" className="block">
						<button className="w-full py-4 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition transform duration-300">
							Books
						</button>
					</Link>
					<Link href="/members" className="block">
						<button className="w-full py-4 bg-gradient-to-r from-green-600 via-teal-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition transform duration-300">
							Members
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
