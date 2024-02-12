import React, { useState, useEffect } from "react";
import Cards from "../../components/Cards/Cards";
import { FaFilter } from "react-icons/fa";
const Menu = () => {
  //state updation
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setsortOption] = useState("default");
  //state updation for pagination
  const [currentpage, setCurrentPage] = useState(1); //that means intial page
  const [itemsPerPage, setItemsPerPage] = useState(8); // a page have 8 items displayed we can modify whatever we want

  //loading data here
  useEffect(() => {
    //fetch the data from the backend database
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:6001/menu");
        const data = await response.json();
        console.log(data);
        setMenu(data);
        setFilteredItems(data);
      } catch (error) {
        console.log(`Error fetching data: ${error}`);
      }
    };
    //call the function
    fetchData();
  }, []);

  //filter data based on the categoy
  const filterItems = (category) => {
    // if filter data === all then load all menu data otherwise load the data by category
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);
    setFilteredItems(filtered);
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  //show all the data
  const showAllData = () => {
    setFilteredItems(menu);
    setSelectedCategory("all");
    setCurrentPage(1);
  };

  //sorting based on A-Z, Z-A, low-high and high-low pricing
  const handleSorting = (option) => {
    setsortOption(option);
    let sortedItems = [...filteredItems];
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        //end of sort
        break;
    }
    setFilteredItems(sortedItems);
    setCurrentPage(1);
  };

  //pagination logic
  //it gives the last index of the items
  const indexOflastItem = currentpage * itemsPerPage;
  //first index of items
  const indexOfFirstItem = indexOflastItem - itemsPerPage;
  // check the current item
  const currentItem = filteredItems.slice(indexOfFirstItem, indexOflastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Menu banner */}
      <div className="section-container max-w-screen-2xl ">
        <div className="py-48 flex flex-col justify-center items-center gap-8">
          {/* left side div with text*/}
          <div className="text-center md:w-4/5 px-4 space-y-7">
            <h2 className="text-4xl md:text-5xl text-orange-500 text font-bold md:leading-snug leading-snug">
              For the love of Delicious
              <span className="text-green"> Food</span>
            </h2>
            <p className="text-xl max-auto text-[#475569]">
              Embark on a flavorful journey with our dishes, crafted with a
              genuine love for delicious food. Each bite is a testament to our
              passion for creating unforgettable culinary experiences.
            </p>

            <button className="btn bg-green rounded-full font-semibold text-white px-8 py-3 border-none">
              Order now
            </button>
          </div>
        </div>
      </div>
      {/* Menu shop section with filters */}
      <div className="section-container py-4 ">
        {/* filter nav items and sorting */}
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
          {/* all categories btns*/}
          <div className="flex flex-row justify-start md:items-center gap-4 md:gap-8 flex-wrap">
            <button
              onClick={showAllData}
              className={selectedCategory === "all" ? "active" : "none"}
            >
              All
            </button>
            <button
              className={selectedCategory === "dessert" ? "active" : "none"}
              onClick={() => filterItems("dessert")}
            >
              Desserts
            </button>
            <button
              onClick={() => filterItems("soup")}
              className={selectedCategory === "soup" ? "active" : "none"}
            >
              Soups
            </button>
            <button
              onClick={() => filterItems("salad")}
              className={selectedCategory === "salad" ? "active" : "none"}
            >
              Salad
            </button>
            <button
              onClick={() => filterItems("pizza")}
              className={selectedCategory === "pizza" ? "active" : "none"}
            >
              Pizza
            </button>
            <button
              onClick={() => filterItems("drinks")}
              className={selectedCategory === "drinks" ? "active" : "none"}
            >
              Drinks
            </button>
          </div>
          {/* sort items */}
          <div className="flex justify-end mb-4 rounded-sm">
            <div className="bg-black p-2">
              <FaFilter className="h-4 w-4 text-white" />
            </div>
            <select
              name="sort"
              id="sort"
              onChange={(e) => handleSorting(e.target.value)}
              value={sortOption}
              className="bg-black text-white px-2 py-1 rounded-sm"
            >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-high">low-high</option>
              <option value="high-low">high-low</option>
            </select>
          </div>
        </div>

        {/* show all the data  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {currentItem.map((item, i) => {
            return (
              <div key={i}>
                <Cards key={item._id} item={item} />
              </div>
            );
          })}
        </div>
      </div>
      {/* pagination section */}
      <div className="flex justify-center py-8 bg-gradient-to-r from-[#fffbeb] from-0% to-[#fed7aa] to-100%">
        {/* This calculates the total number of pages needed to display all items i */}
        {Array.from({
          length: Math.ceil(filteredItems.length / itemsPerPage),
        }).map((_, index) => {
          return (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`mx-2 px-3 py-1 rounded-full ${
                currentpage === index + 1
                  ? "bg-green text-white"
                  : "bg-[#fafaf9] text-black shadow-md"
              }`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
