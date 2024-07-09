import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
}

export const SectionContainer = (props: SectionContainerProps) => {
  const { children } = props;

  return <div className="container mx-auto">{children}</div>;
};
