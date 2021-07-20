import React from "react";

interface ImageProps {
  url: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ alt, url }) => {
  return (
    <div className="flex justify-center items-center my-10">
      <img src={url} alt={alt} />
    </div>
  );
};

export default Image;
