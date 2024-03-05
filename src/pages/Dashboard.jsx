import axios from "axios";
import { useEffect, useState } from "react";
import { sendNotify } from "../hooks/notify/notify";
import RightArrowIcon from "../components/svg/RightArrowIcon";
import InputField from "../components/UI/InputField";
import { Link } from "react-router-dom";

const Dashboard = () => {
	const [albums, setAlbums] = useState([]);
	const [query, setQuery] = useState("");
	const handleQueryValue = (e) => {
		const value = e.target.value;
		setQuery(value);
	};
	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/albums")
			.then((res) => setAlbums(res.data))
			.catch((err) => sendNotify("err", "Une erreur est survenue", err));
	}, []);
	const filteredAlbum = () =>
		albums?.filter((e) => e.title.toLowerCase().includes(query.toLowerCase()));
	return (
		<>
			<div className="flex flex-col items-start justify-start w-full h-full">
				<div className="flex flex-row items-center justify-between w-full">
					<h1>Albums</h1>
					<div>
						<InputField
							type={"text"}
							placeholder={"Rechercher un album"}
							value={query}
							onChange={handleQueryValue}
						/>
					</div>
				</div>
				<div className="flex flex-col items-center justify-start w-full py-4 space-y-4">
					{filteredAlbum()?.map((album) => {
						return (
							<Link
								to={`/album/${album.id}`}
								key={album.id}
								className="flex flex-row items-center justify-between w-full px-4 py-4 bg-gray-300 shadow-lg cursor-pointer hover:bg-slate-200"
							>
								<span>{album.title}</span>
								<RightArrowIcon size={24} />
							</Link>
						);
					})}
					{filteredAlbum().length == 0 && (
						<div className="flex flex-col space-y-4">
							<hr className="w-full"></hr>
							<p className="text-center text-red-500">Aucun album trouvé</p>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Dashboard;
