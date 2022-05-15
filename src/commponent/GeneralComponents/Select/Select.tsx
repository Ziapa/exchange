import React, {ChangeEvent} from "react";
import s from "./Select.module.scss"

type SelectPropsType = {
    value: string
    onChangeHandler: (e: ChangeEvent<HTMLSelectElement>) => void
    currencyList: Array<{value: string, label: string}>
    id: string
}


export const Select = (props: SelectPropsType) => {
    return (
        <div>
            <select className={s.select} id={props.id} value={props.value} onChange={props.onChangeHandler}>
                {props.currencyList.map(el => <option value={el.value}> {el.label} </option>)}
            </select>
        </div>
    )
}