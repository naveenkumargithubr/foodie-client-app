import React, { useState } from "react";
import useCart from "../../Hooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthProvider";
import { useContext } from "react";

const CartPage = () => {
  const [cart, refetch] = useCart();
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItem] = useState([]);
  console.log(user);

  // calculate price
  const calculatePrice = (item) => {
    return item.price * item.quantity;
  };

  //delete item
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:6001/carts/${item._id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                  refetch();
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
                }
              });
          }
        });
      }
    });
  };

  // decrese btn
  const handleDecrease = (item) => {
    // console.log(item._id);
    if (item.quantity > 1) {
      fetch(`http://localhost:6001/carts/${item._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ quantity: item.quantity - 1 }),
      })
        .then((res) => res.json())
        .then((data) => {
          const updatedCart = cartItems.map((cartItem) => {
            if (cartItem.id === item.id) {
              quantity: cartItem.quantity - 1;
            }
            return cartItem;
          });
          refetch();
          setCartItem(updatedCart);
        });

      refetch();
    } else {
      alert("Item can't be zero");
    }
  };

  // handle increse btn
  const handleIncrease = (item) => {
    // console.log(item._id);
    fetch(`http://localhost:6001/carts/${item._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ quantity: item.quantity + 1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        const updatedCart = cartItems.map((cartItem) => {
          if (cartItem.id === item.id) {
            quantity: cartItem.quantity + 1;
          }
          return cartItem;
        });
        refetch();
        setCartItem(updatedCart);
      });

    refetch();
  };

  //calculate total price
  const cartSubTotal = cart.reduce((total, currentval) => {
    return total + calculatePrice(currentval);
  }, 0);

  //final total price
  const orderTotal = cartSubTotal;

  return (
    <div className="section-container ">
      {/* banner */}
      <div>
        <div className="py-28 flex flex-col justify-between items-center justify-center gap-8">
          {/* left side div with text*/}
          <div className=" space-y-7">
            <h2 className="text-4xl md:text-5xl text-[#0f172a] font-bold md:leading-snug leading-snug">
              Items Added to The <span className="text-green">Cart</span>
            </h2>
          </div>
        </div>
      </div>

      {/* table for the cart */}
      <div>
        <div className="overflow-x-auto ">
          <table className="table">
            {/* head */}
            <thead className="bg-green text-white rounded-sm">
              <tr>
                <th>#</th>
                <th>Food</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item, index) => (
                <tr key={index}>
                  <td className="text-[#1e293b]">{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} alt="image" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-medium text-[#1e293b]">{item.name}</td>
                  <td>
                    <button
                      className="btn btn-xs"
                      onClick={() => handleDecrease(item)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={() => console.log(item.quantity)}
                      className="w-10 mx-2 text-center overflow-hidden bg-white text-[#1e293b]"
                    />
                    <button
                      className="btn btn-xs"
                      onClick={() => handleIncrease(item)}
                    >
                      +
                    </button>
                  </td>

                  <td className="text-[#1e293b]">
                    ₹ {calculatePrice(item).toFixed(2)}
                  </td>
                  <th>
                    <button
                      className="btn btn-ghost text-red btn-xs"
                      onClick={() => handleDelete(item)}
                    >
                      <FaTrash />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* foot */}
          </table>
        </div>
      </div>

      {/* customer details */}
      <div className="my-12 flex flex-col md:flex-row justify-end items-end">
        {/* <div className="md:w-1/2 space-y-3">
          <h3 className="font-medium text-[#1e293b]">Customer Details</h3>
          <p className="text-[#64748b]">Name: {user.displayName}</p>
          <p className="text-[#64748b]">Email: {user.email}</p>
          <p className="text-[#64748b]">User_id: {user.uid}</p>
        </div> */}
        <div className="md:w-1/2 space-y-3">
          <h3 className="font-medium text-[#1e293b]">Shopping Details</h3>
          <p className="text-[#64748b]">Total Items: {cart.length}</p>
          <p className="text-[#64748b]">
            Total Price: ₹ {orderTotal.toFixed(2)}
          </p>
          <button className="btn bg-green text-white border-none">
            Proceed To CheckOut
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
