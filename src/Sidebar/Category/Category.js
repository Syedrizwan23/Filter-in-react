import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="text-lg font-normal mb-5">Category</h2>

      <div className="flex flex-col">
        <label className="block relative pl-9 mb-3 cursor-pointer select-none">
          <input
            onChange={handleChange}
            type="radio"
            value=""
            name="test"
            className="absolute opacity-0 cursor-pointer"
          />
          <span className="absolute top-0 left-0 h-5 w-5 bg-gray-300 rounded-full checkmark"></span>
          All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
