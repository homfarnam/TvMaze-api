import React from "react";

interface TitleProps {
  name: string;
}

const Title: React.FC<TitleProps> = ({ name }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <span className="text-2xl">Title: </span>
      <span className="text-2xl font-medium hover:text-gray-500">{name}</span>
    </div>
  );
};
export default Title;
