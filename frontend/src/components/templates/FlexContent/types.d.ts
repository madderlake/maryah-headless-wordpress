type ACFLayoutType = 'section' | 'tab_set' | 'cards' | 'columns';

export type FlexData = {
  pageTitleGroup: {
    pageTitle: string;
    pageTitleClass: string;
  };
  flexContent: ACFLayout[];
};

export type ACFLayout = {
  sectionM: SectionProps;
  tabs: FlexTabsLayout['tabs'];
  cards: FlexCardsLayout['cards'];
  columns: FlexColumnsLayout['columns'];
};
export type SectionTitle = {
  sectionTitle: string;
  sectionTitleTag: string;
  sectionTitleClass: string;
};
export type SectionProps = {
  sectionTitle: SectionTitle;
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
  inGrid: boolean;
  children: React.ReactNode | string;
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
    buttonText: string;
    buttonLink: string;
  };
};
type FlexTabsLayout = {
  section: SectionProps;
  tabs: TabProps[];
};
type FlexCardsLayout = {
  section: SectionProps;
  cards: {
    cardColumns: {
      desktop: number;
      tablet: number;
      phone: number;
    };
    card: CardProps[];
  };
};

export type FlexColumnsLayout = {
  section: SectionProps;
  columns: [
    {
      column: ColProps;
    }
  ];
};

export type ColProps = {
  width: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  class: string;
  content: string;
};
