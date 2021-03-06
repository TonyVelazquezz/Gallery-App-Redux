import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import SingleVideo from './SingleVideo';

import '../ImageContainer/imageContainer.style.css';

const VideoContainer = ({ data }) => {
	// console.log(data);
	const { favData } = useSelector(store => store.profile);
	return (
		<>
			<div className="container">
				{data?.map(item => (
					<SingleVideo
						key={item.id}
						data={item}
						isFavData={favData.some(photo => photo.id === item.id)}
					/>
				))}
			</div>
		</>
	);
};

export default VideoContainer;
