interface SectionSubTitleProps {
  label: string;
}

export const SectionSubTitle = (props: SectionSubTitleProps) => {
  const { label } = props;

  return <h5 className="text-xl mb-3 font-bold ">{label}</h5>;
};
