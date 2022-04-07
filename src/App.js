import { BrowserRouter } from "react-router-dom";
import "./css/App.css";
import Navbar from "./components/Navbar";
import Pages from "./Pages/Pages";
import { motion } from "framer-motion";

const App = () => {
  return (
    <motion.div className="App">
      <BrowserRouter>
        <Navbar />
        <Pages />
      </BrowserRouter>
    </motion.div>
  );
};

export default App;
