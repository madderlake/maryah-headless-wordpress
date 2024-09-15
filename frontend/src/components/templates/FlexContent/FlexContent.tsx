'use client';
import { Section } from '@/components/layout/Section/Section';
import Tabset from '@/components/layout/Tabset/Tabset';
import Cardset from '@/components/layout/Cards/Cards';
import Columns from '@/components/layout/Columns/Columns';
import { ACFLayout } from '@/components/types';
import './index.css';
import { Page } from '@/types/pages/page';

type FlexData = {
  slug: string;
  flexTemplate: {
    pageTitleGroup: {
      pageTitle: string;
      pageTitleClass: string;
    };
    flexContent: ACFLayout[];
  };
};

const FlexContent = (data: Page & FlexData) => {
  if (!data) return;
  const { flexTemplate, slug } = data;
  const { flexContent, pageTitleGroup } = flexTemplate;
  // const layouts = flexContent;
  const pageTitle = pageTitleGroup.pageTitle;
  const pageTitleClass = pageTitleGroup.pageTitleClass;
  console.log(flexContent);

  // const Layouts = [...layouts].map((layout: ACFLayout, index) => {
  //   console.log('layouts', Object.values(layouts));
  const Layouts = Object.values(flexContent).map(
    (layout: ACFLayout, index: number) => {
      const { sectionM, tabs, cards, columns } = layout;

      const cardProps = { section: sectionM, cards };

      return tabs ? (
        <Tabset key={index} {...sectionM} {...tabs} />
      ) : columns ? (
        <Columns key={index} {...sectionM} {...columns} />
      ) : cards ? (
        <Cardset key={index} {...cardProps} />
      ) : sectionM ? (
        <Section key={index} {...sectionM} />
      ) : null;
    }
  );
  // });

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
