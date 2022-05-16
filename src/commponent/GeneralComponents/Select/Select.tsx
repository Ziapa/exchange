import React, { ChangeEvent } from "react";

import s from "./Select.module.scss";

type SelectPropsType = {
  valueSelect: string;
  onChangeHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
  currencyList: Array<{ value: string; label: string }>;
  id: string;
};

export const Select: React.FC<SelectPropsType> = ({
  id,
  valueSelect,
  onChangeHandler,
  currencyList,
}) => (
  <div>
    <select className={s.select} id={id} value={valueSelect} onChange={onChangeHandler}>
      {currencyList.map(({ value, label }) => (
        <option key={value} value={value}>
          {" "}
          {label}{" "}
        </option>
      ))}
    </select>
  </div>
);
