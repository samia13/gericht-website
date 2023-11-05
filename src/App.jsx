import {
  Header,
  Footer,
  Hero,
  About,
  Reservation,
  FoodGallery,
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
      </main>
      <Footer />
    </>
  );
}

export default App;
