import React, { createContext, useContext } from "react";
import "./Tab.css";

const TabContext = createContext();

const Tab = ({ children, onchange, currentTab }) => {
  return (
    <TabContext.Provider value={{ onchange, currentTab }}>
      {children}
    </TabContext.Provider>
  );
};

const Header = ({ children }) => {
  return (
    <div className="tabHeader">
      {children}
    </div>
  );
};

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

const Content = ({ children }) => {
  return (
    <div className="tabContent">
      {children}
    </div>
  );
};

const ContentItems = ({ children, index }) => {
  const { currentTab } = useContext(TabContext);
  return (
    <>
      {index === currentTab ? (
        <div div className="tabContentItems">
          {children}
        </div>
      ) : null}
    </>
  );
};

Tab.Header = Header;
Tab.Item = Item;
Tab.Content = Content;
Tab.ContentItems = ContentItems;

export default Tab;
