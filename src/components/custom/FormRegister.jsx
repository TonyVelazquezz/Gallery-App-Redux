import React from 'react';
import loginForm from '../../assets/loginForm.jpg';

const FormRegister = ({
	name,
	email,
	password,
	password2,
	handleRegister,
	handleInputChange,
}) => {
	return (
		<div className="flex items-center justify-center my-2 h-full w-full ">
			<div className="flex justify-end items-center relative sm:w-2/3 w-[95%]">
				<img
					src={loginForm}
					alt="login-form-img"
					className="absolute object-cover h-full w-full z-[-1]"
				/>

				<div className="bg-white flex flex-wrap p-3 shadow md:w-1/2 w-9/12">
					<div className="flex flex-wrap justify-content w-full">
						<h2 className="text-3xl text-center pb-5 w-full">Sing Up</h2>
						<p className="font-bold pb-5 text-center mx-auto lg:w-1/2 w-full">
							Create your account, it's free and only takes a minutes
						</p>
					</div>

					<form
						onSubmit={handleRegister}
						className="flex flex-wrap items-center justify-center w-full"
					>
						<input
							type="text"
							placeholder="Name"
							name="name"
							className="bg-gray-200 block mb-3 rounded-sm outline-none px-3 py-1.5 shadow sm:w-3/4 w-full"
							autoComplete="off"
							value={name}
							onChange={handleInputChange}
						/>

						<input
							type="text"
							placeholder="Email"
							name="email"
							className="bg-gray-200 block mb-3 rounded-sm outline-none px-3 py-1.5 shadow sm:w-3/4 w-full"
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

						<input
							type="password"
							placeholder="Confirm password"
							name="password2"
							className="bg-gray-200 mb-3 rounded-sm outline-none px-3 py-1.5 shadow sm:w-3/4 w-full"
							value={password2}
							onChange={handleInputChange}
						/>

						<button type="submit" className="btn sm:w-3/4 w-full">
							Register
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default FormRegister;
