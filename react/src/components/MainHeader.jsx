import React, { useEffect, useState } from "react";

const MainHeader = () => {
  const [image1, setImage1] = useState("/Ellipse 10.png");
  const [image2, setImage2] = useState("/Ellipse 11.png");
  const [image3, setImage3] = useState("/Ellipse 12.png");
  const [image4, setImage4] = useState("/Ellipse 9.png");
  const [image5, setImage5] = useState("/Ellipse 9.png");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setImage1("/image1.png");
        setImage2("/image2.png");
        setImage3("/image3.png");
        setImage4("/image4.png");
        setImage5("/mobile vector.png");
      } else {
        setImage1("/Ellipse 10.png");
        setImage2("/Ellipse 11.png");
        setImage3("/Ellipse 12.png");
        setImage4("/Ellipse 9.png");
        setImage5("/Vector 2.png");
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="">
      <div
        className={`  lg:h-[700px]  h-[700px]  w-[100%]  md:justify-center md:flex flex-col md:flex-row   relative   max-w-[1700px] mx-auto `}
      >
        <img
          className="   md:h-full md:left-0 md:w-auto w-full  top-0  md:top-auto h-[300px] md:absolute "
          src={image1}
          alt=""
        />
        <img
          className="  md:h-full md:right-[10%]  right-0  md:w-auto w-full h-[400px] md:static absolute top-[70px]"
          src={image2}
          alt=""
        />

        {/* <img
          className=" md:h-full  md:bottom-[-100px] right-0 w-full md:w-auto border  border-red-500 "
          src={image3}
          alt=""
        /> */}
        <img
          className="  md:h-full md:right-0  w-full md:w-auto absolute right-0 md:top-0  h-[600px] "
          src={image4}
          alt=""
        />
        <div className=" absolute   h-[100%] w-[100%] flex  items-start justify-center  max-w-[1700px] mx-auto  overflow-hidden top-0 right   ">
          <img className=" mt-32" src={image5} alt="" />
        </div>
        <div className=" absolute top-0  right-0 h-full w-full   max-w-[1700px] flex lg:flex-row md:flex-col justify-between  items-center    md:px-20   ">
          <div className="w-full h-full flex flex-col justify-start lg:justify-center  pt-28 lg:pt-0 items-center px-10 lg:px-0  md:w-[600px] lg:w-[500px] xl:w-2/6 ">
            <h1 className=" text-5xl xl:text-[57px] text-center font-extrabold leading-[60px]">
              Welcome To The World Of
              <span className=" text-hohoColor"> HOHO</span>
            </h1>
            <div className="flex items-center justify-center relative   h-[55px] w-full mt-4">
              <input
                type="text"
                placeholder="Email"
                className="w-full h-full  rounded-3xl pl-5 text-sm outline-none "
              />
              <button className=" absolute right-0 bg-btnColor h-4/5 px-6 text-white rounded-3xl mr-1 text-sm ">
                Login
              </button>
            </div>
          </div>
          <div className="  hidden md:flex h-full w-auto items-center justify-end  lg:justify-end pl-5  transform translate-y-[-80px] lg:translate-y-0">
            <img src="/welcome.png" alt="" />
          </div>
          <div className=" h-20 w-full flex justify-center items-center absolute bottom-14 md:bottom-[-30px] lg:bottom-14 left-0">
            <img className="w-[80%]" src="/Vector 1.png" alt="" />
            <div
              style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
              className=" absolute h-[35px] w-[250px] rounded-xl flex justify-center items-center bg-hohoDivColor"
            >
              <img
                className="mr-1 h-[18px] w-[16px]"
                src="/Group 46.png"
                alt=""
              />
              <output className="text-textColor text-[15px]">
                {" "}
                1 HoHo=0.006 USD{" "}
              </output>
              <img
                className="ml-1 h-[18px] w-[16px]"
                src="/Group 45.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
