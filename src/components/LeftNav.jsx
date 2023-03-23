import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../contextApi/context";
import { categories } from "../utils/constans";
import LeftNavMenuItem from "./LeftNavMenuItem";

const LeftNav = () => {
  const { selecteCategory, setSelecteCategory, mobilMenu } =
    useContext(Context);
  const navigate = useNavigate();
  const handelClick = (type, name) => {
    switch (type) {
      case "category":
        return setSelecteCategory(name);
      case "home":
        return setSelecteCategory(name);
      case "menu":
        return setSelecteCategory(false);
      default:
        break;
    }
  };
  return (
    <div
      className={`md:block w-[200px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10  md:translate-x-0 transition-all ${
        mobilMenu ? "translate-x-0" : "translate-x-[-200px]"
      }`}
    >
      <div className="flex px-5 flex-col">
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <LeftNavMenuItem
                text={item.type === "home" ? "Home" : item.name}
                icon={item.icon}
                action={() => {
                  handelClick(item.type, item.name);
                  navigate("/");
                }}
                className={`${
                  selecteCategory === item.name ? "bg-white/[0.15]" : ""
                }`}
              />
              {item.divider && <hr className="my-5 border-white/[0.2]" />}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default LeftNav;
