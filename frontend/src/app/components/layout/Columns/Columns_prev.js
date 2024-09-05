import React, { Component } from "react";
//import classnames from "classnames";
import ContentBlock from "../../utilities/ContentBlock";
import "./columns.scss";
import { Row, Col } from "reactstrap";

class Columns extends Component {
  render() {
    const colGroup = this.props.colGroup;
    const getCols = colGroup.map((col, index) => {
      const desktopWidth = col.width.desktop;
      const tabletWidth = col.width.tablet;
      const phoneWidth = col.width.phone;
      const colTitle = col.column_title;
      const colTitleClass = colTitle.title_class;
      const colTitleText = colTitle.title;

      const ColumnTitle = colTitleSize => {
        colTitleSize = colTitle.title_size;
        switch (colTitleSize) {
          case "h2":
            return (
              <h2 className={`col-title ${colTitleClass}`}>{colTitleText}</h2>
            );
          case "h3":
            return (
              <h3 className={`col-title ${colTitleClass}`}>{colTitleText}</h3>
            );
          case "h5":
            return (
              <h5 className={`col-title ${colTitleClass}`}>{colTitleText}</h5>
            );
          case "h6":
            return (
              <h6 className={`col-title ${colTitleClass}`}>{colTitleText}</h6>
            );
          default:
            return (
              <h4 className={`col-title ${colTitleClass}`}>{colTitleText}</h4>
            );
        }

        //return <ColumnTitle />;
      };

      return (
        <Col key={index} sm={phoneWidth} md={tabletWidth} lg={desktopWidth}>
          <ColumnTitle>{colTitleText}</ColumnTitle>
          <ContentBlock content={col.col_content} />
        </Col>
      );
    });

    return (
      <section
        className={`columns ${
          this.props.inGrid ? "container" : "container-fluid"
        }`}
      >
        <Title title={this.props.title} titleClass={this.props.titleClasses} />
        <Row>{getCols}</Row>
      </section>
    );
  }
}
const Title = props =>
  props.title ? (
    <h2 className={`section-title ${props.titleClass}`}>{props.title}</h2>
  ) : null;

export default Columns;
