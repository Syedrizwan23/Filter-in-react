import { BsFillBagFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
  <div className="">
    <div className="border rounded-lg shadow-sm p-4 bg-white mx-4"> 
      {/* Product Image */}
      <img
        src={img}
        alt={title}
        className="w-full h-40 object-contain rounded-md"
      />

      {/* Product Details */}
      <div className="mt-3">
        {/* Title */}
        <h3 className="text-sm font-medium text-gray-800">{title}</h3>

        {/* Rating and Reviews */}
        <section className="flex items-center mt-2">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-sm">
              {star}
            </span>
          ))}
          <span className="ml-2 text-xs text-gray-600">{reviews}</span>
        </section>

        {/* Price and Icon */}
        <section className="flex justify-between items-center mt-4">
          <div className="text-gray-700">
            <del className="text-xs text-gray-400">{prevPrice}</del>
            <span className="ml-2 text-base font-bold text-blue-500">
              ${newPrice}
            </span>
          </div>
          <button className="p-1 rounded-full text-red-500 hover:bg-red-100">
            <BsFillBagFill size={16} />
          </button>
        </section>
      </div>
    </div>
    </div>
  );
};

export default Card;