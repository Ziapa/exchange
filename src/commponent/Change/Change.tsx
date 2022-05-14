import React, {ChangeEvent, useState} from "react";
import {Select} from "../GeneralComponents/Select/Select";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, TypedDispatch} from "../../redux/store";
import {changeResultTC, changeValueAC, InitialAppStateType} from "../../redux/app-reducer";

type ChangePropsType = {
    collapsedInput: boolean
}

export const Change = (props: ChangePropsType) => {

    const dispatch = useDispatch<TypedDispatch>()
    const data = useSelector<AppRootStateType, InitialAppStateType>(state => state.app)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeValueAC(+e.currentTarget.value))
        dispatch(changeResultTC(select1, select2, Number(e.currentTarget.value) ))
    }
    const onChangeHandlerSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        if (e.currentTarget.id === "2") {
            setSelect1(e.currentTarget.value)
            dispatch(changeResultTC(e.currentTarget.value, select1, data.changeValue))
        } else if (e.currentTarget.id === "1") {
            setSelect2(e.currentTarget.value)
            dispatch(changeResultTC(select2, e.currentTarget.value, data.changeValue))
        }
    }

    const [select1, setSelect1] = useState<string>("USD");
    const [select2, setSelect2] = useState<string>("RUB");

    return (
        <div>

            {props.collapsedInput || <input type={"number"} placeholder={"0"} value={data.changeValue} onChange={() => onChangeHandler}/>}

            <Select id={"1"} value={select2} onChangeHandler={onChangeHandlerSelect} currencyList={data.currencyList}/>
            <Select id={"2"} value={select1} onChangeHandler={onChangeHandlerSelect} currencyList={data.currencyList}/>


            Результат: {data.changeResult}
        </div>
    )
}