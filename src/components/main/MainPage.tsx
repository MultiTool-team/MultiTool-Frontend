import { AboutDevelopers, Library, Quote, Roadmap } from '..';
import { IRoadMap } from './Roadmap';

const MainPage = () => {
  const SKILLS: IRoadMap[] = [
    {
      developer: 'hellpes',
      main_color: '#c3073f',
      skills: {
        skill_issue: 100,
        frontend: 89,
        backend: 33,
        machine_learning: 1,
        aura: 99,
      },
    },
    {
      developer: 'spaklak',
      main_color: '#1E90FF',
      skills: {
        skill_issue: 100,
        frontend: 11,
        backend: 22,
        machine_learning: 100,
        aura: 99,
      },
    },
    {
      developer: 'danchicic52',
      main_color: '#92c640',
      skills: {
        skill_issue: 100,
        frontend: 52,
        backend: 99,
        machine_learning: 1,
        aura: 99,
      },
    },
    {
      developer: 'marat',
      main_color: '#7b68ee',
      skills: {
        skill_issue: 100,
        frontend: 72,
        backend: 1,
        machine_learning: 1,
        aura: 47,
      },
    },
  ];
  return (
    <div className='flex w-full flex-col items-center gap-36 text-center'>
      <Quote />
      <AboutDevelopers />
      <section className='bg w-full rounded-xl px-18 py-6'>
        <h2 className='title mx-auto'>Stats</h2>
        <div className='flex gap-6'>
          {SKILLS.map(developer => (
            <Roadmap {...developer} />
          ))}
        </div>
      </section>

      <Library />
    </div>
  );
};

export default MainPage;
