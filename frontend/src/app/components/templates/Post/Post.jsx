import React from 'react';

import ContentBlock from '../../utilities/ContentBlock';

import './index.css';

const Post = props => {
  if (props.data) {
    let data = props.data;
    let author = props.data._embedded.author[0];
    return (
      <div className={`post-${data.id}`}>
        <article className={`${props.slug} post-template`}>
          <h2>{data.title.rendered}</h2>
          <ContentBlock content={data.content.rendered} />
          <div className="row  post-footer ">
            <p>{author.name}</p>
            <p>{props.data.formatted_date}</p>
          </div>
        </article>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Post;
