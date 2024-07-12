import { useState } from "react";
import data from "./data";
import "./App.css";
import { MdOutlineShoppingCart } from "react-icons/md";

function App() {
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const [toggle, setToggle] = useState("description");

  function handleClick(id) {
    setIndex(id);
  }

  return (
    <div
      className="layer w-full h-screen flex justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(196deg, ${data[index].background_image1}, ${data[index].background_image2})`,
      }}
    >
      <div className="w-1/3">
        <img src={data[index].image} alt="Chair" className="ab"></img>
      </div>
      <div className="w-1/3">
        <h5 className="font-Poppins font-bold text-white py-2">MODERN CHAIR</h5>
        <h1 className="font-Poppins font-bold text-4xl text-white py-2">
          {data[index].name}
        </h1>
        <h3 className="font-Poppins font-bold text-3xl text-white py-2">
          ${data[index].chair_price}{" "}
          <span className="text-gray-300 line-through text-xl">$530</span>
        </h3>
        <div className="flex justify-start items-center">
          <h1
            className={`font-Poppins text-lg font-semibold cursor-pointer  p-2 ${
              toggle === "description" ? " text-white" : "text-gray-300"
            }`}
            onClick={() => setToggle("description")}
          >
            Description
          </h1>
          <h1
            className={`font-Poppins text-lg font-semibold cursor-pointer  p-2 ${
              toggle === "details" ? " text-white" : "text-gray-300"
            }`}
            onClick={() => setToggle("details")}
          >
            Details
          </h1>
        </div>
        <p className="font-Poppins font-medium text-sm text-white py-2 duration-300">
          {toggle === "description"
            ? data[index].description
            : data[index].details}
        </p>

        <p className="font-Poppins font-semibold text-lg text-white py-2">
          choose color:
        </p>
        <div className="flex justify-start items-center ">
          {data.map((item, idx) => (
            <>
              <img
                key={idx}
                src={item.color}
                className={`ab1 w-12 h-12 rounded-lg mr-3 cursor-pointer ${
                  index === idx ? "border-4 border-gray-500" : "border-0 "
                }`}
                onClick={() => handleClick(idx)}
                alt={`color-${idx}`}
              ></img>
            </>
          ))}
        </div>

        <button
          className=" px-24 my-4 py-4  rounded-lg text-white font-bold flex  items-center hover:bg-slate-400 "
          style={{
            backgroundColor: hover ? "#5a5a5b" : data[index].button,
            transition: "0.5s",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <MdOutlineShoppingCart className="mx-2 text-xl font-extrabold" /> Add
          To Cart
        </button>
      </div>
    </div>
  );
}

export default App;
