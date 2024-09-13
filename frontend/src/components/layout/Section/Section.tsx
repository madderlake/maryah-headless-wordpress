import React from 'react';
import classnames from 'classnames';
import { Container } from 'reactstrap';
import ContentBlock from '../ContentBlock/ContentBlock';
import { DynamicTag } from '../../core/DynamicTag';
import type { SectionProps } from '../../types';
import './section.css';

const Section = ({ ...section }: SectionProps) => {
  const sectionTitleGroup = section.sectionTitleGroup;
  const content = section.content;
  const bgImg = section.bgImg;
  const bgImgClass = bgImg && 'bgImag';

  return (
    <section
      className={classnames(section.sectionClass, bgImgClass)}
      style={bgImg && { backgroundImage: `url(${bgImg.url})` }}>
      <Container
        fluid={!content.containerized}
        className={section.content.contentClass}>
        <Title
          title={sectionTitleGroup.sectionTitle}
          titleClass={sectionTitleGroup.sectionTitleClass}
          tag={sectionTitleGroup.sectionTitleTag}
        />
        <ContentBlock
          className={content.contentClass}
          content={content.sectionContent}
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
