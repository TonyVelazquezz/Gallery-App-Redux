import React from 'react';
import validator from 'validator';

import useForm from '../../hooks/useForm';
import loginBg from '../../assets/loginBg.jpg';
import FormRegister from '../../components/custom/FormRegister';
import { useDispatch } from 'react-redux';
import { registerAction } from '../../redux/actions/auth.action';

const RegisterPage = () => {
	const dispatch = useDispatch();

	const [formValues, handleInputChange] = useForm({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, email, password, password2 } = formValues;

	const handleRegister = e => {
		e.preventDefault();

		if (isFormValid()) {
			dispatch(registerAction(name, email, password));
		}
	};

	const isFormValid = () => {
		if (name.trim().length === 0) {
			console.log('Name is required');
			return false;
		} else if (!validator.isEmail(email)) {
			console.log('Email is not valid');
			return false;
		} else if (password !== password2 || password.length < 6) {
			console.log('Password should be at least 6 characters and match each other');
			return false;
		}
		return true;
	};

	return (
		<div className="h-screen overflow-auto w-full">
			<img
				src={loginBg}
				alt="login-bg"
				className="absolute h-full object-cover object-center overflow-auto w-full z-[-1]"
			/>

			<FormRegister
				name={name}
				email={email}
				password={password}
				password2={password2}
				handleRegister={handleRegister}
				handleInputChange={handleInputChange}
			/>
		</div>
	);
};

export default RegisterPage;
