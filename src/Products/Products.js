const Products = ({ result }) => {
  return (
    <div className="ml-80">
      <section className="p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">{result}</section>
    </div>
  );
};

export default Products;
