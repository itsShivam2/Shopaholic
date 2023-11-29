import React, { useContext, useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { FaArrowRight } from "react-icons/fa";
import MyContext from "../Context/Data/MyContext";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../Redux/CartSlice";
import { toast } from "react-toastify";

function Cart() {
  //
  const context = useContext(MyContext);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Product deleted from cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const [totalAmout, setTotalAmount] = useState(0);

  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp = temp + parseInt(cartItem.newPrice);
    });
    setTotalAmount(temp);
  }, [cartItems]);
  const shipping = parseInt(40);
  const grandTotal = shipping + totalAmout;

  //
  return (
    <div>
      <Layout>
        <div className="max-w-screen-xl flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-0 mx-auto px-4">
          <div className="flex flex-col gap-8 lg:w-[65%]">
            {cartItems.map((item, index) => {
              const { title, oldPrice, newPrice, imageUrl, description } = item;
              return (
                <div className="w-full flex flex-col md:flex-row md:justify-between items-center gap-2">
                  <div className="w-full md:w-[30%] flex items-center self-start justify-between">
                    <img src={imageUrl} className="w-[120px]" />

                    <div className="flex flex-col items-center justify-between gap-2">
                      <h2 className="">{title}</h2>
                      <p className="">₹{newPrice}</p>
                    </div>
                  </div>

                  <div className="w-full md:w-[30%] flex items-center justify-between">
                    <div className="flex items-center justify-between gap-3 border p-3">
                      <p className="text-sm">Qty</p>
                      <div className="flex items-center justify-center gap-4 text-sm font-semibold">
                        <button className="border h-6 text-lg font-normal flex items-center justify-center px-3 py-1 hover:bg-gray-600 transform-transition duration-1000 hover:text-white">
                          -
                        </button>
                        <span>0</span>
                        <button className="border h-6 text-lg font-normal flex items-center justify-center px-2 py-1 hover:bg-gray-600 transform-transition duration-1000 hover:text-white">
                          +
                        </button>
                      </div>
                    </div>

                    <p className="">₹149</p>
                  </div>

                  <button
                    onClick={() => {
                      deleteCart(item);
                    }}
                    className="w-full md:w-[16%] lg:w-1/5 self-start md:self-center flex items-center justify-center px-2 lg:px-5 py-2 text-base rounded-sm text-white bg-black hover:bg-teal-950 transform-transition duration-1000 hover:drop-shadow-lg"
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
          {/* <CartItem /> */}
          <div className="flex flex-col gap-1 bg-[#fafafa] py-2 lg:w-[30%]">
            <div className="flex flex-col">
              <h2 className="text-4xl font-medium self-start mb-4">
                Cart Total
              </h2>
              <p className="flex items-center gap-4 text-base">
                Subtotal{" "}
                <span className="font-titlefont font-bold text-lg">
                  ₹{totalAmout}
                </span>
              </p>
              <p className="w-full flex item-start gap-4 text-base border-b-2">
                Shipping{" "}
                <span className="font-titlefont font-bold text-lg">
                  ₹{shipping}
                </span>
              </p>
            </div>

            <p className="flex justify-between font-titlefont font-semibold px-4 mt-6">
              {" "}
              Total <span className="text-xl font-bold">₹{grandTotal}</span>
            </p>
            <button className="self-center w-4/5 hover:w-full transform-transition duration-9000 flex items-center justify-center gap-1 px-4 py-3 text-base rounded-sm text-white bg-black hover:bg-teal-950 transform-transition duration-1000 hover:drop-shadow-lg">
              Proceed to checkout <FaArrowRight />
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Cart;
