import {Dispatch} from "redux";
import {appAPI} from "../DAL/api";

export type InitialAppStateType = {
    changeResult: number
    changeValue: number
    currencyList: Array<{ value: string; label: string; }>
    NavLinks: Array<{to: string, name: string}>
}

type ActionsType =
    | ChangeValueACType
    | ChangeResultACType

const initialState = {
    changeResult: 0,
    changeValue: 1,
    NavLinks: [
        {to: "ExchangeByValue", name: "Обмен"},
        {to: "ExchangeRates", name: "Курс валют"},
    ],
    currencyList: [
        {value: "USD", label: "Долар"},
        {value: "RUB", label: "Рубль"},
        {value: "EUR", label: "Евро"}]
}

export type ChangeValueACType = ReturnType<typeof changeValueAC>
export type ChangeResultACType = ReturnType<typeof changeResultAC>

export const appReducer = (state: InitialAppStateType = initialState, action: ActionsType) => {
    switch (action.type) {

        case "SET_CHANGE_RESULT":
            return {...state, changeResult: action.payload}
        case "SET_CHANGE_VALUE":
            return  {...state, changeValue: action.payload}

        default:
            return state
    }
}
//ActionCreators
export const changeValueAC = (payload: number) => ({type: "SET_CHANGE_VALUE", payload}) as const
export const changeResultAC = (payload: number) => ({type: "SET_CHANGE_RESULT", payload}) as const

//THUNKCreators

export const changeResultTC = (to: string, from: string, amount: number) => {
    return (dispatch: Dispatch) => {
        appAPI.convert(to, from, amount)
            .then(({data}) => {
                dispatch(changeResultAC(data.result))
            })
    }
}