import { XMarkIcon } from '@heroicons/react/24/solid';

// eslint-disable-next-line react/prop-types
const OrdersCard = ({ totalPrice, totalProducts }) => {
	return (
		<div className='flex justify-between items-center text-black dark:text-white mb-2 border border-black'>
			<p>
				<span>01.01.2024</span>
				<span>{totalProducts}</span>
				<span>{totalPrice}</span>
			</p>
		</div>
	);
};

export default OrdersCard;
