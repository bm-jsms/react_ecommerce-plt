import { createContext } from 'react';
import { useState, useEffect } from 'react';

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

	// Get Products
	const [items, setItems] = useState([]);

	const [filteredItems, setFilteredItems] = useState(null);

	// Get Products by Title
	const [searchByTitle, setSearchByTitle] = useState(null);

	// Get Products by Category
	const [searchByCategory, setSearchByCategory] = useState(null);

	useEffect(() => {
		fetch('https://api.escuelajs.co/api/v1/products')
			.then(response => response.json())
			.then(data => setItems(data));
	}, []);

	const filteredItemsByTitle = (items, searchByTitle) => {
		return items?.filter(item =>
			item.title.toLowerCase().includes(searchByTitle.toLowerCase()),
		);
	};

	const filteredItemsByCategory = (items, searchByCategory) => {
		return items?.filter(item =>
			item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()),
		);
	};

	const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
		if (searchType === 'BY_TITLE') {
			return filteredItemsByTitle(items, searchByTitle);
		}
		if (searchType === 'BY_CATEGORY') {
			return filteredItemsByCategory(items, searchByCategory);
		}
		if (searchType === 'BY_TITLE_AND_CATEGORY') {
			return filteredItemsByCategory(items, searchByTitle).filter(item =>
				item.title.toLowerCase().includes(searchByTitle.toLowerCase()),
			);
		}
		if (!searchByTitle) {
			return items;
		}
	};

	useEffect(() => {
		if (searchByTitle && !searchByCategory) {
			setFilteredItems(
				filterBy('BY_TITLE', items, searchByTitle, searchByCategory),
			);
		}

		if (searchByCategory && !searchByTitle) {
			setFilteredItems(
				filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory),
			);
		}

		if (!searchByTitle && !searchByCategory) {
			setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory));
		}

		if (searchByTitle && searchByCategory) {
			setFilteredItems(
				filterBy(
					'BY_TITLE_AND_CATEGORY',
					items,
					searchByTitle,
					searchByCategory,
				),
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [items, searchByTitle, searchByCategory]);

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
				items,
				setItems,
				searchByTitle,
				setSearchByTitle,
				filteredItems,
				setFilteredItems,
				searchByCategory,
				setSearchByCategory,
			}}
		>
			{children}
		</ShoppingCartContext.Provider>
	);
};
