import React, { createContext, useState } from "react";
import AccordionContent from "./AccordionContent";
import Header from "./Header";

export const AccordionContext = createContext();
console.log(AccordionContext);

const { Provider } = AccordionContext;

const Accordion = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  const values = { isOpen, clickHandler };

  return <Provider value={values}>{children}</Provider>;
};
Accordion.Header = Header;
Accordion.Content = AccordionContent;

export default Accordion;
