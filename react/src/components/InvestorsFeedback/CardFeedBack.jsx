import React from "react";

const CardFeedBack = ({ image, name, desc, profit }) => {
  return (
    <>
      <div className="border flex flex-col p-5 rounded-xl  lg:flex-row lg:rounded-full lg:items-center ml-3">
        <div className=" mr-5">
          <img className=" w-[90px]" src={image} alt="" />
        </div>
        <div className="">
          <h1 className=" text-xl pt-1">{name}</h1>
          <p className=" text-textColor text-[15px]">{desc}</p>
          <output className=" text-[14px]  text-dateColor">
            Profit: <span className="text-green-600">{profit}</span>
          </output>
        </div>
      </div>
    </>
  );
};

export default CardFeedBack;
