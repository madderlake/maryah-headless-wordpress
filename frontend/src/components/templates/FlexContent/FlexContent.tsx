'use client';
import { Section } from '@/components/layout/Section/Section';
import Tabset from '@/components/layout/Tabset/Tabset';
import Cardset from '@/components/layout/Cards/Cards';
import Columns from '@/components/layout/Columns/Columns';
import { ACFLayout } from './types';
import { WPPage } from '@/types/pages/wp-page';
import './index.css';

const FlexContent = (data: WPPage) => {
  if (!data) return;
  const { slug, template } = data;

  const flexTemplate = template?.flexTemplate;

  const pageTitleGroup = flexTemplate?.pageTitleGroup;
  const pageTitle = pageTitleGroup?.pageTitle;
  const pageTitleClass = pageTitleGroup?.pageTitleClass;
  const flexContent = flexTemplate?.flexContent as ACFLayout[];

  const Layouts = Object.values(flexContent).map((layout, index: number) => {
    const { sectionM, tabs, cards, columns } = layout;

    const cardProps = { section: sectionM, cards };
    const columnProps = { section: sectionM, columns };
    const tabProps = { section: sectionM, tabs };
    return tabs ? (
      <Tabset key={index} {...tabProps} />
    ) : columns ? (
      <Columns {...columnProps} key={index} />
    ) : cards ? (
      <Cardset key={index} {...cardProps} />
    ) : sectionM ? (
      <Section key={index} {...sectionM} />
    ) : null;
  });

  return (
    <div className={`${slug} `}>
      {pageTitle && (
        <h1 className={`container ${pageTitleClass}`}>{pageTitle}</h1>
      )}
      {Layouts}
    </div>
  );
};

export default FlexContent;
