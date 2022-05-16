import React, { ChangeEvent } from "react";

import s from "./Input.module.scss";

type SelectPropsType = {
  changeValue: number;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<SelectPropsType> = ({ changeValue, onChangeHandler }) => (
  <div>
    <input
      className={s.input}
      type="number"
      min={0}
      placeholder="0"
      value={changeValue}
      onChange={onChangeHandler}
    />
  </div>
);
