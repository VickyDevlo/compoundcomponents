import React, { useContext } from "react";
import { TabContext } from "./Tab";

const Item = ({ children, index }) => {
    const { onchange, currentTab } = useContext(TabContext);
    const clickHandler = () => {
        onchange(index);
    };

    return (
        <div
            className={index === currentTab ? "active tabItem" : "tabItem"}
            onClick={clickHandler}
        >
            {children}
        </div>
    );
};

export default Item;
