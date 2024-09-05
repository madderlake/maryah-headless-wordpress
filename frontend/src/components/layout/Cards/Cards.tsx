import React from 'react';
import classnames from 'classnames';
import { Section } from '../Section/Section';
import type { SectionProps, FlexCardsLayout } from '../../types';
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

const Cardset = (cards: FlexCardsLayout, section: SectionProps) => {
  const cardColumns = cards.card_columns;

  const cardWDesktop = 12 / cardColumns.desktop;
  const cardWTablet = 12 / cardColumns.tablet;
  const cardWPhone = 12 / cardColumns.phone;
  const cardArray = cards.card;

  const Cards = cardArray.map((card, index) => {
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
            <CardTitle tag={`h4`}>{card.card_title} </CardTitle>
            <p className="card-text"> {card.card_content} </p>
          </CardBody>
          <CardFooter>
            <Button
              //Fix
              onClick={() => (window.location.href = card.button.button_link)}>
              {card.button.button_text}
            </Button>
          </CardFooter>
        </Card>
      </Col>
    );
  });

  return (
    <Section {...section}>
      <CardGroup>{Cards}</CardGroup>
    </Section>
  );
};

export default Cardset;
