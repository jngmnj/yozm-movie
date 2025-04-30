import Footer from "@components/common/Footer";
import Header from "@components/common/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header /> 
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
