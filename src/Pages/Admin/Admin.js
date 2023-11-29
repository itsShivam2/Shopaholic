import React from "react";
import Layout from "../../Components/Layout";
import userIcon from "./user-1.png";
import orderIcon from "./shopping-cart.png";
import productsIcon from "./compliant.png";
import valueIcon from "./price-list.png";
import DashboardTab from "./DashboardTabs";

function Admin() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      <div className="flex flex-col md:flex-row justify-around items-center gap-6 px-4 py-4 mb-10">
        <div className="min-w-[25%] md:min-w-[20%] lg:min-w-[16%] flex flex-col justify-center items-center gap-2 px-6 py-6 bg-[#fafafa] border-rose-700 drop-shadow-lg">
          <img src={productsIcon} className="h-[70px] w-[70px]"/>
          <h2 className="text-2xl font-semibold">10</h2>
          <h3 className="font-semibold">Total Products</h3>
        </div>
        <div className="min-w-[25%] md:min-w-[20%] lg:min-w-[16%] flex flex-col justify-center items-center gap-2 px-6 py-6 bg-[#fafafa] border-rose-700 drop-shadow-lg">
          <img src={userIcon} className="h-[70px] w-[70px]" />
          <h2 className="text-2xl font-semibold">10</h2>
          <h3 className="font-semibold">Total Users</h3>
        </div>
        <div className="min-w-[25%] md:min-w-[20%] lg:min-w-[16%] flex flex-col justify-center items-center gap-2 px-6 py-6 bg-[#fafafa] border-rose-700 drop-shadow-lg">
          <img src={orderIcon} className="h-[70px] w-[70px]"/>
          <h2 className="text-2xl font-semibold">10</h2>
          <h3 className="font-semibold">Total Orders</h3>
        </div>
        <div className="min-w-[25%] md:min-w-[20%] lg:min-w-[16%] flex flex-col justify-center items-center gap-2 px-6 py-6 bg-[#fafafa] border-rose-700 drop-shadow-lg">
          <img src={valueIcon} className="h-[70px] w-[70px]"/>
          <h2 className="text-2xl font-semibold">10</h2>
          <h3 className="font-semibold">Total Value</h3>
        </div>
      </div>
      <DashboardTab/>
    </Layout>
  );
}

export default Admin;
