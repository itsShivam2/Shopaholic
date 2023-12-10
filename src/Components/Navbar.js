import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import cart from "../SVG Collection/Cart.svg";
import shopaholic from "../SVG Collection/shopaholic.png";

const navigation = [
  { name: "Products", href: "/products", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  // Parse user data from local storage
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user);

  const logout = () => {
    localStorage.clear("user");
    window.location.href = "/";
  };

  return (
    <Disclosure as="nav" className="bg-white shadow-lg my-0 py-4 sticky">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black-400 hover:bg-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                {/* <div className="flex flex-shrink-0 items-center"> */}
                <Link to="/" className="flex flex-shrink-0 items-center">
                  <img
                    className="h-12 w-auto"
                    src={shopaholic}
                    alt="Your Company"
                  />
                  <h2 className="font-[Fahkwang] text-xl sm:text-3xl md:text-3xl font-semibold">
                    Shopaholic
                  </h2>
                </Link>
                {/* </div> */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        // href={item.href}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-300 text-black"
                            : "text-black-300 hover:bg-gray-700 hover:text-black",
                          "rounded-md px-3 py-2 pt-[1rem] text-xl font-semibold font-[Montserrat]"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-white p-1 text-black-400 hover:text-black focus:outline-black focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  {user ? (
                    <Link to="/cart">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                      <img src={cart} className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" />
                    </Link>
                  ) : (
                    <Link to="/signin">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                      <img src={cart} className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" />
                    </Link>
                  )}
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  {/* User profile image button */}
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-7 w-7 sm:h-8 sm:w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>

                  {/* User menu dropdown items */}
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) =>
                          user?.user?.email === "shivam@gmail.com" ? (
                            <Link
                              to="/admin"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-black-700"
                              )}
                            >
                              Admin
                            </Link>
                          ) : (
                            <Link
                              to="/error"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-black-700"
                              )}
                            >
                              Admin
                            </Link>
                          )
                        }
                      </Menu.Item>
                      {/* "Order" link */}
                      <Menu.Item>
                        {({ active }) =>
                          user ? (
                            <Link
                              to="/order"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-black-700"
                              )}
                            >
                              Order
                            </Link>
                          ) : (
                            <Link
                              to="/signin"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-black-700"
                              )}
                            >
                              Order
                            </Link>
                          )
                        }
                      </Menu.Item>

                      {/* "Log In" or "Log Out" link */}
                      <Menu.Item>
                        {({ active }) =>
                          user ? (
                            <Link
                              to="/"
                              onClick={logout}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-black-700"
                              )}
                            >
                              Sign Out
                            </Link>
                          ) : (
                            <Link
                              to="/signin"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-black-700"
                              )}
                            >
                              Sign In
                            </Link>
                          )
                        }
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          {/* <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-black-300 hover:bg-gray-700 hover:text-black",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel> */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href} // Replace 'href' with 'to'
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-black-300 hover:bg-gray-700 hover:text-black",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
