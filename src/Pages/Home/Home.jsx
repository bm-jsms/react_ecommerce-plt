import LayoutC from '../../Components/Layout/Layout';
import { Card } from '../../Components/Card/Card';
import { useState, useEffect } from 'react';

const Home = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch('https://api.escuelajs.co/api/v1/products')
			.then(response => response.json())
			.then(data => setItems(data));
	});
	return (
		<LayoutC>
			<div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
				{items.map(item => (
					<Card key={item.id} data={item} />
				))}
			</div>
		</LayoutC>
	);
};

export default Home;
