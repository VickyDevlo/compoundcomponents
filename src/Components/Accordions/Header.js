import React, { useContext } from "react";
import { AccordionContext } from "./Accordion";

const Header = ({ children }) => {
  const { clickHandler } = useContext(AccordionContext);

  return (
    <div
      onClick={clickHandler}
      style={{
        display: "grid",
      }}
    >
      {children}
    </div>
  );
};

export default Header;
