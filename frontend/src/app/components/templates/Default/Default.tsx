'use client';

import ContentBlock from '../../layout/ContentBlock/ContentBlock';
import { Container } from 'reactstrap';
import './index.css';

const Default = (data: any, slug: string) => {
  if (!data) return;

  return (
    <section>
      <article className={`${slug}  default-template`}>
        <Container>
          <h1>{data.title.rendered}</h1>
          <ContentBlock>{data.content}</ContentBlock>
        </Container>
      </article>
    </section>
  );
};

export default Default;
