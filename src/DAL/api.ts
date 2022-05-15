import axios from 'axios'
import {InitialAppStateType} from "../redux/app-reducer";



type ConvertType = {
    date: string
    info: {[key: string]: number}
    query: {from: string, to: string, amount: number}
    result: number
    success: boolean
}


const instance = axios.create({
    baseURL: 'https://api.apilayer.com/exchangerates_data/',
    headers: {
        "apikey": "no4OqfS4zLKnKXJsluAV49xp1TPSK42d",
    },
})

export const appAPI = {
    getData() {
        return instance.get<InitialAppStateType>("latest")
    },

    convert(to:string, from: string, amount:number) {
        return instance.get<ConvertType>(`convert?to=${to}&from=${from}&amount=${amount}`)
    }
}