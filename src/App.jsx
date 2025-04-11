import Hero from "./components/Hero/index.jsx"
import ActiveAuctions from "./components/ActiveAuctions/index.jsx"
import Navbar from "./components/Navbar/index.jsx";
import Footer from "./components/footer/footer.jsx";

function App() {
 
  return (
  <div className="w-full">
    <Navbar />
    <Hero />
    <ActiveAuctions />
    <Footer></Footer>
  </div>
  );
}

export default App;
