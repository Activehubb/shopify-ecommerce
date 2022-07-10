import { ShoppingBagIcon } from "@heroicons/react/outline";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import { useState } from "react";

const Header = () => {
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };
  return (
    <header className="bg-slate-100 shadow-md sticky top-0 z-10">
      <div className="container mx-auto">
        <div className="flex justify-around p-2 text-white items-center">
          <div className="text-gray-500 flex justify-end items-center">
            <span>
              <ShoppingBagIcon className="h-12 w-12 text-gray-500 " />
            </span>
            <h3 className="text-lg">Smart Sales</h3>
          </div>
          <div className="">
            <input
              type={"text"}
              className="p2-1 py-1 text-gray-600 bg-slate-50 shadow-sm border divide-slate-50 rounded-sm outline-none w-full"
              value={input}
              onChange={handleInput}
            />
          </div>
          <div className="flex gap-4">
            <button className="bg-gray-800  shadow-gray-800/50 text-white px-8 py-2 rounded ">
              Shop
            </button>
            <button className="bg-indigo-500  flex justify-center items-center text-white shadow-lg shadow-indigo-500/50 px-6 py-2 rounded">
              <h3>Cart</h3> <ShoppingCartIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
