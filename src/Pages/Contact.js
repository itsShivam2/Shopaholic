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
  FaTruck,
  FaParachuteBox,
} from "react-icons/fa6";
import {
  MdEmail,
  MdPayments,
  MdAssuredWorkload,
} from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";

function Contact() {
  return (
    <div>
      <Layout>
        <div className="my-8">
          <h1 className="text-[4rem] sm:text-[8rem] font-[Fahkwang] text-left md:text-center px-8 pt-8">
            Contact
          </h1>
          <hr className="border-t border-gray-800 mb-6 mx-8" />
          <div className="flex flex-col md:flex-row gap-8 md:gap-4 justify-between items-start p-8">
            <div className="flex flex-col sm:flex-row items-start gap-4 text-left">
              <div>
                <span className="bg-[#DDD1C1]">
                  <FaLocationDot className="text-2xl mt-1" />
                </span>
              </div>
              <div className="flex flex-col items-start gap-2">
                <h2 className="font-[Fahkwang] text-2xl font-semibold">
                  Head Office
                </h2>
                <p className="font-[Montserrat] text-base text-gray-700">
                  123 Karol Bagh, New Delhi, <br /> India
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4  text-left">
              <div>
                <span className="bg-[#DDD1C1]">
                  <FaPhoneFlip className="text-2xl mt-1" />
                </span>
              </div>
              <div className="flex flex-col items-start gap-2">
                <h2 className="font-[Fahkwang] text-2xl font-semibold">
                  Phone
                </h2>
                <p className="font-[Montserrat] text-base text-gray-700">
                  +91 123-456-7890
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4  text-left">
              <div>
                <span className="bg-[#DDD1C1]">
                  <MdEmail className="text-2xl mt-1" />
                </span>
              </div>
              <div className="flex flex-col items-start gap-2">
                <h2 className="font-[Fahkwang] text-2xl font-semibold">
                  Email
                </h2>
                <p className="font-[Montserrat] text-base text-gray-700">
                  shopaholic@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-6 p-8">
            <div className="w-full md:w-1/2 flex flex-col gap-4 text-left">
              <h2 className="font-[Fahkwang] text-5xl font-semibold py-2 my-2">
                Stay In Touch
              </h2>
              <p className="font-[Montserrat] text-base">
                Faucibus parturient dignissim nisi, magna ullamcorper facilisi
                tincidunt nulla et morbi sed risus vestibulum consectetur arcu
                pulvinar.
              </p>
              <h3 className="font-[Fahkwang] font-semibold text-2xl py-2 my-2">
                Customer Services
              </h3>
              <div className="flex items-center gap-4">
                <MdEmail />
                <span className="font-[Montserrat] text-base">
                  shopaholic@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneFlip />
                <span className="font-[Montserrat] text-base">
                  +91 1234567890
                </span>
              </div>
              <div className="flex items-center gap-4">
                <FaClock />
                <span className="font-[Montserrat] text-base">
                  Mon - Sat <br />
                  10:00 AM - 6:00 PM
                </span>
              </div>

              <div className="py-2 my-2">
                <h3 className="font-[Fahkwang] text-2xl font-semibold text-left ">
                  SOCIAL MEDIA
                </h3>
                <div className="flex gap-8 py-4">
                  <FaInstagram className="text-2xl hover:cursor-pointer" />
                  <FaYoutube className="text-2xl hover:cursor-pointer" />
                  <FaTwitter className="text-2xl hover:cursor-pointer" />
                  <FaFacebook className="text-2xl hover:cursor-pointer" />
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 text-left">
              <h3 className="font-[Fahkwang] text-2xl text-left py-2 my-2">
                Got Any Questions ?
              </h3>
              <form className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="font-bold text-lg font-[Montserrat]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="h-12 border-r-sky-800 border-2 px-2 mb-4 font-[Montserrat]"
                />

                <label
                  htmlFor="email"
                  className="font-bold text-lg font-[Montserrat]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="h-12 border-r-sky-800 border-2 px-2 mb-4 font-[Montserrat]"
                />

                <label
                  htmlFor="message"
                  className="font-bold text-lg font-[Montserrat]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="h-28 border-r-sky-800 border-2 px-2 mb-4 font-[Montserrat]"
                />

                <button
                  type="submit"
                  className="border-gray-600 border-2 self-start px-8 py-3 font-[Montserrat] hover:bg-black hover:text-white"
                >
                  SUBMIT
                </button>
              </form>
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

export default Contact;
