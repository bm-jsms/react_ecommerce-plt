import LayoutC from '../../Components/Layout/Layout';
import OrdersCard from '../../Components/OrdersCard/OrdersCard';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { Link } from 'react-router-dom';

const MyOrders = () => {
	const context = useContext(ShoppingCartContext);

	return (
		<LayoutC>
			<div className='flex w-80 items-center relative justify-center mb-4'>
				<h1 className='font-medium text-xl'>My Orders</h1>
			</div>
			{context.order.map((order, index) => (
				<Link key={index} to={`/my-orders/${index}`}>
					<OrdersCard
						totalPrice={order.totalPrice}
						totalProducts={order.totalProducts}
					/>
				</Link>
			))}
		</LayoutC>
	);
};

export default MyOrders;
