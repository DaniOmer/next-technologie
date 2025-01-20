import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
      <Header />
      <div className="min-h-[calc(100vh-120px)] box-border max-w-screen-xl mx-auto pb-4">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
export default MainLayout;
