// import React from 'react';
import './index.css';

const ContentBlock = (data: any) => {
  return (
    <div
      className="o-content-block"
      dangerouslySetInnerHTML={{ __html: data.content || 'No HTML' }}
    />
  );
};

export default ContentBlock;
