const CategoryItem = ({ category, image }) => {
  return (
    <div className="col-4">
      <div className="category-img to-top show-on-scroll">
        <div
          className="category-img-inner"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
        <div className="category-title">{category}</div>
      </div>
    </div>
  );
};

export default CategoryItem;
