// import React, { useState } from "react";
// import { FaHome } from "react-icons/fa";
// import {
//   FcAbout,
//   FcBiotech,
//   FcReadingEbook,
//   FcVideoProjector,
// } from "react-icons/fc";
// import { TbSortAscending } from "react-icons/tb";
// import { RiContactsFill } from "react-icons/ri";
// import { Link } from "react-scroll";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { ImCross } from "react-icons/im";

// const MobileNav = () => {
//   const [open, setOpen] = useState(false);
//   const handleMenu = () => {
//     setOpen(!open);
//   };
//   return (
//     <div className="sm:hidden z-1 sticky top-0">
//       <div className="flex items-center gap-4 font-bold bg-gray-500 shadow-2xl p-1 pl-2">
//         {open ? (
//           <ImCross onClick={handleMenu} className="text-white" />
//         ) : (
//           <RxHamburgerMenu
//             size={20}
//             className="font-bold text-white"
//             onClick={handleMenu}
//           />
//         )}
//         <h1>My Portfolio App</h1>
//       </div>
//       <div className="">
//         {open && (
//           <div className="text-white flex flex-col gap-4 bg-black w-30 p-4 fixed left-0 top-0 mt-8 rounded-b-md">
//             <Link
//               to="home"
//               activeClass="text-blue-400"
//               spy={true}
//               smooth={true}
//               offset={-100}
//               duration={400}
//             >
//               <p className="flex cursor-pointer hover:text-blue-400 gap-2 items-center">
//                 <FaHome size={23} onClick={handleMenuFalse}/> <span>Home</span>
//               </p>
//             </Link>
//             <Link
//               to="About"
//               activeClass="text-blue-400"
//               spy={true}
//               smooth={true}
//               duration={400}
//               offset={-100}
//             >
//               <p className="flex cursor-pointer hover:text-blue-400 gap-2 items-center">
//                 <FcAbout size={23} onClick={handleMenuFalse}/> <span>About</span>
//               </p>
//             </Link>
//             <Link
//               to="WorkExp"
//               activeClass="text-blue-400"
//               spy={true}
//               smooth={true}
//               duration={400}
//               offset={-100}
//             >
//               <p className="flex cursor-pointer hover:text-blue-400 gap-2 items-center">
//                 <TbSortAscending size={23} onClick={handleMenuFalse}/> <span>Work Experience</span>
//               </p>
//             </Link>
//             <Link
//               to="techstack"
//               activeClass="text-blue-400"
//               spy={true}
//               smooth={true}
//               duration={400}
//               offset={-100}
//             >
//               <p className="flex cursor-pointer hover:text-blue-400 gap-2 items-center">
//                 <FcBiotech size={23} onClick={handleMenuFalse}/> <span>Tech Stack</span>
//               </p>
//             </Link>
//             <Link
//               to="Education"
//               activeClass="text-blue-400"
//               spy={true}
//               smooth={true}
//               duration={400}
//               offset={-100}
//             >
//               <p className="flex cursor-pointer hover:text-blue-400 gap-2 items-center">
//                 <FcReadingEbook size={23} onClick={handleMenuFalse}/> <span>Education</span>
//               </p>
//             </Link>
//             <Link
//               to="Projects"
//               activeClass="text-blue-400"
//               spy={true}
//               smooth={true}
//               duration={400}
//               offset={-60}
//             >
//               <p className="flex cursor-pointer hover:text-blue-400 gap-2 items-center">
//                 <FcVideoProjector size={23} onClick={handleMenuFalse}/> <span>Projects</span>
//               </p>
//             </Link>
//             <Link
//               to="Contact"
//               activeClass="text-blue-400"
//               spy={true}
//               smooth={true}
//               duration={400}
//               offset={-120}
//             >
//               <p className="flex cursor-pointer hover:text-blue-400 gap-2 items-center">
//                 <RiContactsFill size={23} onClick={handleMenuFalse}/> <span>Contact</span>
//               </p>
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MobileNav;
import React from "react";
import { FaHome } from "react-icons/fa";
import {
  FcAbout,
  FcBiotech,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";
import { TbSortAscending } from "react-icons/tb";
import { RiContactsFill } from "react-icons/ri";
import { Link } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import { useTheme } from "../../context/ThemeContext";

const MobileNav = () => {
  const { open, setOpen } = useTheme();
  const handleMenu = () => {
    setOpen(!open);
  };
  const handleMenuFalse = () => {
    setOpen(false);
  };

  return (
    <div className="sm:hidden z-50 sticky top-0">
      {/* Navbar */}
      <div className="flex items-center gap-4 font-bold bg-gray-500 shadow-2xl p-1 pl-2">
        {open ? (
          <ImCross onClick={handleMenu} className="text-white" />
        ) : (
          <RxHamburgerMenu
            size={24}
            className="font-bold text-white cursor-pointer"
            onClick={handleMenu}
          />
        )}
        <h1 className="text-xl">My Portfolio App</h1>
      </div>

      {/* Dropdown Menu */}
      <div>
        {open && (
          <div className="text-white flex flex-col gap-4 bg-black w-40 p-4 fixed left-0 top-8 z-50 rounded-br-xl shadow-md">
            <Link
              to="home"
              activeClass="text-blue-400"
              spy={true}
              smooth={true}
              offset={-100}
              duration={400}
            >
              <p
                onClick={handleMenuFalse}
                className="flex cursor-pointer hover:text-blue-400 gap-2 items-center"
              >
                <FaHome size={23} /> <span>Home</span>
              </p>
            </Link>
            <Link
              to="About"
              activeClass="text-blue-400"
              spy={true}
              smooth={true}
              duration={400}
              offset={-100}
            >
              <p
                onClick={handleMenuFalse}
                className="flex cursor-pointer hover:text-blue-400 gap-2 items-center"
              >
                <FcAbout size={23} /> <span>About</span>
              </p>
            </Link>
            <Link
              to="WorkExp"
              activeClass="text-blue-400"
              spy={true}
              smooth={true}
              duration={400}
              offset={-100}
            >
              <p
                className="flex cursor-pointer hover:text-blue-400 gap-2 items-center"
                onClick={handleMenuFalse}
              >
                <TbSortAscending size={23} /> <span>Work Exp</span>
              </p>
            </Link>
            <Link
              to="techstack"
              activeClass="text-blue-400"
              spy={true}
              smooth={true}
              duration={400}
              offset={-100}
            >
              <p
                className="flex cursor-pointer hover:text-blue-400 gap-2 items-center"
                onClick={handleMenuFalse}
              >
                <FcBiotech size={23} /> <span>Tech Stack</span>
              </p>
            </Link>
            <Link
              to="Education"
              activeClass="text-blue-400"
              spy={true}
              smooth={true}
              duration={400}
              offset={-100}
            >
              <p
                className="flex cursor-pointer hover:text-blue-400 gap-2 items-center"
                onClick={handleMenuFalse}
              >
                <FcReadingEbook size={23} /> <span>Education</span>
              </p>
            </Link>
            <Link
              to="Projects"
              activeClass="text-blue-400"
              spy={true}
              smooth={true}
              duration={400}
              offset={-60}
            >
              <p
                className="flex cursor-pointer hover:text-blue-400 gap-2 items-center"
                onClick={handleMenuFalse}
              >
                <FcVideoProjector size={23} /> <span>Projects</span>
              </p>
            </Link>
            <Link
              to="Contact"
              activeClass="text-blue-400"
              spy={true}
              smooth={true}
              duration={400}
              offset={-120}
            >
              <p
                className="flex cursor-pointer hover:text-blue-400 gap-2 items-center"
                onClick={handleMenuFalse}
              >
                <RiContactsFill size={23} /> <span>Contact</span>
              </p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
