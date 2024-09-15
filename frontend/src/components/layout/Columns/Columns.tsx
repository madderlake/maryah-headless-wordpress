import { Col } from 'reactstrap';
import ContentBlock from '../ContentBlock/ContentBlock';
import { Section } from '../Section/Section';
import type { ColProps, FlexColumnsLayout } from '@/components/types';
// import './columns.css';

const Columns = (props: FlexColumnsLayout) => {
  const { section, columns } = props;

  const allColumns = columns.map((col, index) => {
    const column: ColProps = Object.assign({}, ...Object.values(col?.column));

    const { content, width, class: className } = column;

    return (
      <Col
        key={`col-${index}`}
        sm={width?.mobile}
        md={width?.tablet}
        lg={width?.desktop}
        className={`column ${className}`}>
        <ContentBlock content={content} />
      </Col>
    );
  });

  return (
    <>
      <Section {...section} />
      <div className={`column-wrap flex gap-10`}>{allColumns}</div>
    </>
  );
};

export default Columns;
