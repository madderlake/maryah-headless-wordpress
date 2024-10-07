import ContentBlock from '../core/ContentBlock';
import { WPPage } from '@/types/pages/wp-page';

const Default = (data: WPPage) => {
  if (!data) return;
  const { title, content, slug } = data;

  return (
    <section>
      <article className={`${slug} default-template`}>
        <div>
          <h1>{title}</h1>
          <ContentBlock content={content} />
        </div>
      </article>
    </section>
  );
};

export default Default;
