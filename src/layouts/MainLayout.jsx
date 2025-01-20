import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
      <Header />
      <main className="px-4">
        <div className="min-h-[calc(100vh-120px)] mt-[70px] max-w-screen-xl mx-auto pb-4">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
export default MainLayout;
