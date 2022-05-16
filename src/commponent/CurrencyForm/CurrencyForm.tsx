import React, {ChangeEvent, useEffect, useState} from "react";
import {Select} from "../";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, TypedDispatch} from "../../redux/store";
import {changeResultTC, changeValueAC, InitialAppStateType} from "../../redux/app-reducer";
import {Input} from "../";
import s from "./CurrencyForm.module.scss"
import {IoArrowDownSharp, IoArrowForwardSharp} from "react-icons/io5";

type ChangePropsType = {
    collapsedInput: boolean
}

export const CurrencyForm = (props: ChangePropsType) => {

    const [selectTo, setSelectTo] = useState<string>("RUB");
    const [selectFrom, setSelectFrom] = useState<string>("USD");

    const dispatch = useDispatch<TypedDispatch>()
    const data = useSelector<AppRootStateType, InitialAppStateType>(state => state.app)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeValueAC(+e.currentTarget.value))
        dispatch(changeResultTC(selectFrom, selectTo, Number(e.currentTarget.value)))
    }
    const onChangeHandlerSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        if (e.currentTarget.id === "from") {
            setSelectFrom(e.currentTarget.value)
            dispatch(changeResultTC(selectTo, e.currentTarget.value, props.collapsedInput ? 1 : data.changeValue))
        } else if (e.currentTarget.id === "to") {
            setSelectTo(e.currentTarget.value)
            dispatch(changeResultTC(e.currentTarget.value, selectFrom, props.collapsedInput ? 1 : data.changeValue))
        }
    }

    useEffect(() => {
        dispatch(changeResultTC(selectTo, selectFrom, 1))
    }, [])

    return (
        <div className={s.wrapper}>

            <div className={s.wrapper_change}>
                <div className={s.wrapper_change__to}>
                    <Select id={"to"} value={selectTo} onChangeHandler={onChangeHandlerSelect}
                            currencyList={data.currencyList}/>

                    {props.collapsedInput || <Input changeValue={data.changeValue} onChangeHandler={onChangeHandler}/>}
                </div>

                <div className={s.wrapper_change__icoRight}>
                    <IoArrowForwardSharp/>
                </div>

                <div className={s.wrapper_change__icoDown}>
                    <IoArrowDownSharp/>
                </div>

                <div className={s.wrapper_change__from}>
                    <Select id={"from"} value={selectFrom} onChangeHandler={onChangeHandlerSelect}
                            currencyList={data.currencyList}/>
                    {props.collapsedInput || <div>Результат обмена: {data.changeResult}</div>}
                </div>
            </div>
            {!props.collapsedInput ||
                <div className={s.wrapper_result}>Курс 1 {selectTo} к 1 {selectFrom}: {data.changeResult}</div>}

        </div>
    )
}