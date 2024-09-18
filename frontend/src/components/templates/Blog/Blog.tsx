import React, { useState, useEffect, Fragment, useCallback } from 'react';
import { Container, Row, Col } from 'reactstrap';

import SidebarContent from '../../layout/Sidebar/Sidebar';
import ContentBlock from '@/components/layout/ContentBlock/ContentBlock';
import PostComponent from '../Post/Post';
import './index.css';

const Blog = (props: any) => {
  const [appState, setAppState] = useState({
    loading: true,
    postList: [],
  });
  const type = props.slug === 'blog' ? 'posts' : props.type;

  if (props.data) {
    const { sidebar_content } = props.data.acf;
    const pageTitle = props.data.title.rendered;
    const sidebarContent = sidebar_content ? sidebar_content.component : null;
    const posts = appState.postList.length > 0 ? [...appState.postList] : [];
    const showPosts = posts.map((post) => {
      return <PostComponent data={post} key={`post-${post}`} />;
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
              <SidebarContent {...sidebarContent} />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }

  return null;
};

export default Blog;
