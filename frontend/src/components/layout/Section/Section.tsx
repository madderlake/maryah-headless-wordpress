import React from 'react';
import classnames from 'classnames';
import { Container } from 'reactstrap';
import ContentBlock from '@/components/layout/ContentBlock/ContentBlock';
import DynamicTag from '@/components/core/DynamicTag';
import type { SectionProps } from '@/components/templates/FlexContent/types';
import './section.css';

const Section = ({ ...section }: SectionProps) => {
  const sectionGroup = section.sectionTitle;
  const { content, bgImg, children } = section;
  const bgImgClass = bgImg && 'bgImage';

  return (
    <section
      className={classnames(section.sectionClass, bgImgClass, 'mb-4')}
      style={bgImg && { backgroundImage: `url(${bgImg.url})` }}>
      <Container fluid={!section.inGrid} className={content?.contentClass}>
        <Title
          title={sectionGroup?.sectionTitle}
          titleClass={sectionGroup?.sectionTitleClass}
          tag={sectionGroup?.sectionTitleTag}
        />
        <ContentBlock
          className={content?.contentClass}
          content={content?.sectionContent}
        />
      </Container>
      {children}
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
