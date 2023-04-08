import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export const Footer = () => {
  AOS.init({
    offset: 20,
    duration: 1000,
  });
  return (
    <>
      <div className="bg-purple-950 p-5 text-white flex gap-3 flex-col">
        <div id="feedback-form" data-aos="fade-right" className=" rounded-2xl">
          <h5 className="text-2xl font-bold">Contact Me</h5>
          <p className="text-lg">
            Feel free to contact me if you are interested in working on a
            project together
          </p>
        </div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png"
            alt=""
            className="h-12 w-12 "
          />
        </div>
        <br />
        <br />
        <br />
      </div>
    </>
  );
};
