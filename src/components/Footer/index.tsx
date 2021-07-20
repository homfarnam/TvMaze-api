import * as React from "react";
import styled from "styled-components";

const MyFooter = styled.footer`
  background-color: #0984e3;
`;

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <MyFooter className="flex-shrink-0 relative w-full bottom-0">
      <div className="container mx-auto my-10">
        <div className="flex flex-col lg:flex-row justify-between items-center p-12 lg:p-8 bg-origin-grey text-white ">
          <div className="flex-wrap space-y-8">
            {/* footer menu */}
            <div>
              <ul className="flex flex-col text-center md:flex-row flex-wrap space-x-0 md:space-x-3">
                <a href="/">
                  <li className="cursor-pointer">Home</li>
                </a>
              </ul>
            </div>
          </div>

          <div className="flex flex-col flex-wrap space-y-12">
            <div>
              <span className="text-sm font-bold opacity-50">
                © 2021 Farnam Homayounfar
              </span>
            </div>
          </div>
        </div>
      </div>
    </MyFooter>
  );
};

export default Footer;
