import React, { useContext } from "react";
import { TabContext } from "./Tab";

const ContentItems = ({ children, index }) => {
  const { currentTab } = useContext(TabContext);
  return (
    <>
      {index === currentTab ? (
        <div className="tabContentItems">
          {children}
        </div>
      ) : null}
    </>
  );
};

export default ContentItems;
