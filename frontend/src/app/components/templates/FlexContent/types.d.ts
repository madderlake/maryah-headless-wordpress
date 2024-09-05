type FlexData = {
  slug: string;
  acf: {
    page_title_group: {
      page_title: string;
      page_title_class: string;
    };
    flex_content: ACFLayout[];
  };
};

type ACFLayoutType = 'section' | 'tab_set' | 'cards' | 'columns';

type ACFLayout = {
  acf_fc_layout: ACFLayoutType;
  section_m: SectionProps;
  tab_set?: FlexTabsLayout;
  cards?: FlexCardsLayout;
  columns?: FlexColumnsLayout;
};
export type SectionTitle = {
  section_title: string;
  section_title_tag: string;
  section_title_class: string;
};
export type SectionProps = {
  section_title_group: SectionTitle;
  section_class: string;
  bg_img: {
    url: string;
    alt: string;
    sizes: string[];
  };
  content: {
    content_class: string;
    containerized: boolean; //remove?
    section_content: string;
  };
  in_grid: boolean;
};

type TabProps = {
  tab_title: string;
  tab_content: string;
};
export type CardProps = {
  card_title: string;
  image: string;
  card_content: string;
  button: {
    button_text: string;
    button_link: string;
  };
};
export type FlexSectionLayout = {
  acf_fc_layout: ACFLayoutType;
  section_m: SectionProps;
};

type FlexTabsLayout = FlexSectionLayout & {
  tab: TabProps[];
};

type FlexCardsLayout = FlexSectionLayout & {
  card_columns: {
    desktop: string;
    tablet: string;
    phone: string;
  };
  card: CardProps[];
};

type FlexColumnsLayout = FlexSectionLayout & {
  num_columns: string;
  col_group: ColProps;
};
type ColProps = [
  {
    [key: string]: {
      acf_fc_layout: string;
      width: {
        desktop: string;
        tablet: string;
        mobile: string;
      };
      class: string;
      content: string;
    } | null;
  }
];
