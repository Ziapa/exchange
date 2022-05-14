import React from 'react';
import './App.css';
import {Change} from "./commponent/Change/Change";
import {Link, Route, Routes} from "react-router-dom";


function App() {


    return (
        <div className="App">

            <Link to={"ExchangeByValue"}>{"Обмен"}</Link>
            <Link to={"ExchangeRates"}>{"Курс валют"}</Link>

            <Routes>
                <Route path="ExchangeByValue"
                       element={<Change collapsedInput={false}/>}/>

                <Route path="ExchangeRates"
                       element={<Change collapsedInput={true}/>}/>
            </Routes>

        </div>
    );
}

export default App;
