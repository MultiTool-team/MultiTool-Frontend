import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import { IDeveloperNames } from '../helpers/developers/developersName';

export interface ISkills {
  skill_issue: number;
  frontend: number;
  backend: number;
  machine_learning: number;
  aura: number;
}

export interface IDeveloperStats {
  skills: ISkills;
  developer: IDeveloperNames;
  main_color: string;
}

const DeveloperCharts: React.FC<IDeveloperStats> = ({
  skills,
  developer,
  main_color,
}) => {
  const data = [
    {
      subject: 'Skill Issue',
      A: skills.skill_issue,
      fullMark: 150,
    },
    {
      subject: 'ML',
      A: skills.machine_learning,
      fullMark: 150,
    },
    {
      subject: 'Backend',
      A: skills.backend,
      fullMark: 150,
    },
    {
      subject: 'Frontend',
      A: skills.frontend,
      fullMark: 150,
    },

    {
      subject: 'Aura',
      A: skills.aura,
      fullMark: 150,
    },
  ];

  return (
    <>
      <ResponsiveContainer
        width={390}
        height={390}
        className='z-10 text-sm'
      >
        <RadarChart
          cx='50%'
          cy='50%'
          outerRadius='80%'
          data={data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey='subject' />
          <PolarRadiusAxis domain={[0, 100]} />

          <Radar
            name={developer}
            dataKey='A'
            stroke={main_color}
            fill={main_color}
            fillOpacity={0.6}
          />

          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </>
  );
};

export default DeveloperCharts;
