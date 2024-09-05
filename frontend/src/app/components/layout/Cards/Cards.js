import React from 'react';
import classnames from 'classnames';
import { Section } from '../Section/Section';
import './cards.css';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardFooter,
  CardGroup,
  Button,
  Col
} from 'reactstrap';

const Cardset = props => {
  const { section } = props;
  const cardList = props.card;
  const cardWDesktop = 12 / props.columns.desktop;
  const cardWTablet = 12 / props.columns.tablet;
  const cardWPhone = 12 / props.columns.phone;

  const getCards = cardList.map((card, index) => {
    return (
      <Col
        key={`card-${index}`}
        sm={cardWPhone}
        md={cardWTablet}
        lg={cardWDesktop}
        className={classnames('card-col')}
      >
        <Card className={classnames(props.className, `h-100`, `shadow-sm`)}>
          <CardImg src={card.image.url} />
          <CardBody>
            <CardTitle tag={`h4`}>{card.card_title} </CardTitle>
            <p className="card-text"> {card.card_content} </p>
          </CardBody>
          <CardFooter>
            <Button
              onClick={() => (window.location.href = card.button.button_link)}
            >
              {card.button.button_text}
            </Button>
          </CardFooter>
        </Card>
      </Col>
    );
  });

  return (
    <Section className={`card-set ${section.section_class}`} section={section}>
      <CardGroup>{getCards}</CardGroup>
    </Section>
  );
};

export default Cardset;
