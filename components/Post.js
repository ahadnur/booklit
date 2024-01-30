import React from "react";
// import Image from "next/image";
import Link from "next/link";

import bookImg from "@/assets/ilium.jpg";

function Post({ position, title, author, reviewData, tags, postId }) {
  const isEven = position %2 === 0
  
  return (
    <>
      <div className={`flex flex-col md:flex-row justify-start items-center gap-5 py-6 border-b-1 ${isEven ? "" : 'md:flex-row-reverse'}`}>
        {/* Image */}
        <div className="">
          <img src={bookImg.src} alt="Book Image" className="w-[300px] md:w-[240px]" />
        </div>

        {/* Post Data */}
        <div>
          <div className="tags flex flex-wrap justify-start items-start gap-2 text-blue-500 uppercase">
            {
              tags.map((tag, tagIdx) => {
                return <span key={tagIdx}>{tag}</span>
              })
            }
          </div>
          <div className="title">
            <h2 className="text-2xl font-bold w-full mb-2">
              {title}
            </h2>
          </div>
          <div className="author italic font-semibold mb-3">
            Featured by {author}
          </div>
          <div className="review">
            <p>
              {reviewData}
            </p>
          </div>
          <div className="link mt-5">
            <Link href={`/${postId}`} className="flex justify-start items-center gap-3 hover:gap-5 transition-all duration-250" >Read More <span className="text-2xl">&#8594;</span></Link>
          </div>
        </div>
      </div>
    </>
  );
}



export default Post;
