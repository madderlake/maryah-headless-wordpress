import React, { useState, useEffect, Fragment, useCallback } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { API_ROOT } from '../../../api';
import superagent from 'superagent';
import SidebarContent from '../../layout/Sidebar/Sidebar';
import Post from '../Post';
import './index.css';
import ContentBlock from '../../utilities/ContentBlock';

const Blog = (props) => {
  const [appState, setAppState] = useState({
    loading: true,
    postList: [],
  });
  const type = props.slug === 'blog' ? 'posts' : props.type;
  const url = `${API_ROOT}/wp-json/wp/v2/${type}/?_embed`;
  const fetchPosts = useCallback(() => {
    superagent
      .get(url)
      .then((res) => res.body)
      .then((posts) => setAppState({ loading: false, posts: posts }));
  }, [url]);

  useEffect(() => {
    fetchPosts();
  }, [setAppState, fetchPosts]);

  if (props.data) {
    const { sidebar_content } = props.data.acf;
    const pageTitle = props.data.title.rendered;
    const sidebarContent = sidebar_content ? sidebar_content.component : null;
    const posts = appState.posts ? [...appState.posts] : [];
    const showPosts = posts.map((post) => {
      return <Post data={post} key={`post-${post.id}`} />;
    });
    return (
      <Fragment>
        <Container>
          <h1>{pageTitle}</h1>
          <ContentBlock
            content={props.data.content.rendered}
            title={pageTitle}></ContentBlock>
        </Container>
        <Container>
          <Row>
            <Col md={8}>{showPosts}</Col>
            <Col md={4} className="c-sidebar">
              <SidebarContent data={sidebarContent} />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }

  return null;
};

export default Blog;
