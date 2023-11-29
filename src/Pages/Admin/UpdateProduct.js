import React, { useContext } from "react";
import Layout from "../../Components/Layout";
import MyContext from "../../Context/Data/MyContext";
import { FaArrowRight } from "react-icons/fa";

function UpdateProduct() {

  const context = useContext(MyContext);
  const { products, setProducts, updateProduct } = context;

  return (
    <Layout>
      <div class="relative mx-auto my-8 w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
        <div class="w-full">
          <div class="text-center">
            <h1 className="text-4xl font-bold text-teal-600 px-2 py-2 underline underline-offset-4">
              Shopaholic
            </h1>
            <h2 class="text-3xl font-semibold text-gray-900">Update Product</h2>
          </div>

          <div class="mt-5">
            <div>
              <div class="relative mt-6">
                <input
                  type="text"
                  name="product-title"
                  id="product-title"
                  placeholder="Product Title"
                  onChange={(e) => setProducts({ ...products, title: e.target.value })} value={products.title}
                  class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  autocomplete="NA"
                />
                <label
                  htmlFor="product-title"
                  class="flex items-center gap-1 pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Product Title
                </label>
              </div>

              <div class="relative mt-6">
                <input
                  type="text"
                  name="product-oldPrice"
                  id="product-oldPrice"
                  placeholder="Product Old Price"
                  onChange={(e) => setProducts({ ...products, oldPrice: e.target.value })} value={products.oldPrice}
                  class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  autocomplete="NA"
                />
                <label
                  htmlFor="product-oldPrice"
                  class="flex items-center gap-1 pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Product Old Price
                </label>
              </div>

              <div class="relative mt-6">
                <input
                  type="text"
                  name="product-newPrice"
                  id="product-newPrice"
                  placeholder="Product New Price"
                  onChange={(e) => setProducts({ ...products, newPrice: e.target.value })} value={products.newPrice}
                  class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  autocomplete="NA"
                />
                <label
                  htmlFor="product-newPrice"
                  class="flex items-center gap-1 pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Product New Price
                </label>
              </div>

              <div class="relative mt-6">
                <input
                  type="text"
                  name="product-url"
                  id="product-url"
                  placeholder="Product Image Url"
                  onChange={(e) => setProducts({ ...products, imageUrl: e.target.value })} value={products.imageUrl}
                  class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  autocomplete="NA"
                />
                <label
                  htmlFor="product-url"
                  class="flex items-center gap-1 pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Product Image url
                </label>
              </div>

              <div class="relative mt-6">
                <input
                  type="text"
                  name="product-category"
                  id="product-category"
                  placeholder="Product Category"
                  onChange={(e) => setProducts({ ...products, category: e.target.value })} value={products.category}
                  class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  autocomplete="NA"
                />
                <label
                  htmlFor="product-category"
                  class="flex items-center gap-1 pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Product Category
                </label>
              </div>

              <div class="relative mt-6">
                <input
                  type="text"
                  name="product-rating"
                  id="product-rating"
                  placeholder="Product Rating"
                  onChange={(e) => setProducts({ ...products, rating: e.target.value })} value={products.rating}
                  class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  autocomplete="NA"
                />
                <label
                  htmlFor="product-rating"
                  class="flex items-center gap-1 pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Product Rating
                </label>
              </div>

              <div class="relative mt-6">
                <textarea
                  name="product-description"
                  id="product-description"
                  placeholder="Product Description"
                  onChange={(e) => setProducts({ ...products, description: e.target.value })}
                  class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  autocomplete="NA"
                  rows="5"
                  cols="33"
                ></textarea>
                <label
                  htmlFor="product-description"
                  class="flex items-center gap-1 pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                >
                  Product Description
                </label>
              </div>

              <div class="my-6">
                <button
                  onClick={updateProduct}
                  class="w-4/5 hover:w-full transform-transition duration-1000 rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none hover:drop-shadow-lg"
                >
                  Update Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UpdateProduct;
