import { useState } from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
  CardHeader,
} from 'reactstrap';
import classnames from 'classnames';
import { Section } from '../Section/Section';
import ContentBlock from '../ContentBlock/ContentBlock';
import type { FlexTabsLayout } from '@/components/templates/FlexContent/types';
import './tabset.css';

const Tabset = (props: FlexTabsLayout): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const { section, tabs } = props;
  const toggle = (index: number) => {
    if (activeTab !== index) {
      setActiveTab(index);
    }
  };

  const Tabs = tabs.map((tab, index) => {
    return (
      <NavItem key={index}>
        <NavLink
          onClick={() => {
            toggle(index);
          }}
          className={classnames({
            active: activeTab === index,
          })}>
          {tab.tabTitle}
        </NavLink>
      </NavItem>
    );
  });

  const TabPanels = tabs.map((tab, index) => {
    return (
      <TabPane tabId={index} key={`tab-${index}`}>
        <Card>
          <CardHeader>
            <NavLink
              onClick={() => {
                toggle(index);
              }}
              className={classnames({
                active: activeTab === index,
              })}>
              {tab.tabTitle}
            </NavLink>
          </CardHeader>
          {/* <Collapse isOpen={collapse}> */}
          <CardBody>
            <ContentBlock content={tab.tabContent} />
          </CardBody>
          {/* </Collapse> */}
        </Card>
      </TabPane>
    );
  });
  return (
    <Section {...section}>
      <Nav tabs>{Tabs}</Nav>
      <TabContent activeTab={activeTab}>{TabPanels}</TabContent>
    </Section>
  );
};

export default Tabset;
