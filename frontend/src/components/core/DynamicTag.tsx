import React from 'react';

type DynamicTagProps = {
  tag: string;
  children: React.ReactNode | string;
  className: string;
};

const DynamicTag = ({
  tag,
  children,
  className,
}: DynamicTagProps): JSX.Element => {
  const Tag = tag && (tag.toString() as keyof JSX.IntrinsicAttributes);
  return React.createElement(Tag, { className }, children);
};

export default DynamicTag;
