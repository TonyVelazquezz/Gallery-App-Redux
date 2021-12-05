import React from 'react';
import '../../pages/pexels/FavoritesPage.style.css';
import '../ImageContainer/ImageContainer.style.css';

const FavItem = ({ data }) => {
	return (
		<div className="figure">
			{data?.src?.large !== undefined && (
				<img src={data?.src?.large} alt="favorite img" className="figure__img" />
			)}

			{data?.image !== undefined && (
				<img src={data?.image} alt="favorite video" className="figure__img" />
			)}
		</div>
	);
};

export default FavItem;
