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
                    <Tab.ContentItems index={1}>Tab 1</Tab.ContentItems>
                    <Tab.ContentItems index={2}>Tab 2</Tab.ContentItems>
                    <Tab.ContentItems index={3}>Tab 3</Tab.ContentItems>
                </Tab.Content>
            </Tab>
        </Card>
    );
};

export default TabWrapper;
