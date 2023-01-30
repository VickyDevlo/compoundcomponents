import React, { createContext } from "react";
import Content from "./Content";
import ContentItems from "./ContentItems";
import Header from "./Header";
import Item from "./Item";
import "./Tab.css";

export const TabContext = createContext();

const Tab = ({ children, onchange, currentTab }) => {
  return (
    <TabContext.Provider value={{ onchange, currentTab }}>
      {children}
    </TabContext.Provider>
  );
};

Tab.Header = Header;
Tab.Item = Item;
Tab.Content = Content;
Tab.ContentItems = ContentItems;

export default Tab;
