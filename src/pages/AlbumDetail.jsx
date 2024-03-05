import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { sendNotify } from "../hooks/notify/notify";
import CloseIcon from "../components/svg/CloseIcon.jsx";

const AlbumDetail = () => {
	const [displayImage, setDisplayImage] = useState(false);
	const params = useParams();
	const [photos, setPhotos] = useState([]);
	const [imageSrc, setImageSrc] = useState("");
	const [albumName, setAlbumName] = useState("");
	const getImageSrc = (e) => {
		setDisplayImage(true);
		setImageSrc(e);
	};
	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/albums/${params.id}/photos`)
			.then((res) => setPhotos(res.data))
			.catch((err) => sendNotify("error", "Une erreur est survenur", err));

		axios
			.get(`https://jsonplaceholder.typicode.com/albums/${params.id}`)
			.then((res) => setAlbumName(res.data.title))
			.catch((err) => sendNotify("error", "Une erreur est survenur", err));
	}, []);

	return (
		<>
			<div className="space-y-4">
				<div className="flex flex-row items-center justify-between w-full">
					<h1 className="truncate ">Album : {albumName}</h1>
				</div>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
					{photos.map((e) => {
						return (
							<div
								key={e.id}
								className="rounded-lg w-full overflow-hidden border border-neutral-200/60 bg-white text-neutral-700 shadow-sm sm:w-[380px]"
							>
								<div className="relative">
									<img src={e.thumbnailUrl} className="w-full h-auto" />
								</div>
								<div className="p-7">
									<h2 className="mb-2 text-lg font-bold leading-none tracking-tight">
										Titre de l'image
									</h2>
									<p className="mb-5 text-neutral-500">{e.title}</p>
									<button
										onClick={() => {
											getImageSrc(e.thumbnailUrl);
										}}
										className="inline-flex items-center justify-center w-full h-10 px-4 py-2 text-sm font-medium text-white transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-neutral-950 hover:bg-neutral-950/90"
									>
										Voir l'image
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			{displayImage && (
				<div className="fixed top-0 left-0 z-10 w-full h-screen bg-gray-200">
                <div className="p-2">
					<CloseIcon onclick={() => setDisplayImage(false)} size={"24"} />
                </div>
					<div className="flex flex-row items-center justify-center h-full">
						<img src={imageSrc} className="w-6/12 h-auto" />
					</div>
				</div>
			)}
		</>
	);
};

export default AlbumDetail;
