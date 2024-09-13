import React from 'react';
import { Section } from '../../layout/Section/Section';
import Tabset from '../../layout/Tabset/Tabset';
import Cardset from '../../layout/Cards/Cards';
import Columns from '../../layout/Columns/Columns';
import { ACFLayout } from '../../types';
import './index.css';

type ACFData = {
  acf: {
    page_title_group: {
      page_title: string;
      page_title_class: string;
    };
    flex_content: ACFLayout[];
  };
};

const FlexContent = (data: ACFData, slug: string) => {
  if (!data) return;

  const { flex_content, page_title_group } = data.acf;
  const layouts = flex_content;
  const pageTitle = page_title_group.page_title;
  const pageTitleClass = page_title_group.page_title_class;

  const Layouts = layouts.map((layout: ACFLayout) => {
    const fc_layout = layout.acf_fc_layout;
    const { section_m, tabs, cards, columns } = layout;

    switch (fc_layout) {
      case 'tab_set':
        return <Tabset {...tabs} {...section_m} />;
      case 'columns':
        return <Columns {...columns} {...section_m} />;
      case 'cards':
        return <Cardset {...cards} {...section_m} />;
      default:
        return <Section {...section_m} />;
    }
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
