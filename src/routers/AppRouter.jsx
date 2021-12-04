import React, { useEffect, useState } from 'react';
//React-Router-DOM
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
//Routes
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { PexelRouter } from './PexelRouter';
//Redux
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/auth.action';
//Firebase
import { auth } from '../firebase/firebase.config';
//Loader
import BarLoader from 'react-spinners/BarLoader';

export const AppRouter = () => {
	const dispatch = useDispatch();

	const [loader, setLoader] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		auth.onAuthStateChanged(user => {
			if (user?.uid) {
				const { uid, displayName } = user;
				dispatch(login(uid, displayName));
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}

			setLoader(false);
		});
	}, [setLoader, setIsLoggedIn]);

	if (loader) {
		return (
			<div className="flex items-center justify-center h-screen w-full">
				<BarLoader color={'#7b2cbf'} width={150} height={10} />
			</div>
		);
	}
	return (
		<Router>
			<div>
				<Switch>
					<PublicRoute
						path="/auth"
						component={AuthRouter}
						isAuthenticated={isLoggedIn}
					/>

					<PrivateRoute
						path="/"
						component={PexelRouter}
						isAuthenticated={isLoggedIn}
					/>

					<Redirect to="/auth/login" />
				</Switch>
			</div>
		</Router>
	);
};
