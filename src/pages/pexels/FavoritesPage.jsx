import React from 'react';
import { useSelector } from 'react-redux';
import FavItem from '../../components/favorites/FavItem';
import './FavoritesPage.style.css';

const FavoritesPage = () => {
	const { favData } = useSelector(store => store.profile);
	// console.log(favData);

	return (
		<div className="favorites-container">
			<div className="h-screen relative w-full">
				{favData?.map(fav => (
					<FavItem key={fav.id} data={fav} />
				))}
			</div>
		</div>
	);
};

export default FavoritesPage;
