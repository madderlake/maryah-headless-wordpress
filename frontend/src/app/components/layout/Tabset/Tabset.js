import React, { useState } from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
  CardHeader
} from 'reactstrap';
import classnames from 'classnames';
import { Section } from '../Section/Section';
import ContentBlock from '../../utilities/ContentBlock';
import './tabset.css';

const Tabset = props => {
  const [activeTab, setActiveTab] = useState(0);
  const toggle = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const section = props.section;
  const tabList = props.tab;

  const getTabs = tabList.map((tab, index) => {
    return (
      <NavItem key={index}>
        <NavLink
          onClick={() => {
            toggle(index);
          }}
          className={classnames({
            active: activeTab === index
          })}
        >
          {tab.tab_title}
        </NavLink>
      </NavItem>
    );
  });

  const getTabPanes = tabList.map((tab, index) => {
    return (
      <TabPane tabId={index} key={`tab-${index}`}>
        <Card>
          <CardHeader>
            <NavLink
              onClick={() => {
                toggle(index);
              }}
              className={classnames({
                active: activeTab === index
              })}
            >
              {tab.tab_title}
            </NavLink>
          </CardHeader>
          {/* <Collapse isOpen={collapse}> */}
          <CardBody>
            <ContentBlock content={tab.tab_content} />
          </CardBody>
          {/* </Collapse> */}
        </Card>
      </TabPane>
    );
  });
  return (
    <Section className={section.section_class} section={section}>
      <Nav tabs>{getTabs}</Nav>
      <TabContent activeTab={activeTab}>{getTabPanes}</TabContent>
    </Section>
  );
};

export default Tabset;
