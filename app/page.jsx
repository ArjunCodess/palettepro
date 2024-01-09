'use client'

import DisplayImage from "./components/DisplayImage";
import ColorThief from "colorthief";
import { useState } from "react";

export default function Home() {
  //state
  const [uploadedImage, setUploadedImage] = useState(null);
  const [colorPalette, setColorPalette] = useState(null);

  //functions
  const uploadImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      const img = new Image();

      // Wait for image to load
      img.onload = () => {
        const colorThief = new ColorThief();
        const colorPalette = colorThief.getPalette(img, 10);
        setUploadedImage(event.target.result);
        setColorPalette(colorPalette);
      };
      img.src = event.target.result;
    };

    reader.readAsDataURL(file);
  };
  return (
    <section className="h-screen w-full bg-black">
      <header className="p-4 md:p-8 w-full min-h-1/10 bg-gray-900 flex items-center justify-between gap-12">
        <a href="/" className="font-extrabold font-extrabold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text text-shadow-md text-2xl md:text-3xl lg:text-4xl hover:tracking-widest hover:font-bold transition-all duration-300">PalettePro</a>

        <div className="flex justify-center items-center hover:md:tracking-widest hover:font-bold transition-all duration-300">
          <label htmlFor="file" className="p-2 rounded border-2 border-blue-500 bg-blue-500 px-4 cursor-pointer flex items-center justify-center gap-4">Upload Image</label>
          <input type="file" id="file" hidden onChange={uploadImage} />
        </div>
      </header>

      <main className="py-10 flex items-center justify-center bg-black">
        <DisplayImage
          uploadedImage={uploadedImage}
          colorPalette={colorPalette}
        />
      </main>
    </section>
  )
}
