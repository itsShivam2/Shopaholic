import React, { useState } from "react";
import Layout from "../Components/Layout";
import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../Context/Data/MyContext";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/CartSlice";
import { toast } from "react-toastify";
import ImageGrid from "../Components/ImageGrid";

function Products() {
  const context = useContext(MyContext);
  const { product } = context;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const addCart = (product) => {
    const defaultQuantity = 1;
    dispatch(addToCart({ ...product, quantity: defaultQuantity }));
    toast.success("Product added to the cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const scrollToTop = () => {
    const element = document.body;
    element.scrollIntoView({ behavior: "smooth" });
  };

  const [currentCategory, setCurrentCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(product);
  useEffect(() => {
    if (currentCategory === "all") {
      setFilteredProducts(product);
    } else {
      const filtered = product.filter((p) => p.category === currentCategory);
      console.log("Filtered Products:", filtered);
      setFilteredProducts(filtered);
    }
  }, [currentCategory, product]);

  return (
    <div>
      <Layout>
        <h1 className="text-6xl sm:text-[6rem] md:text-8xl font-[Fahkwang] text-left md:text-center px-8 pt-8">
          New Arrivals
        </h1>
        <hr className="border-t border-gray-800 mb-6 mx-8" />

        <p className="text-[#8A8A8A] text-xl md:text-xl text-left md:text-center font-[Montserrat] py-[0.5rem] px-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </p>

        <ImageGrid />

        <div className="flex flex-col items-center gap-4 mt-4 px-8">
          <h1 className="text-2xl bg-sky-950 text-white py-3 w-80 text-center font-[Fahkwang]">
            Curated For You!
          </h1>
          <span className="w-20 h-[3px] bg-black"></span>
          <p className="max-w-[700px] text-[#8A8A8A] text-xl md:text-xl text-center font-[Montserrat] py-2 mb-4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mt-8 mb-10 px-8">
          <button
            onClick={() => setCurrentCategory("all")}
            className="min-w-[265px] sm:min-w-fit font-[Fahkwang] font-bold text-3xl text-white bg-gray-700 hover:bg-sky-950 transform-transition duration-900 transform-transition duration-1000 hover:drop-shadow-lg p-3 rounded-lg"
          >
            All
          </button>
          <button
            onClick={() => setCurrentCategory("men's clothing")}
            className="min-w-[265px] sm:min-w-fit font-[Fahkwang] font-bold text-3xl text-white bg-gray-700 hover:bg-sky-950 transform-transition duration-900 transform-transition duration-1000 hover:drop-shadow-lg p-3 rounded-lg"
          >
            Men's Store
          </button>
          <button
            onClick={() => setCurrentCategory("women's clothing")}
            className="min-w-[265px] sm:min-w-fit font-[Fahkwang] font-bold text-3xl text-white bg-gray-700 hover:bg-sky-950 transform-transition duration-900 transform-transition duration-1000 hover:drop-shadow-lg p-3 rounded-lg"
          >
            Women's Store
          </button>
        </div>

        {/* original  */}
        {/* <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8 mb-8">
            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group">
                  <Link to={`/productItem/${product.id}`} onClick={scrollToTop}>
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none hover:opacity-75 lg:h-80 sm:h-80">
                      <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full hover:scale-110 duration-500"
                      />
                    </div>
                    <div className="mt-4 flex flex-col sm:flex-row justify-between">
                      <div>
                        <h3 className="font-[Montserrat] text-sm text-gray-900">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.title}
                        </h3>
                      </div>
                      <div className="flex flex-row gap-2 justify-between">
                        <p className="font-[Montserrat] text-sm font-medium text-gray-900 line-through">
                          ₹{product.oldPrice}
                        </p>
                        <p className="font-[Montserrat] text-sm font-medium text-gray-900">
                          ₹{product.newPrice}
                        </p>
                      </div>
                    </div>
                  </Link>
                  <div className="mt-4 flex justify-center w-full">
                    <button
                      type="button"
                      onClick={() => addCart(product)}
                      className="flex items-center justify-center w-4/5 py-3 font-[Fahkwang] text-white font-medium text-sm rounded-lg cursor-pointer bg-gray-700 hover:bg-sky-950 transform-transition duration-900 hover:w-full transform-transition duration-1000 focus:outline-none hover:drop-shadow-lg"
                    >
                      Add To Cart
                      <BsArrowRight />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
        {/*  */}
        {/* <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8 mb-8">
          <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group">
                <Link to={`/productItem/${product.id}`} onClick={scrollToTop}>
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-40 object-cover rounded-md bg-gray-200 hover:opacity-75"
                  />
                  <div className="mt-4">
                    <h3 className="text-sm text-gray-900 font-[Montserrat]">
                      {product.title}
                    </h3>
                    <div className="flex flex-row justify-between mt-2">
                      <p className="text-sm text-gray-900 font-[Montserrat] line-through">
                        ₹{product.oldPrice}
                      </p>
                      <p className="text-sm text-gray-900 font-[Montserrat]">
                        ₹{product.newPrice}
                      </p>
                    </div>
                  </div>
                </Link>
                <div className="mt-4 flex justify-center">
                  <button
                    type="button"
                    onClick={() => addCart(product)}
                    className="w-4/5 py-3 text-white text-sm bg-gray-700 hover:bg-sky-950 rounded-lg cursor-pointer transform-transition duration-900 hover:w-full transform-transition duration-1000 focus:outline-none hover:drop-shadow-lg"
                  >
                    Add To Cart
                    <BsArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        <div className="bg-white mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8 mb-8">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group">
                <Link to={`/productItem/${product.id}`} onClick={scrollToTop}>
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none hover:opacity-75 lg:h-80 sm:h-80">
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full hover:scale-110 duration-500"
                    />
                  </div>
                  <div className="mt-4 flex flex-col sm:flex-row justify-between">
                    <h3 className="font-[Montserrat] text-sm text-gray-900">
                      {product.title}
                    </h3>
                    <div className="flex flex-row gap-2 justify-between">
                      <p className="font-[Montserrat] text-sm font-medium text-gray-900 line-through">
                        ₹{product.oldPrice}
                      </p>
                      <p className="font-[Montserrat] text-sm font-medium text-gray-900">
                        ₹{product.newPrice}
                      </p>
                    </div>
                  </div>
                </Link>
                <div className="mt-4 flex justify-center w-full">
                  <button
                    type="button"
                    onClick={() => addCart(product)}
                    className="flex items-center justify-center w-4/5 py-3 font-[Fahkwang] text-white font-medium text-sm rounded-lg cursor-pointer bg-gray-700 hover:bg-sky-950 transform-transition duration-900 hover:w-full transform-transition duration-1000 focus:outline-none hover:drop-shadow-lg"
                  >
                    Add To Cart <BsArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Products;
