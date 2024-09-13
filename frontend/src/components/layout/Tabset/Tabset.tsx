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
import type { SectionProps, TabProps } from '../../types';
import './tabset.css';

const Tabset = (tabs: TabProps[], section: SectionProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);
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
          {tab.tab_title}
        </NavLink>
      </NavItem>
    );
  });

  const TabPanes = tabs.map((tab, index) => {
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
    <Section {...section}>
      <Nav tabs>{Tabs}</Nav>
      <TabContent activeTab={activeTab}>{TabPanes}</TabContent>
    </Section>
  );
};

export default Tabset;
