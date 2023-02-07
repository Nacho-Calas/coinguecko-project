import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoinDetails from "./pages/CoinDetail";
import Home from "./pages/Home";
import { useGetCoins } from "./hooks/useGetCoins";

function App() {
  useGetCoins();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins/:id" element={<CoinDetails/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
