import React from 'react';
import { Container, Row, Col } from 'reactstrap';
//import ContentBlock from '../../utilities/ContentBlock';
import FlexContent from '../FlexContent';
import SidebarContent from '../../layout/Sidebar/Sidebar';
import './index.css';

const Sidebar = (props) => {
  if (props.data) {
    const { sidebar_content } = props.data.acf;
    const sidebarContent = sidebar_content ? sidebar_content.component : null;
    return (
      <Container>
        <Row>
          <Col md={8}>
            <FlexContent data={props.data} />
          </Col>
          <Col md={4} className="c-sidebar">
            <SidebarContent data={sidebarContent} />
          </Col>
        </Row>
      </Container>
    );
  }

  return null;
};

export default Sidebar;
