import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="w-[15%] fixed h-full border-r-2 border-gray-300  flex flex-col items-center">
        <div className="mb-16">
          <h1 className="mt-5 text-4xl">🛒</h1>
        </div>
        <Category handleChange={handleChange}  />
        <Price handleChange={handleChange}  />
        <Colors handleChange={handleChange}  />
      </section>
    </>
  );
};

export default Sidebar;
