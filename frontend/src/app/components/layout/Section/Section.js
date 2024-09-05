import React from 'react';
import classnames from 'classnames';
import { Container } from 'reactstrap';
import ContentBlock from '../../utilities/ContentBlock';
import './section.css';

const Section = props => {
  const { section } = props;
  const content = section.content;
  const bgImg = section.bg_img;
  const bgImgClass = bgImg ? 'bg-img' : '';

  return (
    <section
      className={classnames(section.section_class, bgImgClass)}
      style={bgImg ? { backgroundImage: `url(${bgImg.url})` } : null}
    >
      <Container
        fluid={!content.containerized}
        className={content.section_content_class}
      >
        <Title
          title={section.section_title}
          titleClass={section.section_title_class}
          tag={props.tag}
        />
        <ContentBlock
          className={content.content_class}
          content={content.section_content}
        />
        {props.children}
      </Container>
    </section>
  );
};

const Title = props => {
  const Tag = props.tag || 'h2';
  return props.title ? (
    <Tag className={`section-title ${props.className}`}>{props.title}</Tag>
  ) : null;
};

export { Section, Title };
