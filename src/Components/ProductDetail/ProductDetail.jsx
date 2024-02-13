import { XMarkIcon } from '@heroicons/react/20/solid';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import './styles.css';

const ProductDetail = () => {
	const context = useContext(ShoppingCartContext);
	return (
		<aside
			className={`${
				context.isProductDetailOpen ? 'flex' : 'hidden'
			} product-detail flex-col fixed bg-white right-0 dark:bg-[#050505] border border-black dark:border-white rounded-lg`}
		>
			<div className='flex justify-between items-center p-5'>
				<h2 className='font-medium text-xl'>Detail</h2>
				<div>
					<XMarkIcon className='h-6 w-6 text-black dark:text-white' />
				</div>
			</div>
		</aside>
	);
};

export default ProductDetail;
