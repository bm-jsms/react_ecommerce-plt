import { createContext } from 'react';
import { useState } from 'react';

export const ShoppingCartContext = createContext();

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({ children }) => {
	// Shoping Card Count
	const [count, setCount] = useState(0);

	// Products Detail . Open/Close
	const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
	const openProductDetail = () => setIsProductDetailOpen(true);
	const closeProductDetail = () => setIsProductDetailOpen(false);

	// Products Detail . Show Product
	const [productToShow, setProductToShow] = useState({});

	// Shoping . Add to Card
	const [cardProducts, setCardProducts] = useState([]);

	return (
		<ShoppingCartContext.Provider
			value={{
				count,
				setCount,
				openProductDetail,
				closeProductDetail,
				isProductDetailOpen,
				productToShow,
				setProductToShow,
				cardProducts,
				setCardProducts,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
};
