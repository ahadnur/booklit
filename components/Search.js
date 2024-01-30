import React, { useState } from "react";

function Search() {
    const [query, setQuery] = useState("")

    const searchBtnHandler = () => {
        console.log(`Search query: ${query}`)
    }
  return (
    <>
      <div className="py-10">
        <div className="w-full lg:w-[800px] mx-auto flex justify-between px-5">
          <input type="text" placeholder="Find your review ..." onChange={(e) => setQuery(e.target.value)} className="py-6 border-1 border-gray-200 rounded-sm w-full h-8 p-5 outline-none md:text-lg text-gray-400" />
          <button className="py-3 px-10 bg-gray-500 text-white" onClick={searchBtnHandler}>Search</button>
        </div>
      </div>
    </>
  );
}

export default Search;
