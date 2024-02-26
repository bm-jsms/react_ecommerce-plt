import { NavLink } from 'react-router-dom';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { ShoppingBagIcon } from '@heroicons/react/20/solid';

// eslint-disable-next-line react/prop-types
const Navbar = ({ darkMode, setDarkMode }) => {
	const context = useContext(ShoppingCartContext);
	let activeStyle = 'underline underline-offset-4 underline-black/60';
	return (
		<nav className='flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-normal bg-blue-300 dark:bg-black text-black dark:text-white/90'>
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
						onClick={() => context.setSearchByCategory()}
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						All
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/clothes'
						onClick={() => context.setSearchByCategory('clothes')}
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Clothes
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/electronics'
						onClick={() => context.setSearchByCategory('electronics')}
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Electronics
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/furnitures'
						onClick={() => context.setSearchByCategory('furnitures')}
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Furnitures
					</NavLink>
				</li>
				<li>
					<NavLink
						to='/toys'
						onClick={() => context.setSearchByCategory('toys')}
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Toys
					</NavLink>
				</li>

				<li>
					<NavLink
						to='/others'
						onClick={() => context.setSearchByCategory('others')}
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
				<li className='flex items-center'>
					<NavLink
						to='/furniture'
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						<ShoppingBagIcon className='h-6 w-6'></ShoppingBagIcon>
					</NavLink>
					<div>{context.count}</div>
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
