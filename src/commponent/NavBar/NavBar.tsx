import React from "react";
import s from "./NavBar.module.scss"
import {NavLink} from "react-router-dom";

type SelectPropsType = {

}

const NavLinks = [
    {to: "ExchangeByValue", name: "Обмен"},
    {to: "ExchangeRates", name: "Курс валют"},
]



export const NavBar = (props: SelectPropsType) => {
    return (
        <div className={s.wrapper}>

            {NavLinks.map((el) => {
               return <NavLink className={({isActive}) => isActive ? s.active : ""} to={el.to}>{el.name}</NavLink>
            })}


        </div>
    )
}