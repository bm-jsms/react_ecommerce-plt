import { ChevronRightIcon } from '@heroicons/react/24/solid';

// eslint-disable-next-line react/prop-types
const OrdersCard = ({ totalPrice, totalProducts }) => {
	return (
		<div className='flex justify-between items-center text-black dark:text-white border border-black w-80 p-4 rounded-lg mb-4 dark:bg-slate-900 bg-gray-300 hover:scale-110 duration-300'>
			<div className='flex justify-between w-full'>
				<p className='flex flex-col'>
					<span className='font-normal'>01.01.2024</span>
					<span className='font-normal'>{totalProducts}articles</span>
				</p>
				<p className='flex items-center gap-2'>
					<span className='font-medium text-2xl'>${totalPrice}</span>
					<ChevronRightIcon className='h-6 w-6 text-black dark:text-white cursor-pointer' />
				</p>
			</div>
		</div>
	);
};

export default OrdersCard;
