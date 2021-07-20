import React, { ReactNode } from "react";
import Footer from "../Footer";

type Props = {
  children?: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="flex flex-col h-screen ">
        <main className="mb-auto h-auto  bg-gray-600"> {children}</main>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
