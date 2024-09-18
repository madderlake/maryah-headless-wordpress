import React from 'react';
import classnames from 'classnames';
import { Section } from '../Section/Section';
import type {
  SectionProps,
  FlexCardsLayout,
  CardProps,
} from '@/components/templates/FlexContent/types';
import './cards.css';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardFooter,
  CardGroup,
  Button,
  Col,
} from 'reactstrap';

const Cardset = (props: FlexCardsLayout) => {
  const { cards, section } = props;
  const cardColumns = cards?.cardColumns;
  // const { desktop, tablet, phone } = cardColumns;

  const cardWDesktop = 12 / cardColumns?.desktop;
  const cardWTablet = 12 / cardColumns?.tablet;
  const cardWPhone = 12 / cardColumns?.phone;

  const Cards = cards?.card.map((card: CardProps, index: number) => {
    return (
      <Col
        key={`card-${index}`}
        sm={cardWPhone}
        md={cardWTablet}
        lg={cardWDesktop}
        className={classnames('card-col')}>
        <Card className="h-100 shadow-sm">
          <CardImg src={card.image} />
          <CardBody>
            <CardTitle tag={`h4`}>{card.cardTitle} </CardTitle>
            <p className="card-text"> {card.cardContent} </p>
          </CardBody>
          <CardFooter>
            <Button
              //Fix
              onClick={() => (window.location.href = card.button.buttonLink)}>
              {card.button.buttonText}
            </Button>
          </CardFooter>
        </Card>
      </Col>
    );
  });

  return (
    <Section {...section}>
      <div className="flex gap-10">{Cards}</div>
    </Section>
  );
};

export default Cardset;
