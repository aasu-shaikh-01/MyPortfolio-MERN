import React from "react";
import Home from "../../pages/Home/Home";

import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import Menu from "../Menu/Menu";
import { useTheme } from "../../context/ThemeContext";

const Layout = () => {
  const { open, setOpen } = useTheme();

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="flex bg-black relative h-64">
        <div
          className={`${
            open ? "w-52" : "w-28"
          } bg-gray-600 h-[100vh] pt-4 fixed hidden sm:block`}
        >
          <p
            onClick={handleOpen}
            className="cursor-pointer text-white right-3 absolute"
          >
            {open ? (
              <MdKeyboardDoubleArrowLeft size={34} />
            ) : (
              <MdKeyboardDoubleArrowRight size={34} />
            )}
          </p>
          {/* <Menu open={open} /> */}
          <Menu />
        </div>
        <div className="absolute sm:left-56 left-4">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
