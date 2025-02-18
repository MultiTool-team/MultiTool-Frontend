interface ISectionTitle {
  title: string;
}

const SectionTitle: React.FC<ISectionTitle> = ({ title }) => {
  return <h2 className='title'>{title}</h2>;
};

export default SectionTitle;
