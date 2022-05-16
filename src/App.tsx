import React from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";

import { CurrencyForm, NavBar } from "./commponent";

const App: React.FC<any> = () => (
  <div className="App">
    <NavBar />
    <Routes>
      <Route path="/" element={<CurrencyForm collapsedInput={false} />} />
      <Route path="ExchangeByValue" element={<CurrencyForm collapsedInput={false} />} />
      <Route path="ExchangeRates" element={<CurrencyForm collapsedInput />} />
    </Routes>
  </div>
);

export default App;
