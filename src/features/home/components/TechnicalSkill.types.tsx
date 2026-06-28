type BadgeLink = { name: string; link: string };
type Badge = string | BadgeLink;

export interface ISkillItem {
  name: string;
  badges: Badge[];
}

export interface ITechnicalSkill {
  title: string;
  icon?: React.ReactNode;
  data?: ISkillItem[];
}
