import Data from "./components/ui/Data";
import Home from "./components/ui/Home";
import Navbar from "./components/ui/Navbar";
import Pricing from "./components/ui/Pricing";

export default function App() {
  return (
    <main className="max-w-[1240px] mx-auto">
      <Navbar />
      <Home />
      <Data />
      <Pricing />
    </main>
  );
}
