import DOMPurify from 'isomorphic-dompurify';

const ContentBlock = (props: any) => {
  const saniContent = DOMPurify.sanitize(props.content);
  return (
    <div
      className="o-content-block"
      dangerouslySetInnerHTML={{ __html: saniContent || 'No HTML' }}
    />
  );
};

export default ContentBlock;
