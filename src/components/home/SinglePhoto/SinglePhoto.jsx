import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './SinglePhoto.style.css';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';

//Actions
import { handleAddFavDataAction } from '../../../redux/actions/profile.action';

const SinglePhoto = ({ data, isFavData }) => {
	//Redux hook
	const dispatch = useDispatch();

	const handleAddFavData = () => {
		dispatch(handleAddFavDataAction(data, isFavData));
	};

	return (
		<div className="figure relative">
			<img src={data?.src.large} alt="image prev" className="figure__img" />

			<div className="figure__box absolute bg-transparent bottom-0 flex justify-between py-2 w-full">
				<a
					href={data?.photographer_url}
					target="_blank"
					className="top-2 pl-4 text-gray-200"
				>
					{data?.photographer}
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

SinglePhoto.propTypes = {
	isFavData: PropTypes.bool.isRequired,
};

export default SinglePhoto;
