import React, { createContext, useState } from "react";
import AccordionContent from "./AccordionContent";
import Header from "./Header";

export const AccordionContext = createContext();

const Accordion = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  const values = { isOpen, clickHandler };

  return (
    <AccordionContext.Provider value={values}>
      {children}
    </AccordionContext.Provider>
  );
};
Accordion.Header = Header;
Accordion.Content = AccordionContent;

export default Accordion;
