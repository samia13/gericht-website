import { Header, Footer, Hero, About, Reservation } from "./components/index";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Reservation />
      </main>
      <Footer />
    </>
  );
}

export default App;
