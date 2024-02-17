import { XMarkIcon } from '@heroicons/react/20/solid';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard/OrderCard';
import './styles.css';

const CheckoutSideMenu = () => {
	const context = useContext(ShoppingCartContext);
	return (
		<aside
			className={`${
				context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'
			} checkout-side-menu flex-col fixed bg-white right-0 dark:bg-[#050505] border border-black dark:border-white rounded-lg overflow-scroll`}
		>
			<div className='flex justify-between items-center p-5'>
				<h2 className='font-medium text-xl dark:text-white'>My Order</h2>
				<div>
					<XMarkIcon
						className='h-6 w-6 text-black dark:text-white cursor-pointer hover:text-red-500 dark:hover:text-red-500 hover:scale-125 hover:duration-150'
						onClick={context.closeCheckoutSideMenu}
					/>
				</div>
			</div>
			{context.cardProducts.map(product => (
				<OrderCard
					key={product.id}
					title={product.title}
					imageURL={product.images}
					price={product.price}
				/>
			))}
		</aside>
	);
};

export default CheckoutSideMenu;
