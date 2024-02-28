import Header from "./components/Header";
import MobileNav from "./components/MobileNav";
import DesktopNav from "./components/DesktopNav";
import Main from "./components/Main";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import UseWindowSize from "./utils/UseWindowSize";

function App() {
  const { width } = UseWindowSize();
  const isSmallScreen = width <= 1024;

  return (
    <>
      <Main>
        <Hero>
          <Header>{isSmallScreen ? <MobileNav /> : <DesktopNav />}</Header>
        </Hero>
        <About />
        <Products />
        <Contact />
      </Main>
      <Footer />
    </>
  );
}

export default App;
