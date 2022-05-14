import React, {ChangeEvent} from "react";

type SelectPropsType = {
    value: string
    onChangeHandler: (e: ChangeEvent<HTMLSelectElement>) => void
    currencyList: Array<{value: string, label: string}>
    id: string
}


export const Select = (props: SelectPropsType) => {
    return (
        <div>
            <select id={props.id} value={props.value} onChange={props.onChangeHandler}>
                {props.currencyList.map(el => <option value={el.value}> {el.label} </option>)}
            </select>
        </div>
    )
}