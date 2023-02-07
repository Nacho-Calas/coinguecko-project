import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoinDetails from "./pages/CoinDetail";
import Home from "./pages/Home";

import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { getCoins } from "./redux/actions/actions";
import { AppDispatch } from "./redux/store/store"



function App() {

const dispatch = useDispatch<AppDispatch>()
useEffect(() => {
  dispatch(getCoins())
}, [])


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins/:id" element={<CoinDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
