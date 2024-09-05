'use client';
import { Section } from '../../layout/Section/Section';
import Tabset from '../../layout/Tabset/Tabset';
import Cardset from '../../layout/Cards/Cards';
import Columns from '../../layout/Columns/Columns';
import { SectionProps } from './types';
import './index.css';

// type FlexData = {
//   slug: string;
//   acf: {
//     page_title_group: {
//       page_title: string;
//       page_title_class: string;
//     };
//     flex_content: ACFLayout[];
//   };
// };

// type ACFLayoutType = 'section' | 'tab_set' | 'cards' | 'columns' | string;

// type ACFLayout = {
//   acf_fc_layout: ACFLayoutType;
//   section_m: SectionProps;
//   tab_set?: FlexTabsLayout;
//   cards?: FlexCardsLayout;
//   columns?: FlexColumnsLayout;
// };

// type TabProps = {
//   tab_title: string;
//   tab_content: string;
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
const FlexContent = (data: FlexData) => {
  if (!data) return;
  const { acf, slug } = data;
  const { flex_content, page_title_group } = acf;
  const layouts = flex_content;
  const pageTitle = page_title_group.page_title;
  const pageTitleClass = page_title_group.page_title_class;

  const getLayouts = layouts.map((layout: ACFLayout, index: number) => {
    const fc_layout = layout.acf_fc_layout;
    const { section_m, tab_set, cards, columns } = layout;

    const tabsetProps = {
      key: index,
      section: section_m,
      tab: tab_set,
      // inGrid: section_m.in_grid,
    };

    const cardsetProps = {
      key: index,
      section: section_m,
      cards: cards,
      //columns: cards?.card_columns,
    };

    const colProps = {
      key: index,
      section: section_m,
      num_col: columns?.num_columns,
      //containerized: layout.containerized,
      columns: columns?.col_group,
    };

    switch (fc_layout) {
      case 'tab_set':
        return <Tabset {...tabsetProps} />;
      case 'columns':
        return <Columns {...colProps} />;
      case 'cards':
        return <Cardset {...cardsetProps} />;
      default:
        return <Section key={index} {...section_m} />;
    }
  });

  return (
    <div className={`${slug} `}>
      {pageTitle && (
        <h1 className={`container ${pageTitleClass}`}>{pageTitle}</h1>
      )}
      {getLayouts}
    </div>
  );
};

export default FlexContent;
