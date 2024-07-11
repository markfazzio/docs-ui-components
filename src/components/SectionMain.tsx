import { ReactNode } from 'react';

interface SectionMainProps {
  children?: ReactNode;
  id?: string;
}

export const SectionMain = (props: SectionMainProps) => {
  const { children, id } = props;

  return (
    <section className="px-5 py-10 mb-3" id={id}>
      {children}
    </section>
  );
};
