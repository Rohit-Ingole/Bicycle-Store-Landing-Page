import NewsItem from "./NewsItem";

const NewsSection = () => {
  const newsData = [
    { image: "/images/asoggetti-HPpj2190tGs-unsplash.jpg" },
    { image: "/images/paolo-chiabrando-KSwd2lb3lfs-unsplash.jpg" },
    { image: "/images/portuguese-gravity-MLbsn2aQfQs-unsplash.jpg" },
  ];

  return (
    <div className="section">
      <div className="section-title">
        <h3 className="second-title to-right show-on-scroll">bike news</h3>
        <h3 className="main-title to-left show-on-scroll">latest news</h3>
        <div className="btn-wrapper">
          <div className=" to-top show-on-scroll">
            <a href="#" className="btn">
              view all news
            </a>
          </div>
        </div>
      </div>
      <div className="section-content">
        <div className="row">
          {newsData.map(({ image }, index) => (
            <NewsItem key={index} image={image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
