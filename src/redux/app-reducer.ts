import {Dispatch} from "redux";
import {appAPI} from "../DAL/api";

type AppStateType = {}


export type InitialAppStateType = {
    "success": boolean
    "timestamp": number
    "base": string
    "date": string
    "rates": { [key: string]: number }
    changeResult: number
    changeValue: number
}


type ActionsType = AddDateACType
    | ChangeValueACType
    | ChangeResultACType

const initialState = {
    success: true,
    timestamp: 1652362684,
    base: "EUR",
    date: "2022-05-12",
    rates: {},
    changeResult: 0,
    changeValue: 0
}

export type AddDateACType = ReturnType<typeof addDateAC>
export type ChangeValueACType = ReturnType<typeof changeValueAC>
export type ChangeResultACType = ReturnType<typeof changeResultAC>

export const appReducer = (state: InitialAppStateType = initialState, action: ActionsType): AppStateType => {
    switch (action.type) {

        case "SET_DATA":
            return {...action.payload}
        case "SET_CHANGE_RESULT":
            return {...state, changeResult: action.payload}
        case "SET_CHANGE_VALUE":
            return {...state, changeValue: action.payload}

        default:
            return state
    }
}
//ActionCreators
export const addDateAC = (payload: InitialAppStateType) => ({type: "SET_DATA", payload}) as const
export const changeValueAC = (payload: number) => ({type: "SET_CHANGE_VALUE", payload}) as const
export const changeResultAC = (payload: number) => ({type: "SET_CHANGE_RESULT", payload}) as const

//THUNKCreators
export const addDateTC = () => {
    return (dispatch: Dispatch) => {
        appAPI.getData()
            .then(res => {
                dispatch(addDateAC(res.data))
            })
    }
}
export const changeResultTC = (to: string, from: string, amount: number) => {
    return (dispatch: Dispatch) => {
        appAPI.convert(to, from, amount)
            .then(res => {
                dispatch(changeResultAC(res.data.result))
            })
    }
}