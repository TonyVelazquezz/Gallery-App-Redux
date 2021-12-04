import { auth, googleProvider } from '../../firebase/firebase.config';
import {
	signOut,
	updateProfile,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from 'firebase/auth';

import { types } from '../types/auth.types';

export const emailAndPasswordLoginAction = (email, password) => {
	return dispatch => {
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				console.log(user);
				const { uid, displayName } = user;
				dispatch(login(uid, displayName));
			})
			.catch(error => {
				console.log(error);
			});
	};
};

export const googleLoginAction = () => {
	return dispatch => {
		signInWithPopup(auth, googleProvider)
			.then(({ user }) => {
				console.log(user);
				const { uid, displayName } = user;
				dispatch(login(uid, displayName));
			})
			.catch(error => {
				console.log(error);
			});
	};
};

export const registerAction = (name, email, password) => {
	return dispatch => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(async ({ user }) => {
				await updateProfile(auth.currentUser, { displayName: name });
				const { uid, displayName } = user;
				dispatch(login(uid, displayName));
			})
			.catch(error => {
				console.log(error);
			});
	};
};

export const login = (uid, displayName) => ({
	type: types.LOGIN,
	payload: { uid, displayName },
});

export const logoutAction = () => async dispatch => {
	await signOut(auth);
	dispatch(logout());
};

export const logout = () => ({
	type: types.LOGOUT,
});
