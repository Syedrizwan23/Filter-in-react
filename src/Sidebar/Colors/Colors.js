import Input from "../../components/Input";

const Colors = ({ handleChange }) => {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-lg font-normal mt-8 mb-5">Colors</h2>

        <label className="block relative pl-9 mb-3 cursor-pointer select-none">
          <input
            onChange={handleChange}
            type="radio"
            value=""
            name="test1"
            className="absolute opacity-0 cursor-pointer"
          />
          <span className="absolute top-0 left-0 h-5 w-5 rounded-full bg-gradient-to-r from-blue-500 to-red-500"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />

        <label className="block relative pl-9 mb-3 cursor-pointer select-none">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
            className="absolute opacity-0 cursor-pointer"
          />
          <span className="absolute top-0 left-0 h-5 w-5 rounded-full bg-white border-2 border-black"></span>
          White
        </label>
      </div>
    </>
  );
};

export default Colors;
