import "./styles/tailwind.scss";

import Navbar from "./layouts/Navbar";
import Header from "./layouts/Header";
import About from "./layouts/About";
import Values from "./layouts/Values";
import Works from "./layouts/Works";
import Hiring from "./layouts/Hiring";
import Subscribe from "./layouts/Subscribe";
import Footer from "./layouts/Footer";

function App() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Navbar />
      <Header />
      <About />
      <Values />
      <Works />
      <Hiring />
      <Subscribe />
      <Footer />
    </main>
  );
}

export default App;
