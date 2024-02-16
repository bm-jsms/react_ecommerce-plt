import { XMarkIcon } from '@heroicons/react/24/solid';

// eslint-disable-next-line react/prop-types
const OrderCard = ({ title, imageURL, price }) => {
	return (
		<div className='flex justify-between items-center'>
			<div className='flex items-center gap-2'>
				<figure className='w-20 h-20'>
					<img
						src={imageURL}
						alt={title}
						className='w-full h-full rounded-lg object-cover'
					/>
				</figure>
				<p className='text-sm font-normal'>{title} </p>
			</div>
			<div>
				<p className='text-lg font-medium'>{price}</p>
				<XMarkIcon className='h-6 w-6 cursor-pointer text-black dark:text-white' />
			</div>
		</div>
	);
};

export default OrderCard;
