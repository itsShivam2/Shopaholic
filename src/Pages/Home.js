import React from "react";
import Layout from "../Components/Layout";
import { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../Context/Data/MyContext";
import Highlights from "../Components/Highlights";
import ImageGrid from "../Components/ImageGrid";
import HomeImageGrid from "../Components/HomeImageGrid";
import { FaTruck, FaParachuteBox, FaArrowRight } from "react-icons/fa6";
import { MdPayments, MdAssuredWorkload } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import FashionDesigner from "../SVG Collection/Fashion-designer-template.jpg";
import bottoms from "../SVG Collection/Bottoms.jpg";
import tops from "../SVG Collection/Tops.jpg";
import jeans from "../SVG Collection/Jeans.jpg";
import dresses from "../SVG Collection/Dresses.jpg";

function Home(props) {
  const context = useContext(MyContext);
  const { product } = context;

  const featuredProducts = product.slice(0, 8);

  const scrollToTop = () => {
    const element = document.body;
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      <HomeImageGrid />
      <div className="flex flex-col md:flex-row p-8 my-8">
        <div className="w-full md:w-3/5">
          <div className="w-full">
            <img src={FashionDesigner} className="" />
          </div>
        </div>

        <div className="w-full md:w-2/5 bg-[#f7f7f7] py-1">
          <div className="w-full h-full flex flex-col justify-between">
            <div className="flex md:flex-col gap-2">
              <h2 className="font-[Fahkwang] text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold text-left -translate-y-6 md:-translate-x-16">
                New
              </h2>
              <h2 className="font-[Fahkwang] text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold text-left -translate-y-6 md:-translate-x-16">
                Arrivals
              </h2>
            </div>

            <div className="w-4/5 flex flex-col ml-8">
              <h3 className="font-[Fahkwang] text-2xl lg:text-4xl text-left">
                Luce elegance long sleeve dress collection
              </h3>
              <Link
                to="/products"
                onClick={scrollToTop}
                className="w-4/5 md:w-4/5 font-[Montserrat] text-2xl border-2 border-gray-400 px-2 py-2 mt-8 hover:bg-black hover:text-white hover:cursor-pointer"
              >
                <button>Shop Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <Highlights /> */}
      <div className="flex justify-around gap-8 p-8 my-8">
        <div className="flex flex-col gap-8">
          <div>
            <img src={tops} />{" "}
            <div className="flex items-center gap-2">
              {" "}
              <h3 className="font-[Fahkwang] text-2xl sm:text-3xl font-semibold text-left my-4">
                Tops
              </h3>
              <FaArrowRight className="text-2xl sm:text-3xl" />
            </div>
          </div>
          <div>
            <img src={bottoms} />{" "}
            <div className="flex items-center gap-2">
              <h3 className="font-[Fahkwang] text-2xl sm:text-3xl font-semibold text-left my-4">
                Bottoms
              </h3>
              <FaArrowRight className="text-2xl sm:text-3xl" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <img src={jeans} />{" "}
            <div className="flex items-center gap-2">
              <h3 className="font-[Fahkwang] text-2xl sm:text-3xl font-semibold text-left my-4">
                Jeans
              </h3>
              <FaArrowRight className="text-2xl sm:text-3xl" />
            </div>
          </div>
          <div>
            <img src={dresses} />{" "}
            <div className="flex items-center gap-2">
              {" "}
              <h3 className="font-[Fahkwang] text-2xl sm:text-3xl font-semibold text-left my-4">
                Dresses
              </h3>
              <FaArrowRight className="text-2xl sm:text-3xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8 mb-8">
          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {featuredProducts.map((product) => (
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
                        <span aria-hidden="true" className="absolute inset-0" />
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
                  <div className="mt-4 flex justify-center w-full">
                    <button
                      type="button"
                      className="flex items-center justify-center w-full py-3 font-[Fahkwang] text-white font-medium text-sm rounded-lg cursor-pointer bg-gray-700 hover:bg-sky-950 transform-transition duration-1000 focus:outline-none hover:drop-shadow-lg"
                    >
                      Shop Now
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center p-8 my-8">
        <Link to="/products">
          <button
            onClick={scrollToTop}
            className="flex items-center justify-between gap-1 font-[Fahkwang] font-bold text-white text-3xl sm:text-5xl bg-gradient-to-r from-sky-900 to-sky-950 p-3 rounded-lg hover:shadow-lg transform transition duration-1000"
          >
            Explore More <FaArrowRight />
          </button>
        </Link>
      </div>

      <ImageGrid />

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 my-4">
        <div className="flex flex-col items-center">
          <MdAssuredWorkload className="text-5xl md:text-5xl text-cyan-800" />
          <h5 className="font-[Fahkwang] font-semibold text-2xl">
            Best Quality
          </h5>
          <p className="font-[Montserrat] text-lg">
            Nam nec tellus a odio tincidunt auctor a ornare odio sed non mauris.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <BiSolidOffer className="text-5xl md:text-5xl text-cyan-800  " />
          <h5 className="font-[Fahkwang] font-semibold text-2xl">
            Best Offers
          </h5>
          <p className="font-[Montserrat] text-lg">
            Nam nec tellus a odio tincidunt auctor a ornare odio sed non mauris.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <MdPayments className="text-5xl md:text-5xl text-cyan-800" />
          <h5 className="font-[Fahkwang] font-semibold text-2xl">
            Secure Payments
          </h5>
          <p className="font-[Montserrat] text-lg">
            Nam nec tellus a odio tincidunt auctor a ornare odio sed non mauris.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-8 p-8 mt-20 mb-4">
        <div className="flex flex-col gap-2 justify-start text-left">
          <FaParachuteBox className="text-3xl text-cyan-800" />
          <h3 className="font-[Fahkwang] text-lg">15 DAYS FREE RETURN</h3>
          <h5 className="font-[Montserrat] text-base">
            Nisi magna facilisi nulla morbi
          </h5>
        </div>
        <div className="flex flex-col gap-2 justify-start text-left">
          <FaTruck className="text-3xl text-cyan-800" />
          <h3 className="font-[Fahkwang] text-lg">FREE SHIPPING</h3>
          <h5 className="font-[Montserrat] text-base">
            Nisi magna facilisi nulla morbi
          </h5>
        </div>
        <div className="w-full md:w-3/5 flex flex-col gap-2 justify-start text-left">
          <h3 className="font-[Fahkwang] text-3xl mb-4">Newsletter Sign Up</h3>
          <div className="w-full flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full sm:w-[70%] font-[Montserrat] border-r-gray-600 border-2 px-2 py-3"
            />
            <button className="w-full sm:w-[30%] font-[Montserrat] border-gray-200 border-2 px-4 py-3 hover:bg-black hover:text-white">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
