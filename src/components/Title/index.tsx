import React from 'react';

interface TitleProps {
  name: string;
}

const Title: React.FC<TitleProps> = ({ name }) => {
  return (
    <div className="w-full flex justify-center items-center my-5 px-5 md:px-0">
      <span className="text-4xl font-medium text-center"> {name}</span>
    </div>
  );
};
export default Title;
