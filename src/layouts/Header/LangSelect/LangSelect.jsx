import React from "react";
import "./LangSelect.css";
import img from "../../../assets/icons/UzIcon.svg";
const LangSelect = () => {
  return (
    <>
      <div className="selectLang flex items-center justify-between gap-2">
        <img src={img} alt="" />
        <select className="w-[50px] outline-none bg-transparent ">
          <option className="outline:none">Ўз</option>
          <option className="outline:none">Ru</option>
          <option className="outline:none">Eng</option>
        </select>
      </div>
    </>
  );
};

export default LangSelect;
