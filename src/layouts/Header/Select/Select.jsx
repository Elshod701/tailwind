import React from "react";
import SelectImg from "../../../assets/images/menu.png";
import "./Select.css";
const Select = () => {
  return (
    <>
      <div className="select flex items-center justify-between">
        <img src={SelectImg} alt="" />
        <select className="outline-none border-none w-[100px] ">
          <option className="outline:none" value="1">
            Рукнлар 1
          </option>
          <option className="outline:none" value="1">
            Рукнлар 2
          </option>
          <option className="outline:none" value="1">
            Рукнлар 3
          </option>
        </select>
      </div>
    </>
  );
};

export default Select;
