import { BrowserRouter } from "react-router-dom"
import "./css/App.css"
import Navbar from "./components/Navbar"
import Pages from "./Pages/Pages"

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navBar">
          <Navbar />
        </nav>
        <Pages />
      </BrowserRouter>
    </div>
  )
}

export default App
