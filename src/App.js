const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Jackets",
    },
    {
      id: 3,
      title: "Sneakers",
    },
    {
      id: 4,
      title: "Womens",
    },
    {
      id: 5,
      title: "Mens",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ id, title }) => (
        <div className="category-container" key={id}>
          {/* <img></img> */}
          <div className="category-body-container">
            <h1>{title}</h1>
            <p>Show Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
