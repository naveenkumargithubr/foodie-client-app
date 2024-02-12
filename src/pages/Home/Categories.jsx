import React from "react";

const categoryItems = [
  {
    id: 1,
    title: "Main Dish",
    des: "(86 dishes)",
    image: "/images/home/category/img1.png",
  },
  {
    id: 2,
    title: "Break Fast",
    des: "(12 break fast)",
    image: "/images/home/category/img2.png",
  },
  {
    id: 3,
    title: "Dessert",
    des: "(50 dissert)",
    image: "/images/home/category/img3.png",
  },
  {
    id: 4,
    title: "Browse All",
    des: "(300 items)",
    image: "/images/home/category/img4.png",
  },
];

const Categories = () => {
  return (
    <div className="section-container py-16">
      <div className="text-center">
        <p className="subtitle">Customer Favorites</p>
        <h2 className="main-title">Popular Categories</h2>
      </div>
      {/* category cards */}
      <div className="flex flex-col sm:flex-row flex-wrap p-5 items-center justify-around mt-10 gap-8">
        {categoryItems.map((item, index) => {
          return (
            <div
              key={index}
              className="shadow-xl rounded-md py-6 px-5 bg-[#f1f5f9] w-72 max-auto text-center cursor-pointer hover:translate-y-4 duration-300 transition-all"
            >
              <div className="flex items-center justify-center">
                <img
                  src={item.image}
                  alt=""
                  className="p-5 rounded-full w-28 h-28 "
                />
              </div>

              <div className="mt-5 space-y-1 text-red">
                <h5>{item.title}</h5>
                <p>{item.des}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
