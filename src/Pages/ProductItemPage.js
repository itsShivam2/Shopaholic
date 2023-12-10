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

  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const addCart = () => {
    const existingItem = cartItems.find((item) => item.id === params.id);

    if (existingItem) {
      dispatch(
        addToCart({ ...product, quantity: existingItem.quantity + quantity })
      );
    } else {
      dispatch(addToCart({ ...product, quantity }));
    }

    toast.success("Product added to the cart");
    console.log("Cart Items after adding:", cartItems);
  };
  //

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

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
            <div className="min-w-full flex flex-col sm:flex-row justify-between gap-2 my-4">
              <div className="w-full lg:w-3/5 flex items-center justify-between gap-3 border p-3">
                <p className="text-base font-semibold font-[Montserrat]">
                  Quantity
                </p>
                <div className="flex items-center justify-center gap-4 text-sm font-semibold">
                  <button
                    onClick={() => {
                      if (quantity > 1) setQuantity(quantity - 1);
                    }}
                    className="border h-6 text-lg font-semibold font-[Montserrat] flex items-center justify-center px-3 py-1 hover:bg-gray-600 transform-transition duration-1000 hover:text-white"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold font-[Montserrat]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => {
                      setQuantity(quantity + 1);
                    }}
                    className="border h-6 text-lg font-semibold font-[Montserrat] flex items-center justify-center px-2 py-1 hover:bg-gray-600 transform-transition duration-1000 hover:text-white"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-2/5 flex justify-center">
                <button
                  onClick={addCart}
                  className="w-full h-full flex items-center justify-center text-lg font-[Fahkwang] gap-1 px-4 py-4 rounded-sm text-white bg-gray-700 hover:bg-sky-950 transform-transition duration-1000 hover:drop-shadow-lg"
                >
                  Add to cart <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </Layout>
    </div>
  );
}

export default ProductItemPage;
