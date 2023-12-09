import React, { useContext } from "react";
import { Typography } from "@material-tailwind/react";
import myContext from "../context/myContext";
import blogging from "../assets/blogging.png";
import bloggingdark from "../assets/blogging-dark-theme.png";

function HeroSection() {
  const context = useContext(myContext);
  const { mode } = context;

  const lightImageURL = "https://i.ibb.co/410XBKM/blogging.png";
  const darkImageURL = "https://i.ibb.co/svsHSSQ/blogging-dark-theme.png";

  const imageURL = mode === "dark" ? darkImageURL : lightImageURL;

  return (
    <section className="relative h-[75vh]">
      {/* Hero Section  */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={imageURL}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 bg-black opacity-50"
          style={{ mixBlendMode: "multiply" }}
        />
      </div>

      {/* Main Content  */}
      <div className="container mx-auto flex items-center justify-center h-full relative">
        <div className="text-center text-white">
          <div className="mb-2">
            {/* Text  */}
            <h1 className="text-3xl font-bold">Bloom Blog</h1>
          </div>

          {/* Paragraph  */}
          <p className="text-xl font-extralight sm:mx-auto">
            Here you can read blogs by Swayam.
          </p>
          <button className="mt-4 bg-pink-200 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
