import React, { useState } from "react";
import Card from "../Card/Card";
import Tab from "./Tab";

const TabWrapper = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const onChangeHandler = (index) => {
    setTabIndex(index);
  };

  return (
    <Card>
      <Tab onchange={onChangeHandler} currentTab={tabIndex}>
        <Tab.Header>
          <Tab.Item index={1}>Tab 1</Tab.Item>
          <Tab.Item index={2}>Tab 2</Tab.Item>
          <Tab.Item index={3}>Tab 3</Tab.Item>
        </Tab.Header>

        <Tab.Content>
          <Tab.ContentItems index={1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
            aspernatur.
          </Tab.ContentItems>
          <Tab.ContentItems index={2}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, unde!
          </Tab.ContentItems>
          <Tab.ContentItems index={3}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, hic.
          </Tab.ContentItems>
        </Tab.Content>
      </Tab>
    </Card>
  );
};

export default TabWrapper;
