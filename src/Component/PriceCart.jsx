// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";

// const PriceCart = ({ cartItems, setCartItems }) => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 8; // Number of products per page
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = products.slice(
//     indexOfFirstProduct,
//     indexOfLastProduct
//   );
//   const totalPages = Math.ceil(products.length / productsPerPage);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("https://dummyjson.com/products");
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setProducts(data.products);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const addToCart = (product) => {
//     setCartItems([...cartItems, product]);
//   };

//   if (loading) {
//     return <div className="text-center mt-[5rem]">Loading...</div>;
//   }

//   if (error) {
//     return (
//       <div className="text-center mt-[5rem] text-red-500">Error: {error}</div>
//     );
//   }

//   return (
//     <div
//       className="cart-page-container p-8 bg-gray-50 mt-[5rem]"
//       data-aos="fade-up"
//       data-aos-delay="300"
//     >
//       <header className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold mx-auto">Services & Prices</h1>

//         <input type="text" name="search" id="search" />

//         <NavLink to="/cart-items" className="relative">
//           <span className="text-[24px]"> &#x1F6D2;</span>
//           <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full h-3 w-3 flex items-center justify-center">
//             {cartItems.length}
//           </span>
//         </NavLink>
//       </header>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {currentProducts.map((product, index) => (
//           <div
//             key={product.id || `${product.id}-${index}`}
//             className="p-4 rounded-lg shadow-lg bg-white text-center"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             <img
//               src={product.thumbnail}
//               alt={product.title}
//               className="mx-auto mb-4 w-40 h-40 object-cover"
//             />
//             <h3 className="text-lg font-semibold text-navy">{product.title}</h3>{" "}
//             <p className="mt-2 text-gray-600">Price: &#8358; {product.price}</p>
//             <button
//               onClick={() => addToCart(product)}
//               className="mt-4 bg-blue-950 text-white px-6 py-2 rounded-full"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       <div className="pagination mt-8 flex justify-center flex-wrap">
//         {[...Array(totalPages).keys()].map((number) => (
//           <button
//             key={number + 1}
//             onClick={() => handlePageChange(number + 1)}
//             className={`mx-1 px-4 py-2 ${
//               currentPage === number + 1
//                 ? "bg-blue-950 text-white"
//                 : "bg-gray-200 text-gray-700"
//             } rounded-full`}
//           >
//             {number + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );

// };

// export default PriceCart;

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const PriceCart = ({ cartItems, setCartItems }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8; // Number of products per page
  const [searchTerm, setSearchTerm] = useState(""); // Search term state

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
    setCartItems([...cartItems, product]);
  };

  if (loading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-20 text-red-500">Error: {error}</div>;
  }

  return (
    <div
      className="cart-page-container p-4 sm:p-8 bg-gray-50 mt-20"
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
          {/* Optional: Add a search icon inside the input */}
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

        <NavLink to="/cart-items" className="relative">
          <span className="text-2xl sm:text-3xl">🛒</span>
          <span className="absolute top-0 right-0 bg-red-600 text-white text-xs sm:text-sm rounded-full h-3 sm:h-4 w-3 sm:w-4 flex items-center justify-center">
            {cartItems.length}
          </span>
        </NavLink>
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
                className="p-4 rounded-lg shadow-lg bg-white text-center"
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
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition duration-200"
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
