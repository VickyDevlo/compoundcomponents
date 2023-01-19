import React, { useContext } from "react";
import { AccordionContext } from "./Accordion";
import "./Header.css";

const Header = ({ children }) => {
  const { clickHandler } = useContext(AccordionContext);

  return <div className="headerWrapper" onClick={clickHandler}>{children}</div>;
};

export default Header;
