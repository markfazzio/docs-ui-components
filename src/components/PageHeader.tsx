import { ReactNode } from 'react';
import { BackButton } from './BackButton';

interface PageHeaderProps {
  children?: ReactNode;
  title?: string;
}

export const PageHeader = (props: PageHeaderProps) => {
  const { title, children } = props;

  return (
    <div className="sm:grid grid-cols-2 items-center mb-8">
      <div className="course-meta mb-6 sm:mb-0">
        <h1 className="text-4xl mb-2">{title}</h1>
        {children}
      </div>
      <div className="course-actions text-end">
        <BackButton />
      </div>
    </div>
  );
};
