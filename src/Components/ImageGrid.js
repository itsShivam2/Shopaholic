import React from "react";
import social1 from "../SVG Collection/socials1.e6343d14767f1817d8d2.png";
import social2 from "../SVG Collection/socials2.ce1326472b8bf9befccd.png";
import social3 from "../SVG Collection/socials3.4fcb713114d0dc9f1dde.png";
import social4 from "../SVG Collection/socials4.2b53834b902b681b5e25.png";
import social5 from "../SVG Collection/socials5.940fb4327e0c1f0ee8ec.png";
import social6 from "../SVG Collection/socials6.591e63e292cac72d6fcc.png";
import social7 from "../SVG Collection/socials7.9148ef7157490f12f399.png";

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-7 h-full place-content-center place-items-center mt-[2rem] mb-[2rem]">
      <div
        className="object-cover w-13.5rem"
        style={{
          objectFit: "cover",
          width: "13.5rem",
          height: "auto",
          maxWidth: "100%",
          display: "block",
          verticalAlign: "middle",
        }}
      >
        <img src={social1} alt="Odd Image 1" />
      </div>
      <div
        className="object-cover w-13.5rem"
        style={{
          objectFit: "cover",
          width: "13.5rem",
          height: "auto",
          maxWidth: "100%",
          display: "block",
          verticalAlign: "middle",
        }}
      >
        <img src={social2} alt="Even Image 1" />
      </div>
      <div
        className="object-cover w-13.5rem"
        style={{
          objectFit: "cover",
          width: "13.5rem",
          height: "auto",
          maxWidth: "100%",
          display: "block",
          verticalAlign: "middle",
        }}
      >
        <img src={social3} alt="Odd Image 2" />
      </div>
      <div
        className="object-cover w-13.5rem"
        style={{
          objectFit: "cover",
          width: "13.5rem",
          height: "auto",
          maxWidth: "100%",
          display: "block",
          verticalAlign: "middle",
        }}
      >
        <img src={social4} alt="Even Image 2" />
      </div>
      <div
        className="object-cover w-13.5rem"
        style={{
          objectFit: "cover",
          width: "13.5rem",
          height: "auto",
          maxWidth: "100%",
          display: "block",
          verticalAlign: "middle",
        }}
      >
        <img src={social5} alt="Odd Image 3" />
      </div>
      <div
        className="object-cover w-13.5rem"
        style={{
          objectFit: "cover",
          width: "13.5rem",
          height: "auto",
          maxWidth: "100%",
          display: "block",
          verticalAlign: "middle",
        }}
      >
        <img src={social6} alt="Even Image 3" />
      </div>
      <div
        className="object-cover w-13.5rem"
        style={{
          objectFit: "cover",
          width: "13.5rem",
          height: "auto",
          maxWidth: "100%",
          display: "block",
          verticalAlign: "middle",
        }}
      >
        <img src={social7} alt="Odd Image 4" />
      </div>
    </div>
  );
};

export default ImageGrid;
