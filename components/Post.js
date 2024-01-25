import React from "react";
import Image from "next/image";

import bookImg from "@/assets/ilium.jpg";

function Post({ props }) {
    console.log(bookImg)
  return (
    <>
      <div className="flex justify-start items-center gap-5">
        {/* Image */}
        <div className="">
          <img src={bookImg.src} alt="" className="w-[240px]" />
        </div>

        {/* Post Data */}
        <div>
          <div className="tags flex justify-start items-center gap-2 text-blue-500 uppercase">
            <span>Mystery & Suspense</span>
            <span>Thriller</span>
            <span>Suspense</span>
            <span>Mystery</span>
          </div>
          <div className="title">
            <h2 className="text-2xl font-bold w-full">
              When a woman loses her memory, her twin sister is the only person
              she can trust—or can she?
            </h2>
          </div>
          <div className="authon italic font-semibold">
            Featured by Bruce Tiemey
          </div>
          <div className="review">
            <p>
              Abbott Kahler’s debut thriller delights our mystery columnist,
              plus Lea Carpenter’s latest literary espionage novel impresses.
            </p>
          </div>
          <div className="link">
            <a href="#" className="text-4xl">&#8594;</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
