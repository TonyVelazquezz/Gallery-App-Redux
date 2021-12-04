import React from 'react';
import { Link } from 'react-router-dom';
import loginForm from '../../assets/loginForm.jpg';
import { ImGooglePlus } from 'react-icons/im';

const FormLogin = ({
	email,
	password,
	handleGoogleLogin,
	handleEmailLogin,
	handleInputChange,
}) => {
	return (
		<div className="flex items-center justify-center h-screen w-full ">
			<div className="flex h-2/3 md:w-2/3 w-11/12">
				<div className="relative w-1/2">
					<img
						src={loginForm}
						alt="login-form-img"
						className="absolute object-cover object-left h-full"
					/>

					<button
						onClick={handleGoogleLogin}
						className="btn_firebase absolute bottom-24 left-[47.5%]"
					>
						<ImGooglePlus className="text-red-500" size={25} />
					</button>

					<h3 className="absolute bottom-10 left-0 text-center text-white w-full">
						Don't have an account?
					</h3>

					<Link
						to="/auth/register"
						className="absolute bottom-5 duration-300 font-bold hover:text-main_violet left-0 text-center ease-in underline text-white w-full"
					>
						Sign Up
					</Link>
				</div>

				<div className="bg-white flex flex-wrap items-center justify-center p-3 overflow-y-auto rounded-sm shadow w-1/2">
					<div className="flex flex-wrap justify-content w-full">
						<h2 className="text-3xl text-center pb-5 w-full">
							Welcome to Gallery App
						</h2>
						<p className="font-bold py-5 text-center mx-auto lg:w-1/2 w-full">
							Enter with your Gallery App account
						</p>
					</div>

					<form
						onSubmit={handleEmailLogin}
						className="flex flex-wrap items-center justify-center w-full"
					>
						<input
							type="text"
							placeholder="Email"
							name="email"
							className="bg-gray-200 mb-3 rounded-sm outline-none px-3 py-1.5 shadow sm:w-3/4 w-full"
							autoComplete="off"
							value={email}
							onChange={handleInputChange}
						/>

						<input
							type="password"
							placeholder="Password"
							name="password"
							className="bg-gray-200 mb-3 rounded-sm outline-none px-3 py-1.5 shadow sm:w-3/4 w-full"
							value={password}
							onChange={handleInputChange}
						/>

						<button type="submit" className="btn sm:w-3/4 w-full">
							Login
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default FormLogin;
