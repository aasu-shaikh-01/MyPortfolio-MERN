import React from "react";
import { NavLink } from "react-router-dom";
import Resume from "../../assets/docs/pdf-test.pdf";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import Fade from "react-reveal/Fade";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";

const Home = () => {
  const { theme, setTheme, setOpen } = useTheme();
  const handleMode = () => {
    setTheme(!theme);
  };
  const handleNav = () => {
    setOpen(false);
  };
  return (
    <div
      onClick={handleNav}
      className="text-white pt-10 sm:w-[63.5rem] w-[21rem] h-[15.9rem] sm:h-[15.9rem] pl-10"
      id="home"
    >
      <button
        onClick={handleMode}
        className="fixed rounded-tl-md rounded-bl-md bg-blue-700 p-2 z-10 right-0 top-12 sm:top-2"
      >
        {theme ? <MdOutlineLightMode size={25} /> : <MdDarkMode size={25} />}
      </button>
      <div>
        <div>
          <h1 className="text-4xl font-bold mb-1">Hi 👋 I'm a</h1>
          <h1 className="text-xl text-yellow-300">
            <Typewriter
              options={{
                strings: [
                  "FrontEnd Developer!",
                  "Backend Developer!",
                  "FullStack Developer!",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </h1>
        </div>
        <Fade bottom>
          <div className="flex gap-8 mt-8">
            <NavLink
              to={Resume}
              target="_blank"
              download={"MyResume.pdf"}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 hover:scale-105 transition duration-300 ease-in-out"
            >
              My Resume
            </NavLink>

            <NavLink
              to={"https://web.whatsapp.com/send?phone=8002895833"}
              target="_blank"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 hover:scale-105 transition duration-300 ease-in-out"
            >
              Hire Me
            </NavLink>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
