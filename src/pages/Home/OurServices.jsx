import React from "react";

const servicesList = [
  {
    id: 1,
    title: "CATERING",
    desc: "Delight Your Guests with our flavors and presentation",
    image: "/images/home/services/icon1.png",
  },
  {
    id: 2,
    title: "FAST DELIVERY",
    desc: "we deliver your order properly to your door on the time",
    image: "/images/home/services/icon2.png",
  },
  {
    id: 3,
    title: "Online Ordering",
    desc: "Explore menu & Order with ease using our online Ordering",
    image: "/images/home/services/icon3.png",
  },
  {
    id: 4,
    title: "GIFT CARDS",
    desc: "Savor the joy of gifting with our versatile culinary gift cards.",
    image: "/images/home/services/icon4.png",
  },
];

const OurServices = () => {
  return (
    <div className="section-container bg-[#e5e7eb] py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* right side text container */}
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <h5 className="subtitle">OUR STORY & SERVICES</h5>
            <h2 className="main-title">Our Culinary Journey And Services</h2>
            <blockquote className="my-5 text-[#475569] leading-[30px]">
              "Embark on a flavorful culinary journey with our diverse range of
              services. From curated recipes to personalized dining experiences,
              our offerings cater to every palate. Discover the joy of
              exceptional taste and service on our unique culinary adventure!"
            </blockquote>
            <button className="btn bg-green text-white border-none px-6 text-md rounded-full">
              Explore
            </button>
          </div>
        </div>
        {/* left image section */}
        <div className="md:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
            {servicesList.map((service) => {
              return (
                <div
                  key={service.id}
                  className="shadow-lg rounded-sm py-8 px-4 text-center space-y-2 text-green hover:border hover:scale-105 ease-in-out bg-white border-gray-600 transition-all duration-300 cursor-pointer"
                >
                  <img src={service.image} alt="" className="mx-auto" />
                  <h5 className="pt-3 font-semibold">{service.title}</h5>
                  <p className="pb-5 text-[#64748b]">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
