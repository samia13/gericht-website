import {
  Header,
  Footer,
  Hero,
  About,
  Reservation,
  FoodGallery,
  Awards,
  ChefWord,
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
      </main>
      <Footer />
    </>
  );
}

export default App;
