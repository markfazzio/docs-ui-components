import { ReactNode } from 'react';

interface SectionDescriptionProps {
  children: ReactNode;
}

export const SectionDescription = (props: SectionDescriptionProps) => {
  const { children } = props;

  return <p className="mb-2">{children}</p>;
};
