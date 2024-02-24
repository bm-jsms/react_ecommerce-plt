import LayoutC from '../../Components/Layout/Layout';
import { Card } from '../../Components/Card/Card';
import { useContext } from 'react';
import ProductDetail from '../../Components/ProductDetail/ProductDetail';
import { ShoppingCartContext } from '../../Context';

const Home = () => {
	const context = useContext(ShoppingCartContext);

	return (
		<LayoutC>
			<div className='flex w-80 items-center relative justify-center mb-4'>
				<h1 className='font-medium text-xl'>Exclusive Products</h1>
			</div>

			<input
				type='text'
				placeholder='Search Product'
				className='w-80 h-10 border border-black rounded-lg p-2 mb-4 text-black dark:text-white dark:bg-[#050505] focus:outline-none'
				onChange={e => context.setSearchByTitle(e.target.value)}
			/>

			<div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
				{context.items.map(item => (
					<Card key={item.id} data={item} />
				))}
			</div>
			<ProductDetail />
		</LayoutC>
	);
};

export default Home;
