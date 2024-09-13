type ACFLayoutType = 'section' | 'tab_set' | 'cards' | 'columns';

export type ACFLayout = {
  //acf_fc_layout: ACFLayoutType;
  sectionM: SectionProps;
  tabs: TabProps[];
  cards: FlexCardsLayout;
  columns?: FlexColumnsLayout;
};
export type SectionTitle = {
  sectionTitle: string;
  sectionTitleTag: string;
  sectionTitleClass: string;
};
export type SectionProps = {
  sectionTitleGroup: SectionTitle;
  sectionClass: string;
  bgImg: {
    url: string;
    alt: string;
    sizes: string[];
  };
  content: {
    contentClass: string;
    containerized: boolean; // Fix  - remove?
    sectionContent: string;
  };
  in_grid: boolean;
};

export type TabProps = {
  tabTitle: string;
  tabContent: string;
};
export type CardProps = {
  cardTitle: string;
  image: string;
  cardContent: string;
  button: {
    button_text: string;
    button_link: string;
  };
};

type FlexCardsLayout = {
  cardColumns: {
    desktop: number;
    tablet: number;
    phone: number;
  };
  card: CardProps[];
};

export type FlexColumnsLayout = {
  numColumns: string;
  colGroup: {
    [key: string]: ColProps[];
  };
};
export type ColProps = {
  //acf_fc_layout: string;
  width: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  class: string;
  content: string;
} | null;
