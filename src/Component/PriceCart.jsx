// import React from "react";
// import { FaShoppingCart } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
// import Service1 from "../assets/Service1 (2).png";
// import Service2 from "../assets/Service2 (2).png";
// import Service3 from "../assets/Service3.png";

// const PriceCart = ({ cartItems, setCartItems }) => {

//   // Example products
//   const products = [
//     {
//       id: 1,
//       image: Service1,
//       name: "Wash & Iron Service",
//       price: "3,500",
//     },
//     {
//       id: 2,
//       image: Service2,
//       name: "Dry Cleaning Service",
//       price: "7,000",
//     },
//     {
//       id: 3,
//       image: Service3,
//       name: "Laundry Service",
//       price: "5,000",
//     },
//   ];

//   const addToCart = (product) => {
//     setCartItems([...cartItems, product]);
//   };

//   return (
//     <div className="cart-page-container p-8 bg-gray-50 mt-[5rem]">
//       <header className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold mx-auto">Services & Prices</h1>
//         <NavLink to="/cart-items" className="relative">
//           <FaShoppingCart size={24} className="text-orange-500" />
//           {cartItems.length > 0 && (
//             <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full h-3 w-3 flex items-center justify-center">
//               {cartItems.length}
//             </span>
//           )}
//         </NavLink>
//       </header>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="p-6 rounded-lg shadow-lg bg-white text-center"
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="mx-auto mb-4"
//             />
//             <h3 className="text-xl font-semibold text-navy">{product.name}</h3>
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

//     </div>
//   );
// };

// export default PriceCart;

// import React, { useState, useEffect } from "react";
// import { FaShoppingCart } from "react-icons/fa";
// import { NavLink } from "react-router-dom";

// const PriceCart = ({ cartItems, setCartItems }) => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch("https://dummyjson.com/carts");
//         const data = await response.json();
//         setProducts(data.carts);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   const addToCart = (product) => {
//     setCartItems([...cartItems, product]);
//   };

//   return (
//     <div className="cart-page-container p-8 bg-gray-50 mt-[5rem]">
//       <header className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold mx-auto">Services & Prices</h1>
//         <NavLink to="/cart-items" className="relative">
//           <FaShoppingCart size={24} className="text-orange-500" />
//           {cartItems.length > 0 && (
//             <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full h-3 w-3 flex items-center justify-center">
//               {cartItems.length}
//             </span>
//           )}
//         </NavLink>
//       </header>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="p-6 rounded-lg shadow-lg bg-white text-center"
//           >
//             <img
//               src={product.images[0]}
//               alt={product.title}
//               className="mx-auto mb-4"
//             />
//             <h3 className="text-xl font-semibold text-navy">{product.title}</h3>
//             <p className="mt-2 text-gray-600">Price: {product.price}</p>
//             <button
//               onClick={() => addToCart(product)}
//               className="mt-4 bg-blue-950 text-white px-6 py-2 rounded-full"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PriceCart;

// import React, { useState, useEffect } from "react";
// import { FaShoppingCart } from "react-icons/fa";
// import { NavLink } from "react-router-dom";

// const PriceCart = ({ cartItems, setCartItems }) => {
//   const [products, setProducts] = useState([]); // State to store products fetched from API
//   const [loading, setLoading] = useState(true); // State to track loading status
//   const [error, setError] = useState(null); // State to track errors

//   // Fetch products from the API when the component mounts
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("https://dummyjson.com/products");
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setProducts(data.products); // Adjusted to fetch all products
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
//     <div className="cart-page-container p-8 bg-gray-50 mt-[5rem]">
//       <header className="flex justify-between items-center mb-8">
//         <h1 className="text-3xl font-bold mx-auto">Services & Prices</h1>
//         <NavLink to="/cart-items" className="relative">
//           <FaShoppingCart size={24} className="text-orange-500" />
//           {cartItems.length > 0 && (
//             <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full h-3 w-3 flex items-center justify-center">
//               {cartItems.length}
//             </span>
//           )}
//         </NavLink>
//       </header>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="p-4 rounded-lg shadow-lg bg-white text-center"
//           >
//             <img
//               src={product.thumbnail} // Assuming there's a thumbnail image in the API data
//               alt={product.title}
//               className="mx-auto mb-4 w-40 h-40 object-cover" // Adjusted image size
//             />
//             <h3 className="text-lg font-semibold text-navy">{product.title}</h3>{" "}
//             {/* Displaying product title */}
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
//     </div>
//   );
// };

// export default PriceCart;

import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const PriceCart = ({ cartItems, setCartItems }) => {
  const [products, setProducts] = useState([]); // State to store products fetched from API
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track errors

  // Fetch products from the API when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/carts");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        // Flatten all products from all carts into a single array
        const allProducts = data.carts.flatMap((cart) => cart.products);

        setProducts(allProducts);
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
    return <div className="text-center mt-[5rem]">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center mt-[5rem] text-red-500">Error: {error}</div>
    );
  }

  return (
    <div className="cart-page-container p-8 bg-gray-50 mt-[5rem]">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold mx-auto">Services & Prices</h1>
        <NavLink to="/cart-items" className="relative">
          <FaShoppingCart size={24} className="text-orange-500" />
          {cartItems.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full h-3 w-3 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </NavLink>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 rounded-lg shadow-lg bg-white text-center"
          >
            <img
              src={product.thumbnail || "default-image-url"} // Using a placeholder if the thumbnail is missing
              alt={product.title}
              className="mx-auto mb-4 w-40 h-40 object-cover" // Adjusted image size
            />
            <h3 className="text-lg font-semibold text-navy">{product.title}</h3>{" "}
            {/* Displaying product title */}
            <p className="mt-2 text-gray-600">Price: &#8358; {product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 bg-blue-950 text-white px-6 py-2 rounded-full"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceCart;
