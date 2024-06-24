import React from "react";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import Menu from "./Menu";

const HeaderMobile = () => {
  const [menu, setMenu] = useState(false);

  const menuHandler = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className="h-20 w-full px-10  justify-between items-center flex lg:hidden">
        <img src="/logo-white 1.png" alt="" />
        <LuMenu onClick={menuHandler} className=" text-2xl text-slate-800" />
      </div>
      <div className="block lg:hidden">
        <Menu menu={menu} setMenu={setMenu} menuHandler={menuHandler} />
      </div>
    </>
  );
};

export default HeaderMobile;
