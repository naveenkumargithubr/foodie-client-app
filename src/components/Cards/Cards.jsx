import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

// here we use Special dishes properties using props
export const Cards = (props) => {
  const [heartFill, setHeartFill] = useState(false);
  const { item } = props; // obj destructuring
  const { user } = useContext(AuthContext);

  // console.log(user);
  // navigate to signup page
  const navigate = useNavigate();
  const location = useLocation();

  //click heart function
  const handleHeartClick = () => {
    setHeartFill(!heartFill);
  };

  //clik to add item to the cart
  const handleAddtoCart = (item) => {
    //destructuring the items
    const { name, image, price, recipe, _id } = item;

    // console.log("button is clicked", item);
    if (user && user?.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        quantity: 1,
        image,
        price,
        email: user.email,
      };
      // console.log(cartItem);
      fetch("http://localhost:6001/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Item Added to The Cart",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              title: "Please Login?",
              text: "Without an account cant't able to add products!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Signup Now!",
            }).then((result) => {
              if (result.isConfirmed) {
                navigate("/signup", { state: { from: location } });
              }
            });
          }
        });
    }
  };

  return (
    <div className="relative card w-80 bg-base-100 shadow-xl mt-3 bg-green">
      <div
        className={`cursor:pointer absolute top-0 right-0 p-4 text-xl bg-green heartStar
        ${heartFill ? "text-rose-500" : "text-white"}`}
        onClick={handleHeartClick}
      >
        <FaHeart className="h-5 w-5 cursor-pointer" />
      </div>
      <Link to={`/menu/${item._id}`}>
        <figure>
          <img
            src={item.image}
            alt="Shoes"
            className="w-70 hover:scale-105 transition-all duration-300 md:h-56"
          />
        </figure>
      </Link>
      <div className="card-body">
        <h5 className="text-rose-700 font-bold">{item.category}</h5>
        <h2 className="card-title text-white">{item.name}</h2>
        <p className="text-white">{item.recipe}</p>
        <div className="card-actions flex items-center justify-between">
          <h5 className="font-semibold text-xl text-white">
            <span className="text-red pr-1">₹</span>
            {item.price}
          </h5>
          <button
            onClick={() => handleAddtoCart(item)}
            className="btn bg-[#ef4444] text-white border-none"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
