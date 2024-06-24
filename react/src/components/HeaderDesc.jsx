import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

const HeaderDesc = () => {
  return (
    <>
      <Router>
        <div className=" h-20 w-full px-10  justify-between items-center hidden lg:flex max-w-[1700px] mx-auto ]">
          <div className="  h-full w-[90%] lg:w-[85%] xl:w-[75%] flex items-center justify-between">
            <img
              className=" h-[37px] w-[37px]"
              src="/logo-white 1.png"
              alt=""
            />
            <NavLink
              exact="true"
              to="/"
              className={({ isActive }) =>
                isActive ? "relative text-routerColor font-medium text-[17px]" : "text-slate-800 font-medium text-[17px]"
              }
            >
              Our vision
            </NavLink>
            <NavLink
              to="/1"
              className={({ isActive }) =>
                isActive ? "relative text-routerColor font-medium text-[17px]" : "text-slate-800 font-medium text-[17px]"
              }
            >
              Network Marketing
            </NavLink>
            <NavLink
              to="/2"
              className={({ isActive }) =>
                isActive ? "relative text-routerColor text-[17px]" : "text-slate-800 text-[17px]"
              }
            >
              HoHo Wallet
            </NavLink>
            <NavLink
              to="/3"
              className={({ isActive }) =>
                isActive ? "relative text-routerColor text-[17px]" : "text-slate-800 text-[17px]"
              }
            >
              our Games
            </NavLink>
            <NavLink
              to="/4"
              className={({ isActive }) =>
                isActive ? "relative text-routerColor text-[17px]" : "text-slate-800 text-[17px]"
              }
            >
              Hoho founders
            </NavLink>
            <NavLink
              to="/5"
              className={({ isActive }) =>
                isActive ? "relative text-routerColor text-[17px]" : "text-slate-800 text-[17px] "
              }
            >
              Ticket
            </NavLink>
            <NavLink
              to="/6"
              className={({ isActive }) =>
                isActive ? "relative text-routerColor text-[17px]" : "text-slate-800 text-[17px]"
              }
            >
              Invest Now
            </NavLink>
          </div>
          <div>
            <button className=" border-routerColor border text-routerColor py-2 px-2 xl:px-5 rounded-2xl bg-white duration-100 transition-all hover:bg-fuchsia-100 ">
              Login/Register
            </button>
          </div>
        </div>
      </Router>
    </>
  );
};

export default HeaderDesc;
