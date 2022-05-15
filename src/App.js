import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Card/Card";
import data from "./Data/data.js";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    );
  });

  return (
    <>
      <Navbar />
      <Hero />
      <div className="cards-list"> {cards}</div>
    </>
  );
}

export default App;
