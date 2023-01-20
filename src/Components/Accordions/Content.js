import React, { useContext } from "react";
import { AccordionContext } from "./Accordion";

const Content = ({ children }) => {
  
  const { isOpen } = useContext(AccordionContext);

  return isOpen && <div>{children}</div>;
};

export default Content;
