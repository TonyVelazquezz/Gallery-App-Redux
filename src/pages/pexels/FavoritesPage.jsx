import React from 'react';
import { useSelector } from 'react-redux';
import FavItem from '../../components/favorites/FavItem';
import '../../components/ImageContainer/imageContainer.style.css';

const FavoritesPage = () => {
	const { favData } = useSelector(store => store.profile);
	// console.log(favData);

	return (
		<div className="pt-5 px-2 pb-5 w-full">
			<div className="container">
				{favData?.map(fav => (
					<FavItem key={fav.id} data={fav} />
				))}
			</div>
		</div>
	);
};

export default FavoritesPage;
