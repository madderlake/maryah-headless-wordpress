'use client';
import { Section } from '@/components/layout/Section/Section';
import Tabset from '@/components/layout/Tabset/Tabset';
import Cardset from '@/components/layout/Cards/Cards';
import Columns from '@/components/layout/Columns/Columns';
import { SectionProps, ACFLayout, TabProps } from '@/components/types';
import './index.css';
import { Page } from '@/types/pages/page';

type FlexData = {
  slug: string;
  flexibleContent: {
    pageTitleGroup: {
      pageTitle: string;
      pageTitleClass: string;
    };
    flexContent: ACFLayout[];
  };
};

// type ACFLayoutType = 'section' | 'tab_set' | 'cards' | 'columns' | string;

// type ACFLayout = {
//   acf_fc_layout: ACFLayoutType;
//   section_m: SectionProps;
//   tab_set?: FlexTabsLayout;
//   cards?: FlexCardsLayout;
//   columns?: FlexColumnsLayout;
// };

// type CardProps = {
//   card_title: string;
//   image: string;
//   card_content: string;
//   button: {
//     button_text: string;
//     button_link: string;
//   };
// };
// type FlexSectionLayout = {
//   acf_fc_layout: ACFLayoutType;
//   section_m: SectionProps;
// };

// type FlexTabsLayout = FlexSectionLayout & {
//   tab: TabProps[];
// };

// type FlexCardsLayout = FlexSectionLayout & {
//   card_columns: {
//     desktop: string;
//     tabconst: string;
//     phone: string;
//   };
//   card: CardProps[];
// };

// type FlexColumnsLayout = FlexSectionLayout & {
//   num_columns: string;
//   col_group: ColProps;
// };
// type ColProps = [
//   {
//     [key: string]: {
//       acf_fc_layout: string;
//       width: {
//         desktop: string;
//         tabconst: string;
//         mobile: string;
//       };
//       class: string;
//       content: string;
//     } | null;
//   }
// ];
const FlexContent = (data: Page & FlexData) => {
  if (!data) return;
  const { flexibleContent, slug } = data;
  const { flexContent, pageTitleGroup } = flexibleContent;
  const layouts = flexContent;
  const pageTitle = pageTitleGroup.pageTitle;
  const pageTitleClass = pageTitleGroup.pageTitleClass;

  const Layouts = [...layouts].map((layout: ACFLayout) => {
    const { sectionM, tabs, cards, columns } = layout;

    const tabsetProps = {
      section: sectionM,
      tabs,
    };

    const cardsetProps = {
      section: sectionM,
      cards,
      columns: cards?.cardColumns,
    };

    const colProps = {
      section: sectionM,
      numCol: columns?.numColumns,
      columns: columns?.colGroup,
    };
    return tabs ? (
      <Tabset {...tabsetProps} />
    ) : columns ? (
      <Columns {...colProps} />
    ) : cards ? (
      <Cardset {...cardsetProps} />
    ) : (
      <Section {...sectionM} />
    );
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
