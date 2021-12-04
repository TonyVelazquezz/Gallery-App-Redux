import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
//Header
import Header from '../components/Header';
//Pages
import HomePage from '../pages/pexels/HomePage';
import ImagesPage from '../pages/pexels/ImagesPage';
import VideosPage from '../pages/pexels/VideosPage';
import FavoritesPage from '../pages/pexels/FavoritesPage';

export const PexelRouter = () => {
	return (
		<div>
			<Header />

			<Switch>
				<Route exact path="/home" component={HomePage} />
				<Route exact path="/images" component={ImagesPage} />
				<Route exact path="/videos" component={VideosPage} />
				<Route exact path="/favorites" component={FavoritesPage} />

				<Redirect to="/home" />
			</Switch>
		</div>
	);
};
