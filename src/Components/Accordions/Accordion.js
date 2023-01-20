import React, { createContext, useState } from "react";

// context is a way for a component to share information with other components without having to pass props.
export const AccordionContext = createContext();

// Provider is component which is used to access the context within a component.
const { Provider } = AccordionContext;

const Accordion = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  const values = { isOpen, clickHandler };

  // value prop passed to the Provider component is used to set the value of the context that will be passed down to the Consumer components.
  return <Provider value={values}>{children}</Provider>;
};

export default Accordion;
