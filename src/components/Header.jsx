import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { SiPexels } from 'react-icons/si';
import loginForm from '../assets/loginForm.jpg';
import { logoutAction } from '../redux/actions/auth.action';

const Header = () => {
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logoutAction());
	};
	return (
		<header className="h-16 flex items-center shadow-md relative w-full">
			<img
				src={loginForm}
				alt="login-form-img"
				className="absolute object-cover object-center h-full w-full"
			/>

			<Link to="/home" className="pl-5 z-10">
				<SiPexels className="duration-300 text-main_violet text-4xl hover:text-dark_violet ease-in" />
			</Link>

			<ul className="flex flex-wrap font-semibold items-center justify-end gap-x-4 pr-6 text-white w-full z-10">
				<li>
					<NavLink exact to="/images" activeClassName="text-main_violet">
						Images
					</NavLink>
				</li>
				<li>
					<NavLink exact to="/videos" activeClassName="text-main_violet">
						Videos
					</NavLink>
				</li>
				<li>
					<NavLink exact to="/favorites" activeClassName="text-main_violet">
						Favorites
					</NavLink>
				</li>
				<li>
					<button onClick={handleLogout} className="btn_log">
						Logout
					</button>
				</li>
			</ul>
		</header>
	);
};

export default Header;
