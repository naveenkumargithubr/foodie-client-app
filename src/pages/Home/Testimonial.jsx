import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="section-container bg-[#d4d4d8] py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* left div section */}
        <div className="md:w-1/2">
          <img src="/images/home/testimonials/testimonials.png" alt="" />
        </div>
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <h5 className="subtitle">Testimonials</h5>
            <h2 className="main-title">What Our Customers Say About US</h2>
            <blockquote className="my-5 text-[#475569] leading-[30px]">
              "This foodie website is a culinary delight, offering diverse
              recipes with easy-to-follow instructions and a vibrant community.
              Whether you're a seasoned chef or a kitchen novice, it's a
              must-visit for delicious inspiration!"
            </blockquote>
            {/* avatar */}
            <div className="flex gap-5">
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-12">
                    <img src="/images/home/testimonials/testimonial1.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="/images/home/testimonials/testimonial2.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="/images/home/testimonials/testimonial3.png" />
                  </div>
                </div>

                <div className="avatar placeholder">
                  <div className="w-12 bg-neutral text-neutral-content">
                    <span>+99</span>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="text-lg text-[#f97316] font-medium">
                  Customer FeedBack
                </h5>
                <div className="flex items-center gap-3">
                  <FaStar className="text-yellow-400" />
                  <span>4.9</span>
                  <span className="font-md">(19k reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
