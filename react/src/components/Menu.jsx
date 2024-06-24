import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const Menu = ({ menu, menuHandler, setMenu }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 1024) {
        setMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Router>
        <div
          onClick={menuHandler}
          style={{ display: menu ? "block" : "none" }}
          className="h-screen w-screen brightness-50  bg-filterBg  fixed top-0 right-0 z-20 "
        ></div>
        <div
          style={{ width: menu ? "300px" : "0" }}
          className=" bg-white shadow-md fixed left-0 top-0 w-[250px] h-screen transition-all duration-300 overflow-hidden z-20"
        >
          <div className="w-full flex justify-end h-10  items-center">
            <IoClose
              className=" text-2xl text-routerColor mr-2"
              onClick={menuHandler}
            />
          </div>
          <div className="w-full h-[600px] box-border mt-10  px-3">
            <button className="w-full  h-14 border-routerColor border rounded-lg flex justify-center items-center text-routerColor font-medium text-xl duration-100 transition-all hover:bg-fuchsia-100">
              Login/Register
            </button>
            <div className="h-14 border rounded-lg mt-3 flex items-center pl-3 overflow-hidden">
              <NavLink
                exact="true"
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "relative text-routerColor border-e-8 border-routerColor h-full w-full flex items-center transition-all duration-150"
                    : "text-slate-800 h-full w-full flex items-center"
                }
              >
                Our vision
              </NavLink>
            </div>
            <div className="h-14 border rounded-lg mt-3 flex items-center pl-3 overflow-hidden">
              <NavLink
                to="/1"
                className={({ isActive }) =>
                  isActive
                    ? "relative text-routerColor border-e-8 border-routerColor h-full w-full flex items-center transition-all duration-150"
                    : "text-slate-800 h-full w-full flex items-center"
                }
              >
                Network Marketing
              </NavLink>
            </div>
            <div className="h-14 border rounded-lg mt-3 flex items-center pl-3 overflow-hidden">
              <NavLink
                to="/2"
                className={({ isActive }) =>
                  isActive
                    ? "relative text-routerColor border-e-8 border-routerColor h-full w-full flex items-center transition-all duration-150"
                    : "text-slate-800 h-full w-full flex items-center"
                }
              >
                HoHo Wallet
              </NavLink>
            </div>
            <div className="h-14 border rounded-lg mt-3 flex items-center pl-3 overflow-hidden">
              <NavLink
                to="/3"
                className={({ isActive }) =>
                  isActive
                    ? "relative text-routerColor border-e-8 border-routerColor h-full w-full flex items-center transition-all duration-150"
                    : "text-slate-800 h-full w-full flex items-center"
                }
              >
                our Games
              </NavLink>
            </div>
            <div className="h-14 border rounded-lg mt-3 flex items-center pl-3 overflow-hidden">
              <NavLink
                to="/4"
                className={({ isActive }) =>
                  isActive
                    ? "relative text-routerColor border-e-8 border-routerColor h-full w-full flex items-center transition-all duration-150"
                    : "text-slate-800 h-full w-full flex items-center"
                }
              >
                Hoho founders
              </NavLink>
            </div>
            <div className="h-14 border rounded-lg mt-3 flex items-center pl-3 overflow-hidden">
              <NavLink
                to="/5"
                className={({ isActive }) =>
                  isActive
                    ? "relative text-routerColor border-e-8 border-routerColor h-full w-full flex items-center transition-all duration-150"
                    : "text-slate-800 h-full w-full flex items-center"
                }
              >
                Ticket
              </NavLink>
            </div>
            <div className="h-14 border rounded-lg mt-3 flex items-center pl-3 overflow-hidden">
              <NavLink
                to="/6"
                className={({ isActive }) =>
                  isActive
                    ? "relative text-routerColor border-e-8 border-routerColor h-full w-full flex items-center transition-all duration-150"
                    : "text-slate-800 h-full w-full flex items-center"
                }
              >
                Invest Now
              </NavLink>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

export default Menu;
