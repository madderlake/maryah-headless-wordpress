import React, { Component } from 'react';
import { Section, Title } from '../Section/Section';
//import Tabset from '../../layout/Tabset/Tabset';
//import Cardset from '../../layout/Cards/Cards';
//import Columns from '../../layout/Columns/Columns';
import { Container } from 'reactstrap';
import './sidebar.css';

class SidebarContent extends Component {
  render() {
    if (this.props.data) {
      //let acf = this.props.data.acf;
      // let sidebar = acf.sidebar_content;
      // const layouts = sidebar.component;
      const layouts = this.props.data;
      //console.log(layouts);

      const getLayouts = layouts.map((layout, index) => {
        const fc_layout = layout.acf_fc_layout;

        const sectionProps = {
          key: index,
          section: layout.section_m,
          content: layout.content,
          tag: 'h3',
        };

        const listingProps = {
          key: index,
          listing: layout.listing,
          title: layout.list_title,
        };

        switch (fc_layout) {
          case 'list':
            return <Listing {...listingProps} />;
          default:
            return <Section {...sectionProps} />;
        }
      });

      return (
        <div className={`sidebar`}>
          <article className={`flex-content ${this.props.data.slug} `}>
            {getLayouts}
          </article>
        </div>
      );
    }

    return null;
  }
}

const Listing = (props) => {
  const listing = props.listing;
  const title = props.title;
  //console.log(title);
  const listItems = listing.map((item) => (
    <li key={item.ID}>{item.post_title}</li>
  ));
  return (
    <Container>
      {title.title ? (
        <Title
          tag={title.title_size}
          className="sidebar-list-title"
          title={title.title}
        />
      ) : null}

      <ul className="list-unstyled post-list">{listItems}</ul>
    </Container>
  );

  //return null;
};
export default SidebarContent;
