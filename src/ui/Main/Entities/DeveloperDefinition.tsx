export interface IDeveloperDefinition {
  developerName: string;
  developerDefinition: string;
  description: string;
}
const DeveloperDefinition: React.FC<IDeveloperDefinition> = ({
  developerName,
  developerDefinition,
  description,
}) => {
  return (
    <>
      <h3 className='text-alt text-center text-3xl font-bold uppercase sm:text-left'>
        {developerName}
      </h3>
      <span className='text-alt text-center text-lg sm:text-left'>
        {developerDefinition}
      </span>
      <p className='text-alt text-center tracking-wide text-balance sm:text-left'>
        {description}
      </p>
    </>
  );
};

export default DeveloperDefinition;
