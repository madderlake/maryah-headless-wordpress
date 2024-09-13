// import React from 'react';
import DOMPurify from 'isomorphic-dompurify';
import './index.css';

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
