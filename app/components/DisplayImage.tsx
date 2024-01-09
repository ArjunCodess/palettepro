import ListItem from "./ListItem";
import Hero from "./Hero";
import Image from "next/image";

interface UploadedImageProps {
  uploadedImage: string;
  colorPalette: string[];
}

function DisplayImage({ uploadedImage, colorPalette }: UploadedImageProps) {
  const toHex = (rgb: string | number): string => {
    const hexValue = typeof rgb === "number" ? rgb.toString(16).padStart(2, "0") : rgb;
    return `#{hexValue}`;
  };

  return (
    <div className="flex items-center justify-center flex-col gap-8">
      <div>
        {uploadedImage ? (
          <div className="md:w-[30rem] h-auto max-h-[30rem] m-4 p-4 md:w-100 md:h-100 lg:w-200 lg:h-200 flex items-center justify-center border-2 border-gray-500 rounded-md overflow-hidden transition-transform duration-200 ease-in-out hover:shadow-md">
            <Image src={uploadedImage} alt="uploaded" className="w-full h-full object-cover object-center rounded-md" /></div>
        ) : (
          <Hero />
        )}
      </div>

      {colorPalette && "Colors:"}
      {colorPalette && (
        <ul className="flex items-center justify-center flex-wrap gap-4">
          {colorPalette.map((color, index) => {
            const rgb = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
            const hex = `#${toHex(color[0])}${toHex(color[1])}${toHex(
              color[2]
            )}`;

            console.log(rgb, hex);

            return <ListItem key={index} rgb={rgb} hex={hex} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default DisplayImage;
