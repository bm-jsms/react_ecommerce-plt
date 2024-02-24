import LayoutC from '../../Components/Layout/Layout';
import { Card } from '../../Components/Card/Card';
import { useContext } from 'react';
import ProductDetail from '../../Components/ProductDetail/ProductDetail';
import { ShoppingCartContext } from '../../Context';

const Home = () => {
	const context = useContext(ShoppingCartContext);

	return (
		<LayoutC>
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
