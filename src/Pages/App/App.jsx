import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../Context';
import Home from '../Home/Home';
import MyAccount from '../MyAccount/MyAccount';
import MyOrder from '../MyOrder/MyOrder';
import MyOrders from '../MyOrders/MyOrders';
import NotFound from '../NotFound/NotFount';
import SignIn from '../SignIn/SignIn';
import Navbar from '../../Components/Navbar/Navbar';
import CheckoutSideMenu from '../../Components/CheckoutSideMenu/CheckoutSideMenu';

import { useState } from 'react';

const AppRoutes = () => {
	let routes = useRoutes([
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '/clothes',
			element: <Home />,
		},
		{
			path: '/electronics',
			element: <Home />,
		},
		{
			path: '/furnitures',
			element: <Home />,
		},
		{
			path: '/toys',
			element: <Home />,
		},
		{
			path: '/others',
			element: <Home />,
		},
		{
			path: '/my-account',
			element: <MyAccount />,
		},
		{
			path: '/my-order',
			element: <MyOrder />,
		},
		{
			path: '/my-orders',
			element: <MyOrders />,
		},
		{
			path: '/my-orders/last',
			element: <MyOrder />,
		},
		{
			path: '/my-orders/:id',
			element: <MyOrder />,
		},
		{
			path: '/sign-in',
			element: <SignIn />,
		},
		{
			path: '*',
			element: <NotFound />,
		},
	]);
	return routes;
};
function App() {
	const [darkMode, setDarkMode] = useState(true);

	return (
		<ShoppingCartProvider>
			<BrowserRouter>
				<div className={darkMode && 'dark'}>
					<AppRoutes />
					<Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
					<CheckoutSideMenu />
				</div>
			</BrowserRouter>
		</ShoppingCartProvider>
	);
}

export default App;
