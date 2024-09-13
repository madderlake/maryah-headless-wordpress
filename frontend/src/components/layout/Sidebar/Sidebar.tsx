import React, { Component } from 'react';
import { Section, Title } from '../Section/Section';
//import Tabset from '../../layout/Tabset/Tabset';
//import Cardset from '../../layout/Cards/Cards';
//import Columns from '../../layout/Columns/Columns';
import { Container } from 'reactstrap';
import './sidebar.css';

const SidebarContent = () => {


      return (
        <div className={`sidebar`}>
          <article className={`flex-content ${this.props.data.slug} `}>
            {getLayouts}
          </article>
        </div>
      ) || null;
  }


// const Listing = props => {
//   const listing = props.listing;
//   const title = props.title;
//   //console.log(title);
//   const listItems = listing.map(item => (
//     <li key={item.ID}>{item.post_title}</li>
//   ));
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
