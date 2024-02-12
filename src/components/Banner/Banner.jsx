import React from "react";
const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#f1f5f9] from-0% to-[#94a3b8] to-100%">
      <div className="py-24 flex flex-col md:flex-row-reverse justify-between items-center justify-center gap-8">
        {/* right side div with images */}
        <div className="md:w-1/2">
          <img src="/images/home/banner.png" alt="" className="w-96" />
          {/* small banner cards */}
          <div className="flex flex-col md:flex-row items-center  -mt-14 gap-3">
            <div className="flex bg-white py-3 px-3 rounded-2xl items-center gap-3 shadow-md w-64">
              <img
                src="/images/home/b-food1.png"
                alt=""
                className="rounded-2xl"
              />
              <div className="space-y-1">
                <h5 className="font-medium mb-1">Spicy Chicken</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                </div>
                <p>₹ 499</p>
              </div>
            </div>
            <div className="hidden flex md:flex bg-white py-3 px-3 rounded-2xl items-center gap-3 shadow-md w-64">
              <img
                src="/images/home/b-food1.png"
                alt=""
                className="rounded-2xl"
              />
              <div className="space-y-1">
                <h5 className="font-medium mb-1">Fried Chicken</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                </div>
                <p>₹ 199</p>
              </div>
            </div>
          </div>
        </div>

        {/* left side div with text*/}
        <div className="md:w-1/2 space-y-7">
          <h2 className="text-4xl md:text-5xl text-orange-500 text font-bold md:leading-snug leading-snug">
            Dive into Delights Of Delectable{" "}
            <span className="text-green">Food</span>
          </h2>
          <p className="text-xl text-[#4A4A4A]">
            Where Each Plate Weaves a Story of Culinary Mastery and passionate
            Craftsmanship
          </p>
          <div className="py-5 flex items-center gap-5">
            <button className="btn bg-green rounded-full font-semibold text-white px-8 py-3 border-none">
              Order now
            </button>
            <h2 className="text-lg text-[#94a3b8]">Watch Video</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
