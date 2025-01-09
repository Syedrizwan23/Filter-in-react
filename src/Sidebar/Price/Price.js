import Input from "../../components/Input";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml-5 flex flex-col">
        <h2 className="text-lg font-normal mt-5 mb-5">Price</h2>

        <label className="block relative pl-9 mb-3 cursor-pointer select-none">
          <input
            onChange={handleChange}
            type="radio"
            value=""
            name="test2"
            className="absolute opacity-0 cursor-pointer"
          />
          <span className="absolute top-0 left-0 h-5 w-5 bg-gray-300 rounded-full"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value={50}
          title="$0 - 50"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={100}
          title="$50 - $100"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={150}
          title="$100 - $150"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={200}
          title="Over $150"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
