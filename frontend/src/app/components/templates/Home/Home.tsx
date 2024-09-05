// import React from 'react';
import { Container } from 'reactstrap';
import ContentBlock from '../../layout/ContentBlock/ContentBlock';
import './index.css';

const Home = (data: any) => {
  if (!data) return;
  {
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
};

export default Home;
