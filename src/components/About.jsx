import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-[NueueMontreal] text-[4vw] leading-[3.5vw] tracking-tight">
        We are team of Developers TO create your Ecommerce sites and make your
        business run smoothly by providing digital marketing services or Rank
        your site
      </h1>
      <div className="w-full flex gap-5  border-t-[1px] mt-20 border-[#738146] pt-10 mt-20">
        <div className="w-1/2 ">
          <h1 className="text-4xl"> Our Approach: </h1>
          <button className="px-10 uppercase mt-9 py-6 bg-zinc-900 rounded-full text-white flex items-center gap-5">
            Read More
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] bg-red-500 rounded-2xl"></div>
      </div>
    </div>
  );
}

export default About;
