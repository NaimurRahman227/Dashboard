import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
      delay: 100,
    });
  }, []);

  return (
    <BrowserRouter>
    <Dashboard />
    </BrowserRouter>
  );
}

export default App;