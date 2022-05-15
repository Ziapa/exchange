import React from "react";
import s from "./NavBar.module.scss"
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {InitialAppStateType} from "../../redux/app-reducer";

export const NavBar = () => {

    const data = useSelector<AppRootStateType, InitialAppStateType>(state => state.app)

    return (
        <div className={s.wrapper}>
            {data.NavLinks.map(({to, name}) => <NavLink className={({isActive}) => isActive ? s.active : ""}
                                                        to={to}>{name}</NavLink>)}
        </div>
    )
}