import { DeveloperGrid } from "../../features/developer";
import { SectionTitle } from "../../shared";

const AboutDevelopers = () => {
  return (
    <section className='bg w-full rounded-xl px-18 py-6 text-center'>
      <SectionTitle title='Developers' />
      <DeveloperGrid />
    </section>
  );
};

export default AboutDevelopers;
