import React from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { handleAddFavDataAction } from '../../../redux/actions/profile.action';
import './SingleVideo.style.css';

const SingleVideo = ({ data, isFavData }) => {
	//Redux hook
	const dispatch = useDispatch();

	const handleAddFavData = () => {
		dispatch(handleAddFavDataAction(data, isFavData));
	};

	return (
		<div className="single-video relative">
			<img src={data?.image} alt="video prev" className="single-video__img" />

			<div className="single-video__box absolute bg-transparent bottom-0 flex justify-between py-2 w-full">
				<a
					href={data?.user.url}
					target="_blank"
					className="top-2 pl-4 text-gray-200"
				>
					{data?.user.name}
				</a>

				{!isFavData ? (
					<AiOutlineHeart
						className="text-white mr-4 cursor-pointer"
						onClick={handleAddFavData}
					/>
				) : (
					<AiFillHeart
						className="text-main_violet mr-4 cursor-pointer"
						onClick={handleAddFavData}
					/>
				)}
			</div>
		</div>
	);
};

export default SingleVideo;
