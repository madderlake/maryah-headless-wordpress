'use client';

import ContentBlock from '../../layout/ContentBlock/ContentBlock';
import { Container } from 'reactstrap';
import './index.css';
import { WPPage } from '@/types/pages/wp-page';

const Default = (data: WPPage) => {
  if (!data) return;
  const { title, content, slug } = data;

  return (
    <section>
      <article className={`${slug} default-template`}>
        <Container>
          <h1>{title}</h1>
          <ContentBlock content={content} />
        </Container>
      </article>
    </section>
  );
};

export default Default;
