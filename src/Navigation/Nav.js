import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav className="flex justify-between items-center border-b-2 border-gray-300 p-4 z-50 ml-80">
      <div className="flex">
        <input
          className="px-4 py-2 border-none bg-gray-200 rounded-md outline-none mr-4 w-40"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="flex space-x-4">
        <button className="focus:outline-none">
          <FiHeart className="w-6 h-6" />
        </button>
        <button className="focus:outline-none">
          <AiOutlineShoppingCart className="w-6 h-6" />
        </button>
        <button className="focus:outline-none">
          <AiOutlineUserAdd className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Nav;