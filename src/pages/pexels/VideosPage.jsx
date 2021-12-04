import React, { useState } from 'react';
import FormSearch from '../../components/custom/FormSearch';
import VideoContainer from '../../components/videos/VideoContainer/VideoContainer';

const VideosPage = () => {
	const [videos, setVideos] = useState('');
	const [data, setData] = useState(null);

	//Funcion
	const handleKeyword = ({ value }) => setVideos(value);
	const handleSearchData = async e => {
		e.preventDefault();
		const request = await fetch(
			`https://api.pexels.com/videos/search?query=${videos}&per_page=20`,
			{
				headers: {
					Authorization: '563492ad6f917000010000014a76ca74704d41e9b50df0fbdb677b24',
				},
			}
		);
		const result = await request.json();
		setData(result);
	};

	return (
		<div className="m-auto px-2 pb-5 sm:w-3/4 w-full">
			<FormSearch
				handleKeyword={handleKeyword}
				handleSearchData={handleSearchData}
				placeHolder="Search video by keyboard"
			/>

			<VideoContainer data={data?.videos} title="Imágenes" />
		</div>
	);
};

export default VideosPage;
