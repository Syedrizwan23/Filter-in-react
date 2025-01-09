import Button from "../components/Button";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div className="ml-80">
        <h2 className="text-xl font-bold mb-5 mt-5">Recommended</h2>
        <div className="flex gap-4">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
