import React from 'react';
import FormLogin from '../../components/custom/FormLogin';
import { useDispatch } from 'react-redux';
import useForm from '../../hooks/useForm';
import {
	googleLoginAction,
	emailAndPasswordLoginAction,
} from '../../redux/actions/auth.action';
import loginBg from '../../assets/loginBg.jpg';
import validator from 'validator';

const LoginPage = () => {
	const dispatch = useDispatch();

	const [formValues, handleInputChange] = useForm({
		email: '',
		password: '',
	});

	const { email, password } = formValues;

	const handleGoogleLogin = () => {
		dispatch(googleLoginAction());
	};

	const handleEmailLogin = e => {
		e.preventDefault();
		if (isUserValid()) {
			dispatch(emailAndPasswordLoginAction(email, password));
		}
	};

	const isUserValid = () => {
		if (!validator.isEmail(email)) {
			console.log('Email is not valid');
			return false;
		} else if (password.length < 6) {
			console.log('Password should be at least 6 characters and match each other');
			return false;
		}
		return true;
	};

	return (
		<div className="h-screen relative w-full">
			<img
				src={loginBg}
				alt="login-bg"
				className="absolute h-full object-cover object-center overflow-auto w-full z-[-1]"
			/>

			<FormLogin
				email={email}
				password={password}
				handleGoogleLogin={handleGoogleLogin}
				handleInputChange={handleInputChange}
				handleEmailLogin={handleEmailLogin}
			/>
		</div>
	);
};

export default LoginPage;
