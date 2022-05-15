import React, {ChangeEvent} from "react";
import s from "./Input.module.scss"

type SelectPropsType = {
    changeValue: number
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}


export const Input = (props: SelectPropsType) => {
    return (
        <div>
            <input className={s.input} type={"number"} min={0} placeholder={"0"} value={props.changeValue} onChange={props.onChangeHandler}/>
        </div>
    )
}