import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';
import Feedback from './components/Feedback/Feedback.js';
import FoodItemsDisplay from "./components/FoodItems/FoodItemsDisplay.js";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/feedback" element={<Feedback />} />
        <Route exact path="/foodItems/:foodType" element={<FoodItemsDisplay />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
