import React from "react";
import Layout from "../Components/Layout";
import {
  FaLocationDot,
  FaClock,
  FaPhoneFlip,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaSquareInstagram,
  FaTruck,
  FaParachuteBox,
} from "react-icons/fa6";
import {
  MdEmail,
  MdLocalOffer,
  MdPayments,
  MdAssuredWorkload,
} from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import user1 from "../SVG Collection/Testimonial1.jpg";
import user2 from "../SVG Collection/Testimonial2.jpg";
import user3 from "../SVG Collection/Testimonial3.jpg";
import user4 from "../SVG Collection/Testimonial6.jpg";
import about from "../SVG Collection/About.jpg";

function About() {
  return (
    <div>
      <Layout>
        <div className="my-8">
          <h1 className="text-[4rem] sm:text-[8rem] font-[Fahkwang] text-left md:text-center px-8 pt-8">
            About
          </h1>
          <hr className="border-t border-gray-800 mb-6 mx-8" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between px-8 pt-8 gap-8">
            <div className="w-4/5">
              <span className="block w-1/5 h-1 bg-[#0084D6]"></span>
              <h2 className="font-[Fahkwang] font-semibold text-4xl text-left my-4">
                Who We Are
              </h2>
              <p className="font-[Montserrat] text-base text-left my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam
                nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
                vitae erat consequat auctor eu in elit.
              </p>
            </div>
            <div>
              <img src={about} />
            </div>
          </div>
          <h2 className="w-full text-[3rem] sm:text-[5rem] font-[Fahkwang] text-left px-8 pt-8 mt-4">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 px-8 pt-8 gap-16">
            <div>
              <p className="font-[Montserrat] text-xl font-semibold text-left mb-4">
                "Tincidunt dui ut ornare lectus. Sit amet dictum sit amet. Eu mi
                bibendum neque egestas congue quisque egestas diam. Gravida in
                fermentum et sollicitudin ac orci. Eros in cursus turpis massa
                tincidunt dui ut ornare lectus. Odio aenean sed adipiscing
                diam."
              </p>
              <div className="flex items-center gap-4">
                <img src={user1} className="h-20 w-20 rounded-full" />
                <h5 className="font-[Montserrat] text-lg text-left">
                  NEHA GUPTA
                </h5>
              </div>
            </div>

            <div>
              <p className="font-[Montserrat] text-xl font-semibold text-left mb-4">
                "Tincidunt dui ut ornare lectus. Sit amet dictum sit amet. Eu mi
                bibendum neque egestas congue quisque egestas diam. Gravida in
                fermentum et sollicitudin ac orci. Eros in cursus turpis massa
                tincidunt dui ut ornare lectus. Odio aenean sed adipiscing
                diam."
              </p>
              <div className="flex items-center gap-4">
                <img src={user2} className="h-20 w-20 rounded-full" />
                <h5 className="font-[Montserrat] text-lg text-left">
                  AMIT KUMAR
                </h5>
              </div>
            </div>

            <div>
              <p className="font-[Montserrat] text-xl font-semibold text-left mb-4">
                "Sit amet cursus sit amet. Cursus eget nunc scelerisque viverra
                mauris in aliquam sem fringilla. Tellus at urna condimentum
                mattis. In cursus turpis massa tincidunt. Mauris a diam maecenas
                sed enim ut sem viverra. Pharetra convallis posuere morbi leo
                urna."
              </p>
              <div className="flex items-center gap-4">
                <img src={user4} className="h-20 w-20 rounded-full" />
                <h5 className="font-[Montserrat] text-lg text-left">
                  SHAURYA SINGH
                </h5>
              </div>
            </div>

            <div>
              <p className="font-[Montserrat] text-xl font-semibold text-left mb-4">
                "Sit amet cursus sit amet. Cursus eget nunc scelerisque viverra
                mauris in aliquam sem fringilla. Tellus at urna condimentum
                mattis. In cursus turpis massa tincidunt. Mauris a diam maecenas
                sed enim ut sem viverra. Pharetra convallis posuere morbi leo
                urna."
              </p>
              <div className="flex items-center gap-4">
                <img src={user3} className="h-20 w-20 rounded-full" />
                <h5 className="font-[Montserrat] text-lg text-left">
                  RIYA SHARMA
                </h5>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 my-16">
            <div className="flex flex-col items-center">
              <MdAssuredWorkload className="text-8xl md:text-5xl text-cyan-800" />
              <h5 className="font-[Fahkwang] font-semibold text-2xl">
                Best Quality
              </h5>
              <p className="font-[Montserrat] text-lg">
                Nam nec tellus a odio tincidunt auctor a ornare odio sed non
                mauris.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <BiSolidOffer className="text-8xl md:text-5xl text-cyan-800  " />
              <h5 className="font-[Fahkwang] font-semibold text-2xl">
                Best Offers
              </h5>
              <p className="font-[Montserrat] text-lg">
                Nam nec tellus a odio tincidunt auctor a ornare odio sed non
                mauris.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <MdPayments className="text-8xl md:text-5xl text-cyan-800" />
              <h5 className="font-[Fahkwang] font-semibold text-2xl">
                Secure Payments
              </h5>
              <p className="font-[Montserrat] text-lg">
                Nam nec tellus a odio tincidunt auctor a ornare odio sed non
                mauris.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-8 p-8 mt-20 mb-16">
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
              <h3 className="font-[Fahkwang] text-3xl mb-4">
                Newsletter Sign Up
              </h3>
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
        </div>
      </Layout>
    </div>
  );
}

export default About;
