import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import MyAccount from '../MyAccount/MyAccount';
import MyOrder from '../MyOrder/MyOrder';
import MyOrders from '../MyOrders/MyOrders';
import NotFound from '../NotFound/NotFount';
import SignIn from '../SignIn/SignIn';
import Navbar from '../../Components/Navbar/Navbar';

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
	return (
		<BrowserRouter>
			<AppRoutes />
			<Navbar />
		</BrowserRouter>
	);
}

export default App;
