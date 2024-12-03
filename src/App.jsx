import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Techstack from "./pages/Techstack/Techstack";
import Projects from "./pages/Projects/Projects";
import Education from "./pages/Education/Education";
import WorkExp from "./pages/WorkExp/WorkExp";
import Contact from "./pages/Contact/Contact";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "./context/ThemeContext";
import MobileNav from "./components/mobileNav/MobileNav";
// import dotenv from "dotenv";
// dotenv.config({path: '../config.env'});
const App = () => {
  const { theme } = useTheme();
  const { setOpen } = useTheme();

  const handleNav = () => {
    setOpen(false);
  };
  return (
    <>
      <div
        className={`${
          theme ? "bg-gray-400 text-white" : "bg-white text-black"
        } w-full`}
      >
        <BrowserRouter>
          <MobileNav />
          <Layout />
          <div onClick={handleNav}>
            <About />
            <div className="sm:ml-56">
              <Education />
            </div>
            <div className="sm:ml-56">
              <Techstack />
              <Projects />
              <WorkExp />
              <Contact />
              <hr className="h-0.5 bg-black mx-12 mt-8" />
              <div className="flex justify-center text-xl py-2 px-4">
                <h1>Made With 🥰 My Portfolio Website &copy; 2024</h1>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
      <ScrollToTop
        smooth
        color="white"
        style={{
          background: "black",
          borderRadius: "100%",
          paddingLeft: "0.4rem",
          fontSize: "44px",
          fontWeight: "bold",
          // justifyItems: "center",
        }}
      />
      <ToastContainer />
    </>
  );
};

export default App;
