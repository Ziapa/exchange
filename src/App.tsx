import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './App.css';
import {changeResultTC, changeValueAC, InitialAppStateType} from "./redux/app-reducer";
import {AppRootStateType, TypedDispatch} from "./redux/store";


function App() {

    const dispatch = useDispatch<TypedDispatch>()
    const data = useSelector<AppRootStateType, InitialAppStateType>(state => state.app)
    const currencyValue = [{value: "USD", label: "Долар"},
        {value: "RUB", label: "Рубль"},
        {value: "BYN", label: "Беларусский рубль"}]

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeValueAC(+e.currentTarget.value))
        dispatch(changeResultTC(select1, select2, data.changeValue))
    }
    const onChangeHandlerSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        if (e.currentTarget.id === "1") {
            setSelect1(e.currentTarget.value)
        } else if (e.currentTarget.id === "2") {
            setSelect2(e.currentTarget.value)
        }
    }

    useEffect(() => {

    }, [dispatch])

    const [select1, setSelect1] = useState<string>("RUB");
    const [select2, setSelect2] = useState<string>("USD");

    return (
        <div className="App">

            <div>
                <input type={"number"} placeholder={"0"} value={data.changeValue} onChange={onChangeHandler}/>

                <select id={"2"} value={select2} onChange={onChangeHandlerSelect}>
                    {currencyValue.map(el => <option value={el.value}> {el.label} </option>)}
                </select>


                <select id={"1"} value={select1} onChange={onChangeHandlerSelect}>
                    {currencyValue.map(el => <option value={el.value}> {el.label} </option>)}
                </select>

                <div>Результат: {data.changeResult}</div>

            </div>

            <div>Курс рубля: {data.rates.RUB}</div>
        </div>
    );
}

export default App;
