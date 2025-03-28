import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";

import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/Homepage";
import Expertises from "./pages/Expertises";
import About from "./pages/About";
import Team from "./pages/Team";
import Work from "./pages/Work";
import PageNotFound from "./pages/PageNotFound";
import ScrollToTop from "./components/ScrollToTop";
import ChatButton from "./components/ChatButton";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <ToastContainer />
        <ChatButton />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Homepage />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/our-team" element={<Team />} />
            <Route path="/our-expertises" element={<Expertises />} />
            <Route path="/our-work" element={<Work />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
