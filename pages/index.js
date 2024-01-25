import Hero from "@/components/Hero";
import Post from "@/components/Post";

import bookImg from "@/assets/ilium.jpg";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      {/* All Reviews */}
      <main className="w-full md:max-w-[46.875rem] lg:max-w-[68.75rem] mx-auto mt-10 flex gap-5">
        <div className="left w-[65%] space-y-8">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <div className="right w-[35%] px-3">
          <div className="w-full bg-blue-600 h-[300px] p-8 text-white">
            <h4 className="text-2xl mb-3">Discover your next great book!</h4>
            <p className="text-gray-200">
              BookPage highlights the best new books across all genres, as
              chosen by our editors. Every book we cover is one that we are
              excited to recommend to readers. A star indicates a book of
              exceptional quality in its genre or category.
            </p>
          </div>

          {/* Recent Reviews */}
          <div className="reviews mt-5">
            <h2 className="text-4xl font-bold border-b-1 pb-3">Recent Reviews</h2>

            {/* Recent Review 1 */}
            <div className="flex justify-start items-center py-5 gap-3 border-b-1">
              <div className="image">
                <img src={bookImg.src} alt="" className="w-[100px]" />
              </div>
              <div className="review">
                <div className="tags text-xs flex justify-start items-center flex-wrap gap-2 text-blue-500 uppercase">
                  <span>Mystery & Suspense</span>
                  <span>Thriller</span>
                  <span>Suspense</span>
                  <span>Mystery</span>
                </div>
                <div className="title">
                  <h2 className="font-bold w-full">When a woman ...</h2>
                </div>

                <div className="authon italic font-semibold">
                  <span className="text-sm">Bruce Tiemey</span>
                </div>
                <div className="link">
                <a href="#" className="text-xs">Read More &#8594;</a>
                </div>
              </div>
            </div>

            {/* Recent Review 2 */}
            <div className="flex justify-start items-center py-5 gap-3 border-b-1">
              <div className="image">
                <img src={bookImg.src} alt="" className="w-[100px]" />
              </div>
              <div className="review">
                <div className="tags text-xs flex justify-start items-center flex-wrap gap-2 text-blue-500 uppercase">
                  <span>Mystery & Suspense</span>
                  <span>Thriller</span>
                  <span>Suspense</span>
                  <span>Mystery</span>
                </div>
                <div className="title">
                  <h2 className="font-bold w-full">When a woman ...</h2>
                </div>

                <div className="authon italic font-semibold">
                  <span className="text-sm">Bruce Tiemey</span>
                </div>
                <div className="link">
                <a href="#" className="text-xs">Read More &#8594;</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
