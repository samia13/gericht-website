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
      </main>
      <Footer />
    </>
  );
}

export default App;
