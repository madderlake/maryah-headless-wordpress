type DynamicTagProps = {
  tag: string;
  children: React.ReactNode;
  className: string;
};

export const DynamicTag = ({ tag, children, ...rest }: DynamicTagProps) => {
  const Tag = tag as keyof JSX.IntrinsicElements;
  return <Tag {...rest}>{children}</Tag>;
};
