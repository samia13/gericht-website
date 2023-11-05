import {
  Header,
  Footer,
  Hero,
  About,
  Reservation,
  FoodGallery,
  Direction,
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
        <Direction />
      </main>
      <Footer />
    </>
  );
}

export default App;
