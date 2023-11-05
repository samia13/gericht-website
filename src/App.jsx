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
      </main>
      <Footer />
    </>
  );
}

export default App;
