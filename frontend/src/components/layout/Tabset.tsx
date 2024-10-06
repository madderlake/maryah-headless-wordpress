import { useState } from 'react';
import { Section } from '@/components/layout/Section';
import ContentBlock from '@/components/core/ContentBlock';
import type { FlexTabsLayout } from '@/components/templates/FlexContent/types';

const Tabset = (props: FlexTabsLayout): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const { section, tabs } = props;
  const toggle = (index: number) => {
    if (activeTab !== index) {
      setActiveTab(index);
    }
  };

  const Tabs = tabs.map((tab, index) => {
    const isActive = index === activeTab;
    const activeClass = isActive
      ? 'font-bold text-white bg-red-400 w-24'
      : undefined;
    return (
      <button
        key={`button-${index}`}
        onClick={() => {
          toggle(index);
        }}
        className={activeClass}>
        {tab.tabTitle}
      </button>
    );
  });

  return (
    <Section {...section}>
      <div className="flex gap-10">{Tabs}</div>
      {tabs.map((tab, index) => {
        return (
          <div key={`tab-${index}`}>
            <div className={index === activeTab ? 'block' : 'hidden'}>
              <ContentBlock content={tab.tabContent} />
            </div>
          </div>
        );
      })}
    </Section>
  );
};

export default Tabset;
