import React, { useEffect, useState } from 'react';
import ImageContainer from '../../components/home/ImageContainer/ImageContainer';

const HomePage = () => {
	//State
	const [data, setData] = useState([]);
	const [nextPage, setNextPage] = useState('');

	//Functions
	const KEY = import.meta.env.VITE_API_KEY;

	useEffect(() => {
		const query = ['nature', 'office', 'movies', 'animals', 'space'];
		const random = Math.floor(Math.random() * (query.length - 1)) + 1;
		const keyword = query[random];
		const handleFetchToken = async () => {
			const request = await fetch(
				`https://api.pexels.com/v1/search?query=${keyword}&per_page=30`,
				{
					headers: {
						Authorization: `${KEY}`,
					},
				}
			);
			const result = await request.json();
			setData(result.photos);
			setNextPage(result.next_page);
			// console.log(result);
		};
		handleFetchToken();
	}, []);

	const handleFetchDataNextPage = async () => {
		const request = await fetch(nextPage, {
			headers: {
				Authorization: `${KEY}`,
			},
		});
		const result = await request.json();
		setNextPage(result.next_page);
		setData([...data, ...result.photos]);
	};
	return (
		<div className="bg-gray-200 overflow-auto w-full">
			<ImageContainer
				data={data}
				title="Home"
				// handleFetchDataNextPage={handleFetchDataNextPage}
			/>
		</div>
	);
};

export default HomePage;
