import React, { useContext, useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";
import MyContext from "../Context/Data/MyContext";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/CartSlice";
import { toast } from "react-toastify";
import { fireDB } from "../Firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";

function ProductItemPage() {
  //

  const context = useContext(MyContext);
  const { loading, setLoading } = context;

  const [product, setProduct] = useState("");
  const params = useParams();

  const getProductData = async () => {
    setLoading(true);
    try {
      const productTemp = await getDoc(doc(fireDB, "products", params.id));

      setProduct(productTemp.data());

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, [getProductData]);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  // add to cart
  const addCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Product added to the cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  //
  return (
    <div>
      <Layout>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-4 py-4 max-w-screen-xl">
          <div className="w-full lg:w-2/5 flex items-center justify-center px-5 py-2 mx-auto">
            <img
              className="w-full h-full object-cover object-center rounded"
              src={product.imageUrl}
            />
          </div>
          <div className="w-full flex flex-col justify-start items-start px-5 pt-0 pb-10 lg:py-10 mx-auto gap-2">
            <div className="min-w-full flex flex-wrap justify-between items-center sm:flex-col sm:justify-start sm:items-start sm:gap-0">
              <h2 className="text-4xl font-semibold font-[Fahkwang]">
                {product.title}
              </h2>
              <div className="flex items-center justify-start my-4">
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
              </div>
            </div>
            <p className="text-l sm:text-xl font-semibold text-gray-600 font-[Montserrat]">
              {product.category}
            </p>
            <p className="text-black text-justify leading-relaxed border-b-2 mb-3 pb-5 text-[1rem] font-[Montserrat]">
              {product.description}
            </p>
            <div className="flex items-center gap-6 mt-3">
              <p className="line-through text-2xl font-bold text-gray-600 font-[Montserrat]">
                ₹{product.oldPrice}
              </p>
              <p className="text-2xl font-bold font-[Montserrat]">
                ₹{product.newPrice}
              </p>
            </div>
            <div className="min-w-full flex justify-between items-center gap-2 my-4 px-4">
              <div className="w-1/2 lg:w-3/5 flex items-center justify-between gap-3 border p-3">
                <p className="text-base font-semibold font-[Montserrat]">
                  Quantity
                </p>
                <div className="flex items-center justify-center gap-4 text-sm font-semibold">
                  <button className="border h-6 text-lg font-semibold font-[Montserrat] flex items-center justify-center px-3 py-1 hover:bg-gray-600 transform-transition duration-1000 hover:text-white">
                    -
                  </button>
                  <span className="text-lg font-semibold font-[Montserrat]">
                    0
                  </span>
                  <button className="border h-6 text-lg font-semibold font-[Montserrat] flex items-center justify-center px-2 py-1 hover:bg-gray-600 transform-transition duration-1000 hover:text-white">
                    +
                  </button>
                </div>
              </div>
              <div className="w-1/2 lg:w-2/5 flex justify-center">
                <button
                  onClick={() => addCart(product)}
                  className="w-full h-full flex items-center justify-center text-lg font-[Montserrat] gap-1 px-4 py-4 rounded-sm text-white bg-black hover:bg-teal-950 transform-transition duration-1000 hover:drop-shadow-lg"
                >
                  Add to cart <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*  */}

        {/* <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-10 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/3 w-full lg:h-auto  object-cover object-center rounded"
                src={
                  "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  BRAND NAME
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  Shirt
                </h1>

                <div className="flex mb-4">
                  <span className="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-gray-600 ml-3">4 Reviews</span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                    </a>
                  </span>
                </div>

                <p className="leading-relaxed border-b-2 mb-5 pb-5">
                  sduyjd sadjhghsdajhaga saass ghagsa hgasa hgsd ahjx dygasgs
                  azjhdsax hxsx y dsayd hghdd ydxxe
                </p>

                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ₹199
                  </span>
                  <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Add To Cart
                  </button>
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/*  */}
      </Layout>
    </div>
  );
}

export default ProductItemPage;
