import { useRouter } from "next/router";
import React, { useState } from "react";

import { TfiComment } from "react-icons/tfi";
import { SlLike } from "react-icons/sl";
import { PiShareFat } from "react-icons/pi";

import reviewData from "@/constants/testData";

function PostDetail() {
  const router = useRouter();
  const { id } = router.query;

  const post = reviewData.find((p) => String(p.id) === String(id));
  console.log(post.tags);

  // console.log(post)
  if (!post) return <div>Loading ...</div>;

  // console.log(postData)
  return (
    <div className="w-full md:max-w-[800px] mx-auto">
      <div className="w-full h-64 flex flex-col justify-center items-start">
        <h2 className="text-6xl font-bold text-gray-800 mb-4">{post.title}</h2>
        <span className="text-gray-500 font-semibold md:text-lg italic">
          Featured By: {post.author}
        </span>
      </div>
      <p>{post.reviewData}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {post.tags.map((tag, tagIdx) => {
          return (
            <span
              key={tagIdx}
              className="py-1 px-5 inline-block bg-gray-200 rounded-sm text-gray-800"
            >
              {tag}
            </span>
          );
        })}
      </div>

      {/* Like comment section */}
      <div className="mt-10 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <TfiComment  className="text-2xl" />
          <span className="">32</span>
        </div>
        <div className="flex items-center gap-2">
          <SlLike  className="text-2xl" />
          <span className="">32</span>
        </div>
        <div className="flex items-center gap-2">
          <PiShareFat className="text-2xl" />
          <span className="">8</span>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
