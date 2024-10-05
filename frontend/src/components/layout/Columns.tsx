import ContentBlock from '../core/ContentBlock';
import { Section } from './Section';
import type {
  ColProps,
  FlexColumnsLayout,
} from '@/components/templates/FlexContent/types';

const Column = ({ ...props }: ColProps) => {
  const { width, content } = props;

  const lg =
    String(width?.large) !== 'auto' ? `lg:w-${String(width?.large)}` : '';
  const md =
    String(width?.medium) !== 'auto' ? `md:w-${String(width?.medium)}` : '';
  const sm =
    String(width?.small) !== 'auto' ? `w-${String(width?.small)}` : 'w-full';

  return (
    <div className={`p-4 border border-red-300 column ${sm} ${md} ${lg}`}>
      <ContentBlock content={content} />
    </div>
  );
};
const Columns = (props: FlexColumnsLayout) => {
  const { section, columnGroup } = props;
  const columns = Object.assign({}, ...Object.values(columnGroup));
  const columnsArray = Object.assign({}, ...Object.values(columns));
  const allColumns = Object.values(columnsArray).map((col, index) => {
    const { content, width } = col as ColProps;
    console.log(content, width);
    return <Column width={width} content={content} key={index} />;
  });

  return (
    <Section {...section}>
      <div className={`column-wrap  md:flex`}>{allColumns}</div>
    </Section>
  );
};

export default Columns;
