import React from "react";
import Search_icon from "../../../assets/icons/search_icon";
import "./Input.css";

const Input = () => {
  return (
    <>
      <form
        action="#"
        className=" form px-[23px] h-[50px] w-[635px] flex gap-5 items-center"
      >
        <input
          type="text"
          placeholder="Қидириш"
          className="input outline-none w-[100%] flex-grow-1 h-[100%]"
        />
        <Search_icon />
      </form>
    </>
  );
};

export default Input;
