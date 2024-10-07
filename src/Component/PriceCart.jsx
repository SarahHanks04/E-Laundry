import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
import CartIcon from "./CartIcon"; 
import Modal from "react-modal"; 

// Set the app element for accessibility
Modal.setAppElement("#root");

const PriceCart = ({ cartItems, setCartItems }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8; // Number of products per page
  const [searchTerm, setSearchTerm] = useState(""); // Search term state

  // Load cart items from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart).map((item) => ({
          ...item,
          quantity: item.quantity || 1, // Ensure quantity is at least 1
        }));
        setCartItems(parsedCart);
      } catch (e) {
        console.error("Failed to parse cart items from localStorage:", e);
        setCartItems([]);
      }
    }
  }, [setCartItems]);

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Filtered products based on search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Optional: Scroll to top on page change
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );
    if (existingItemIndex !== -1) {
      // Item already in cart, increase quantity
      const updatedCart = cartItems.map((item, index) =>
        index === existingItemIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCart);
    } else {
      // Add new item with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  if (loading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-20 text-red-500">Error: {error}</div>;
  }

  return (
    <div
      className="cart-page-container p-4 sm:p-8 bg-gray-50 mt-20 min-h-screen"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <header className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-0">
          Services & Prices
        </h1>

        {/* Search Input */}
        <div className="w-full sm:w-1/3 relative mb-4 sm:mb-0">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to first page on search
            }}
            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* Search Icon */}
          <svg
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
            />
          </svg>
        </div>

        {/* Cart Icon */}
        <CartIcon
          cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        />
      </header>

      {filteredProducts.length === 0 ? (
        <div className="text-center mt-10 text-gray-600">
          No products found.
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentProducts.map((product, index) => (
              <div
                key={product.id || `${product.id}-${index}`}
                className="p-4 rounded-lg shadow-lg bg-white text-center flex flex-col"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="mx-auto mb-4 w-40 h-40 object-cover rounded"
                />
                <h3 className="text-lg font-semibold text-navy">
                  {product.title}
                </h3>
                <p className="mt-2 text-gray-600">Price: ₦ {product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition duration-200"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination mt-8 flex justify-center flex-wrap">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (number) => (
                  <button
                    key={number}
                    onClick={() => handlePageChange(number)}
                    className={`mx-1 mb-2 px-4 py-2 ${
                      currentPage === number
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    } rounded-full transition duration-200`}
                  >
                    {number}
                  </button>
                )
              )}
            </div>
          )}
        </>
      )}

    </div>
  );
};

export default PriceCart;
