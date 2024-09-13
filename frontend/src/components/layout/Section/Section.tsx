import React from 'react';
import classnames from 'classnames';
import { Container } from 'reactstrap';
import ContentBlock from '../ContentBlock/ContentBlock';
import { DynamicTag } from '../../core/DynamicTag';
import type { SectionProps } from '../../types';
import './section.css';

const Section = ({ ...section }: SectionProps) => {
  const sectionTitle = section.section_title_group;
  const content = section.content;
  const bgImg = section.bg_img;
  const bgImgClass = bgImg && 'bgImag';

  return (
    <section
      className={classnames(section.section_class, bgImgClass)}
      style={bgImg && { backgroundImage: `url(${bgImg.url})` }}>
      <Container
        fluid={!content.containerized}
        className={section.content.content_class}>
        <Title
          title={sectionTitle.section_title}
          titleClass={sectionTitle.section_title_class}
          tag={sectionTitle.section_title_tag}
        />
        <ContentBlock
          className={content.content_class}
          content={content.section_content}
        />
      </Container>
    </section>
  );
};

const Title = ({
  title,
  titleClass,
  tag,
}: {
  title: string;
  titleClass: string;
  tag: string;
}) => {
  return (
    <DynamicTag tag={tag} className={titleClass}>
      {title}
    </DynamicTag>
  );
};

export { Section, DynamicTag };
