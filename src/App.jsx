import {
  Header,
  Footer,
  Hero,
  About,
  Reservation,
  FoodGallery,
  Awards,
  ChefWord,
  Restaurant,
  Blog,
  Carousel,
  Stats,
  Contact,
} from "./components/index";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Reservation />
        <FoodGallery />
        <Awards />
        <ChefWord />
        <Restaurant />
        <Blog />
        <Carousel />
        <Stats />
        <Contact />
      </main>
    </>
  );
}

export default App;
