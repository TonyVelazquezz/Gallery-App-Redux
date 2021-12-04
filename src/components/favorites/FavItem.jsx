import React from 'react';
import '../../pages/pexels/FavoritesPage.style.css';

const FavItem = ({ data }) => {
	return (
		<>
			{data?.src?.large !== undefined && (
				<img src={data?.src?.large} alt="favorite img" className="favorites-img" />
			)}

			{data?.image !== undefined && (
				<img src={data?.image} alt="favorite video" className="favorites-img" />
			)}
		</>
	);
};

export default FavItem;
