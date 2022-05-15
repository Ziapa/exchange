import React, {ChangeEvent} from "react";
import s from "./Select.module.scss"

type SelectPropsType = {
    value: string
    onChangeHandler: (e: ChangeEvent<HTMLSelectElement>) => void
    currencyList: Array<{value: string, label: string}>
    id: string
}


export const Select = ({id, value,onChangeHandler, currencyList }: SelectPropsType) => (
    <div>
        <select className={s.select} id={id} value={value} onChange={onChangeHandler}>
            {currencyList.map(({value, label}) => <option value={value}> {label} </option>)}
        </select>
    </div>
)