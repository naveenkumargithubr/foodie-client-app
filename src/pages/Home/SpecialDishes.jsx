import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "../../components/Cards/Cards";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
const simpleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      NEXT
    </div>
  );
};

const simplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      Prev
    </div>
  );
};

const SpecialDishes = () => {
  const [recipies, setRecipies] = useState([]);
  // useRef hook is used to create a mutable object that can hold a .current property.
  const slider = React.useRef(null);

  // get the menu data from menu.json and filter only popular data
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const specialDish = data.filter((item) => item.category === "popular");
        console.log(specialDish);
        setRecipies(specialDish);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 912,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    slickNext: <simpleNextArrow />,
    slickPrev: <simplePrevArrow />,
  };

  return (
    <div className="section-container py-16 bg-[#e5e7eb] relative">
      <div className="text-left">
        <h5 className="subtitle">SpecialDishes</h5>
        <h2 className="main-title md:w-[530px]">
          Standout Dishes From Our Menu
        </h2>
      </div>

      <div className="md:absolute right-3 top-8 mb-3 mt-3 md:m-24 mr-5 space-x-1">
        <button
          onClick={() => slider?.current.slickPrev()}
          className="btn p-2 rounded-full"
        >
          <GrFormPrevious className="text-lg w-8 h-8 p-1" />
        </button>
        <button
          onClick={() => slider.current.slickNext()}
          className="btn  p-2 rounded-full"
        >
          <MdNavigateNext className="text-lg w-8 h-8 p-1" />
        </button>
      </div>
      <Slider ref={slider} {...settings}>
        {recipies.map((item, i) => {
          // here we pass the props to use it in the cards component
          return <Cards key={i} item={item} />;
        })}
      </Slider>
    </div>
  );
};

export default SpecialDishes;
