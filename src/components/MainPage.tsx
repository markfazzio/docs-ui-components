import { ReactNode } from 'react';

interface MainPageProps {
  children?: ReactNode;
}

export const MainPage = (props: MainPageProps) => {
  const { children } = props;

  return <main className="min-h-screen py-20 px-10">{children}</main>;
};
