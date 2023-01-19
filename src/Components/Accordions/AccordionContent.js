import React, { useContext } from "react";
import { AccordionContext } from "./Accordion";

const AccordionContent = ({ children }) => {
  const { isOpen } = useContext(AccordionContext);

  return isOpen && <div>{children}</div>;
};

export default AccordionContent;
