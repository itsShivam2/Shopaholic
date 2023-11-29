import React, { useState } from "react";
import Layout from "../Components/Layout";
import { useEffect } from "react";
import axios from "axios";
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
    dispatch(addToCart(product));
    toast.success("Product added to the cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // const [productsList, setProductsList] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("https://fakestoreapiserver.reactbd.com/products")
  //     .then((response) => {
  //       setProductsList(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div>
      <Layout>
        <h2 className="text-center text-[#484848] lg:text-[3.6rem] md:text-[2rem] text-[1rem] ">
          New Arrivals
        </h2>
        <p className="text-[#8A8A8A] lg:text-[1.2rem] md:text-[0.7rem] text-[0.5rem] text-center font-normal sm:leading-[1.85rem] leading-normal py-[0.5rem] mb-[2rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis <br />
          ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </p>

        <ImageGrid />

        <div className="flex flex-col items-center gap-4 mt-[4rem]">
          <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
            Curated For You!
          </h1>
          <span className="w-20 h-[3px] bg-black"></span>
          <p className="max-w-[700px] text-[#8A8A8A] lg:text-[1.2rem] md:text-[0.7rem] text-[0.5rem] text-center font-normal sm:leading-[1.85rem] leading-normal py-[0.5rem] mb-[2rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
          </p>
        </div>

        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8 mb-8">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {product.map((product) => (
                <div key={product.id} className="group">
                  <Link to={`/productItem/${product.id}`}>
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none hover:opacity-75 lg:h-80 sm:h-80">
                      <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full hover:scale-110 duration-500"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          product.color
                        </p>
                      </div>
                      <p className="text-sm font-medium text-gray-900 line-through">
                        ₹{product.oldPrice}
                      </p>
                      <p className="text-sm font-medium text-gray-900">
                        ₹{product.newPrice}
                      </p>
                    </div>
                  </Link>
                  <div className="mt-4 flex justify-center w-full">
                    <button
                      type="button"
                      onClick={() => addCart(product)}
                      className="flex items-center justify-center w-4/5 py-2 text-white font-medium text-sm rounded-lg cursor-pointer bg-gray-700 hover:bg-sky-950 transform-transition duration-900 hover:w-full transform-transition duration-1000 focus:outline-none hover:drop-shadow-lg"
                    >
                      Add To Cart
                      <BsArrowRight />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Products;
