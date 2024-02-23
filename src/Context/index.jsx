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

	// CheckoutSideMenu . Open/Close
	const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
	const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
	const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

	// Products Detail . Show Product
	const [productToShow, setProductToShow] = useState({});

	// Shoping . Add to Card
	const [cardProducts, setCardProducts] = useState([]);

	// Shoping . Order
	const [order, setOrder] = useState([]);

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
				isCheckoutSideMenuOpen,
				openCheckoutSideMenu,
				closeCheckoutSideMenu,
				order,
				setOrder,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
};
