import Footer from "@components/common/Footer";
import Header from "@components/common/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header /> 
      <main className="mt-16 pt-4 pb-30">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
