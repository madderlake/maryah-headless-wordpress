import { Section } from './Section';
import Image from 'next/image';
import type {
  FlexCardsLayout,
  CardProps,
} from '@/components/templates/FlexContent/types';

const Cardset = (props: FlexCardsLayout) => {
  const { cards, section } = props;
  const numCards = cards?.card.length;

  const Cards = cards?.card.map((card: CardProps, index: number) => {
    return (
      <div key={`card-${index}`} className="card border border-red-400 p-4">
        {card.image && (
          <div className="card-image">
            <Image src={card.image} alt={card.cardTitle} fill />
          </div>
        )}
        <div className="card-body">
          <h3 className="m-">{card.cardTitle}</h3>{' '}
          <p className="card-text"> {card.cardContent} </p>
        </div>
        <div className="footer">
          <button
            //Fix
            onClick={() => (window.location.href = card.button.buttonLink)}>
            {card.button.buttonText}
          </button>
        </div>
      </div>
    );
  });

  return (
    <Section {...section}>
      <div
        className={`container md:grid gap-4`}
        style={{ gridTemplateColumns: `repeat(${numCards}, 1fr)` }}>
        {Cards}
      </div>
    </Section>
  );
};

export default Cardset;
