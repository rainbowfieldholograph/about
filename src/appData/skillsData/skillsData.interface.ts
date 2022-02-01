export interface ISkillData {
  title: string
  iconComponent: JSX.Element
  description: string
}

export interface ISkillCategory {
  title: string
  skills: ISkillData[]
}
