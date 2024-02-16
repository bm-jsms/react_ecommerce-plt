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
					<XMarkIcon
						className='h-6 w-6 text-black dark:text-white cursor-pointer hover:text-red-500 dark:hover:text-red-500 hover:scale-125 hover:duration-150'
						onClick={context.closeProductDetail}
					/>
				</div>
			</div>
			<figure className='px-6'>
				<img
					className='w-full h-full rounded-lg'
					src={context.productToShow.images}
					alt={context.productToShow.title}
				/>
			</figure>
			<p className='flex flex-col p-6'>
				<span className='font-medium text-2xl mb-2'>
					${context.productToShow.price}
				</span>
				<span className='font-medium text-lg'>
					${context.productToShow.title}
				</span>
				<span className='font-light text-sm'>
					${context.productToShow.description}
				</span>
			</p>
		</aside>
	);
};

export default ProductDetail;
