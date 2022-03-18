import { ReactNode } from 'react';

export interface ISkillData {
  title: string;
  iconComponent: ReactNode;
  description: string;
}

export interface ISkillCategory {
  title: string;
  skills: ISkillData[];
}
