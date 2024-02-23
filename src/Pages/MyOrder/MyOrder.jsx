import LayoutC from '../../Components/Layout/Layout';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context/index';
import OrderCard from '../../Components/OrderCard/OrderCard';

const MyOrder = () => {
	const context = useContext(ShoppingCartContext);
	return (
		<LayoutC>
			My Order
			<div className='flex flex-col w-80'>
				{context.order?.slice(-1)[0].products.map(product => (
					<OrderCard
						key={product.id}
						id={product.id}
						title={product.title}
						imageURL={product.images}
						price={product.price}
					/>
				))}
			</div>
		</LayoutC>
	);
};

export default MyOrder;
