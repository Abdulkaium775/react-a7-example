import Hero from "./components/Hero/index.jsx"
import ActiveAuctions from "./components/ActiveAuctions/index.jsx"
import Navbar from "./components/Navbar/index.jsx";

function App() {
 
  return (
  <div className="w-full">
    <Navbar />
    <Hero />
    <ActiveAuctions />
  </div>
  );
}

export default App;
