import React, { ChangeEvent, useEffect, useState } from "react";

import { IoArrowDownSharp, IoArrowForwardSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

import { Input, Select } from "..";
import {
  changeResultTC,
  changeValueAC,
  InitialAppStateType,
} from "../../redux/app-reducer";
import { AppRootStateType, TypedDispatch } from "../../redux/store";

import s from "./CurrencyForm.module.scss";

type ChangePropsType = {
  collapsedInput: boolean;
};

export const CurrencyForm: React.FC<ChangePropsType> = ({ collapsedInput }) => {
  const [selectTo, setSelectTo] = useState("RUB");
  const [selectFrom, setSelectFrom] = useState("USD");

  const magicNumber = 1;

  const dispatch = useDispatch<TypedDispatch>();
  const data = useSelector<AppRootStateType, InitialAppStateType>(state => state.app);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(changeValueAC(+e.currentTarget.value));
    dispatch(changeResultTC(selectFrom, selectTo, Number(e.currentTarget.value)));
  };
  const onChangeHandlerSelect = (e: ChangeEvent<HTMLSelectElement>): void => {
    if (e.currentTarget.id === "from") {
      setSelectFrom(e.currentTarget.value);
      dispatch(
        changeResultTC(
          selectTo,
          e.currentTarget.value,
          collapsedInput ? magicNumber : data.changeValue,
        ),
      );
    } else if (e.currentTarget.id === "to") {
      setSelectTo(e.currentTarget.value);
      dispatch(
        changeResultTC(
          e.currentTarget.value,
          selectFrom,
          collapsedInput ? magicNumber : data.changeValue,
        ),
      );
    }
  };

  useEffect(() => {
    dispatch(changeResultTC(selectTo, selectFrom, magicNumber));
  }, []);

  return (
    <div className={s.wrapper}>
      <div className={s.wrapper_change}>
        <div className={s.wrapper_change__to}>
          <Select
            id="to"
            valueSelect={selectTo}
            onChangeHandler={onChangeHandlerSelect}
            currencyList={data.currencyList}
          />

          {collapsedInput || (
            <Input changeValue={data.changeValue} onChangeHandler={onChangeHandler} />
          )}
        </div>

        <div className={s.wrapper_change__icoRight}>
          <IoArrowForwardSharp />
        </div>

        <div className={s.wrapper_change__icoDown}>
          <IoArrowDownSharp />
        </div>

        <div className={s.wrapper_change__from}>
          <Select
            id="from"
            valueSelect={selectFrom}
            onChangeHandler={onChangeHandlerSelect}
            currencyList={data.currencyList}
          />
          {collapsedInput || <div>Результат обмена: {data.changeResult}</div>}
        </div>
      </div>
      {!collapsedInput || (
        <div className={s.wrapper_result}>
          Курс 1 {selectTo} к 1 {selectFrom}: {data.changeResult}
        </div>
      )}
    </div>
  );
};
