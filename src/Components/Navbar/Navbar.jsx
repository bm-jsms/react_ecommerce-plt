import { NavLink } from 'react-router-dom';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

// eslint-disable-next-line react/prop-types
const Navbar = ({ darkMode, setDarkMode }) => {
	let activeStyle = 'underline underline-offset-4 underline-black/60';
	return (
		<nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-normal bg-blue-400/55 dark:bg-black/95 text-black dark:text-white/90'>
			<ul className='flex items-center gap-3'>
				<li className='font-semibold text-lg'>
					<NavLink
						to='/'
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Shopi
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/'
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						All
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/clothes'
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Clothes
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/electronics'
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Electronics
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/furnitures'
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Furnitures
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/toys'
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Toys
					</NavLink>
				</li>

				<li>
					<NavLink
						to='/others'
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Others
					</NavLink>
				</li>
			</ul>
			<ul className='flex items-center gap-3'>
				<li className='text-black/70 dark:text-white/50'>email@email.com</li>
				<li>
					<NavLink
						to='/all'
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						All
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/my-orders'
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						My Orders
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/my-account'
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						My Acoount
					</NavLink>
				</li>

				<li>
					<NavLink
						to='/sign-in'
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Sign In{' '}
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/furniture'
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						🛒0
					</NavLink>
				</li>
				<li
					onClick={() => {
						setDarkMode(!darkMode);
					}}
					className='p-2 rounded-full dark:bg-blue-600/40 bg-gray-900 transition-all'
				>
					{darkMode ? (
						<MdLightMode className='text-lg cursor-pointer text-yellow-500' />
					) : (
						<MdDarkMode className='text-lg cursor-pointer text-blue-600' />
					)}
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
