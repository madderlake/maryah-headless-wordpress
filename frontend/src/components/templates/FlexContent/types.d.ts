type ACFLayoutType = 'section' | 'tab_set' | 'cards' | 'columns';

export type ACFLayout = {
  acf_fc_layout: ACFLayoutType;
  section_m: SectionProps;
  tabs: TabProps[];
  cards: FlexCardsLayout;
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
    containerized: boolean; // Fix  - remove?
    section_content: string;
  };
  in_grid: boolean;
};

export type TabProps = {
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

type FlexCardsLayout = {
  card_columns: {
    desktop: number;
    tablet: number;
    phone: number;
  };
  card: CardProps[];
};

export type FlexColumnsLayout = {
  num_columns: string;
  col_group: {
    [key: string]: ColProps[];
  };
};
export type ColProps = {
  acf_fc_layout: string;
  width: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  class: string;
  content: string;
} | null;
