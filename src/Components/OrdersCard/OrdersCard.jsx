// eslint-disable-next-line react/prop-types
const OrdersCard = ({ totalPrice, totalProducts }) => {
	return (
		<div className='flex justify-between items-center text-black dark:text-white border border-black w-80 p-4 rounded-lg mb-4'>
			<p className='flex justify-between'>
				<div className='flex flex-col'>
					<span className='font-normal'>01.01.2024</span>
					<span className='font-normal'>{totalProducts}articles</span>
				</div>
				<span className='font-medium text-2xl'>${totalPrice}</span>
			</p>
		</div>
	);
};

export default OrdersCard;
