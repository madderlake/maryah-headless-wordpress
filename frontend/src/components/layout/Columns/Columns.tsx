import React from 'react';
//import classNames from 'classnames';
import { Row, Col, Container } from 'reactstrap';
// import ContentBlock from '../ContentBlock/ContentBlock';
import { Section } from '../Section/Section';
import type { FlexColumnsLayout, SectionProps } from '@/components/types';
import './columns.css';

const Columns = (columns: FlexColumnsLayout, section: SectionProps) => {
  // const section = props?.section;
  const colGroup = columns.col_group;

  const allColumns = Object.entries(colGroup).map((col, index) => {
    // const col = item.width;
    // if (col !== undefined) {
    // const desktopWidth = col.width.desktop;
    // const tabletWidth = col.width.tablet;
    // const phoneWidth = col.width.phone;
    //const colClass = col.class;

    return (
      <Col
        key={`col-${index}`}
        // sm={phoneWidth}
        // md={tabletWidth}
        // lg={desktopWidth}
        className={`column`}>
        {/* <ContentBlock content={col.content} /> */}
      </Col>
    );
    // } else {
    //   return null;
    // }
  });

  return (
    <Section
      // className={`column-wrap ${section.section_class}`}
      {...section}>
      <Container className={`column-wrap`}>
        <Row>{allColumns}</Row>
      </Container>
    </Section>
  );
};

export default Columns;
