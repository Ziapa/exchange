import React from "react";

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { InitialAppStateType } from "../../redux/app-reducer";
import { AppRootStateType } from "../../redux/store";

import s from "./NavBar.module.scss";

export const NavBar: React.FC<any> = () => {
  const data = useSelector<AppRootStateType, InitialAppStateType>(state => state.app);

  return (
    <div className={s.wrapper}>
      {data.NavLinks.map(({ to, name }) => (
        <NavLink
          key={name}
          className={({ isActive }) => (isActive ? s.active : "")}
          to={to}
        >
          {name}
        </NavLink>
      ))}
    </div>
  );
};
