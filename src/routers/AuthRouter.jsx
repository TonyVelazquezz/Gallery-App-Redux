import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
//Pages
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';

export const AuthRouter = () => {
	return (
		<div>
			<Switch>
				<Route exact path="/auth/login" component={LoginPage} />
				<Route exact path="/auth/register" component={RegisterPage} />

				<Redirect to="/auth/login" />
			</Switch>
		</div>
	);
};
