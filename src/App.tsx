import React from 'react';
import './App.css';
import {Change} from "./commponent/Change/Change";
import {Link, Route, Routes} from "react-router-dom";
import {NavBar} from "./commponent/NavBar/NavBar";


function App() {


    return (
        <div className="App">

            <NavBar/>

            <Routes>

                <Route path="/"
                       element={<Change collapsedInput={false}/>}/>

                <Route path="ExchangeByValue"
                       element={<Change collapsedInput={false}/>}/>

                <Route path="ExchangeRates"
                       element={<Change collapsedInput={true}/>}/>
            </Routes>

        </div>
    );
}

export default App;
