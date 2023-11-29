import React from "react";
import Layout from "../Components/Layout";
import { useContext } from "react";
import MyContext from "../Context/Data/MyContext";
import Highlights from "../Components/Highlights";
import ImageGrid from "../Components/ImageGrid";
import HomeImageGrid from "../Components/HomeImageGrid";

function Home(props) {
  return (
    <Layout>
      <HomeImageGrid />
      <Highlights />
      <ImageGrid />
    </Layout>
  );
}

export default Home;
