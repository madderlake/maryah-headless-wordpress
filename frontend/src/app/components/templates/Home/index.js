import React from 'react';
import { Container } from 'reactstrap';
import ContentBlock from '../../utilities/ContentBlock';
import './index.css';

const Home = (props) => {
  if (props.data) {
    const data = props.data;

    return (
      <div>
        <Container>
          <article className="home">
            <h1>{data.title.rendered}</h1>
            <ContentBlock content={data.content.rendered} />
          </article>
        </Container>
      </div>
    );
  }

  return null;
};

export default Home;
