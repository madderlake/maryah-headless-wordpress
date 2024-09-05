import React, { Fragment } from 'react';
import ContentBlock from '../../utilities/ContentBlock';
import { Container } from 'reactstrap';
import './index.css';

const Default = props => {
  if (props.data) {
    let data = props.data;
    //console.table(crData);

    return (
      <Fragment>
        <section>
          <article className={`${props.slug} default-template`}>
            <Container>
              <h1>{data.title.rendered}</h1>
              <ContentBlock content={data.content.rendered} />
            </Container>
          </article>
        </section>
        <section></section>
      </Fragment>
    );
  }

  return null;
};

export default Default;
