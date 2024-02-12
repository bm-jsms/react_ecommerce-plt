import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import MyAccount from '../MyAccount/MyAccount';
import MyOrder from '../MyOrder/MyOrder';
import MyOrders from '../MyOrders/MyOrders';
import NotFound from '../NotFound/NotFount';
import SignIn from '../SignIn/SignIn';
import Navbar from '../../Components/Navbar/Navbar';

import { useState } from 'react';

const AppRoutes = () => {
	let routes = useRoutes([
		{
			path: '/',
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
		<BrowserRouter>
			<div className={darkMode && 'dark'}>
				<AppRoutes />
				<Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
			</div>
		</BrowserRouter>
	);
}

export default App;
