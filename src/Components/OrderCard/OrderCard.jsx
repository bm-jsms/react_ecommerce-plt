import { XMarkIcon } from '@heroicons/react/24/solid';

// eslint-disable-next-line react/prop-types
const OrderCard = ({ id, title, imageURL, price, handleDelete }) => {
	let renderXMarkIcon;
	if (handleDelete) {
		renderXMarkIcon = (
			<XMarkIcon
				className='h-6 w-6 cursor-pointer hover:scale-125 hover:text-red-500 dark:hover:text-red-500 duration-150'
				onClick={() => handleDelete(id)}
			/>
		);
	}
	return (
		<div className='flex justify-between items-center text-black dark:text-white mb-2'>
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
			<div className='flex items-center gap-2'>
				<p className='text-lg font-medium'>${price}</p>
				{renderXMarkIcon}
			</div>
		</div>
	);
};

export default OrderCard;
