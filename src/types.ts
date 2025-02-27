type Section<T> = {
  title: string;
  content: T;
};

type Education = {
  title: string;
  description: string;
  link: string;
  period: [string, string];
};

type Position = {
  title: string;
  description: string;
  period: [string, string];
  responsibilities: string[];
};

type Experience = {
  title: string;
  place: string;
  description?: string;
  link: string;
  positions: Position[];
};

export type ResumeSchema = {
  title: string;
  subtitle: string;
  thirdtitle: string;
  email: string;
  summary: Section<string>;
  experience: Section<Experience[]>;
  education: Section<Education[]>;
  languages: Section<string[]>;
  skills: string;
};
