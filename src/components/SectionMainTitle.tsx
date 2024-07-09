interface SectionMainTitleProps {
  label: string;
}

export const SectionMainTitle = (props: SectionMainTitleProps) => {
  const { label } = props;

  return <h3 className="text-3xl mb-3 font-bold ">{label}</h3>;
};
