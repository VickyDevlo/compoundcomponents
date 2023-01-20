import React, { createContext, useState } from "react";
import AccordionContent from "./AccordionContent";
import Header from "./Header";

// context is a way for a component to share information with other components without having to pass props.
export const AccordionContext = createContext();

// Provider is component which is used to access the context within a component.
const { Provider } = AccordionContext;

const Accordion = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  // value prop passed to the Provider component is used to set the value of the context that will be passed down to the Consumer components.
  const values = { isOpen, clickHandler };

  return <Provider value={values}>{children}</Provider>;
};

// Consumer to access the data provided by the Provider component.
Accordion.Header = Header;
Accordion.Content = AccordionContent;

export default Accordion;
