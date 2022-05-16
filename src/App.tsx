import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {NavBar,CurrencyForm} from "./commponent";


function App() {


    return (
        <div className="App">

            <NavBar/>

            <Routes>

                <Route path="/"
                       element={<CurrencyForm collapsedInput={false}/>}/>

                <Route path="ExchangeByValue"
                       element={<CurrencyForm collapsedInput={false}/>}/>

                <Route path="ExchangeRates"
                       element={<CurrencyForm collapsedInput={true}/>}/>
            </Routes>

        </div>
    );
}

export default App;
