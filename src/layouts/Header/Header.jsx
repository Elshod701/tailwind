import React from "react";
import logo from "../../assets/images/Logo.png";
import Select from "./Select/Select";
import Input from "./Input/Input";
import LangSelect from "./LangSelect/LangSelect";
import Btn from "../../components/Btn/btn";

const Header = () => {
  return (
    <header>
      <div className="container w-[1620px]">
        <div className="nav_up flex items-center py-5 gap-12">
          <img src={logo} alt="logo" tit />
          <div className="flex items-center gap-1">
            <Select />
            <Input />
          </div>
          <LangSelect />
          <Btn className="bg-[#3F51B5] py-[7px] px-[24px] text-[18px] font-bold text-white leading-[30px]">
            Кириш
          </Btn>
        </div>
        <div className="nav_bottom   py-2 border-b-2 border-[solid bg-gray-500] border-t-2">
          {/* REACT ROUTER DOM */}
          <ul className="py-1 flex font-bold text-[#3F51B5] text-base items-start gap-5 ">
            <li>
              <a href="">Биз хақимизда</a>
            </li>
            <li>
              <a href="">Электрон китоблар</a>
            </li>
            <li>
              <a href="">Электрон китоблар</a>
            </li>
            <li>
              <a href="">Контакт</a>
            </li>
            <li>
              <a href="">Биз хақимизда</a>
            </li>
          </ul>
          {/* REACT ROUTER DOM */}
        </div>
      </div>
    </header>
  );
};

export default Header;
