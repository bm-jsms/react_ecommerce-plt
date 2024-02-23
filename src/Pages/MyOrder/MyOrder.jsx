import LayoutC from '../../Components/Layout/Layout';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context/index';
import OrderCard from '../../Components/OrderCard/OrderCard';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const MyOrder = () => {
	const context = useContext(ShoppingCartContext);
	const currentPath = window.location.pathname;
	let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);

	if (index === 'last') index = context.order?.length - 1;

	return (
		<LayoutC>
			<div className='flex w-80 items-center relative justify-center'>
				<Link to='/my-orders' className='absolute left-0'>
					<ChevronLeftIcon className='h-6 w-6 text-black dark:text-white cursor-pointer' />
				</Link>
				<h1>My Order</h1>
			</div>
			<div className='flex flex-col w-80'>
				{context.order?.[index]?.products.map(product => (
					<OrderCard
						key={product.id}
						id={product.id}
						title={product.title}
						imageURL={product.images}
						price={product.price}
					/>
				))}
			</div>
		</LayoutC>
	);
};

export default MyOrder;
