type Section<T> = {
  title: string;
  content: T;
};

type Education = { title: string; description: string; period: string };

type Position = {
  title: string;
  description: string;
  period: string;
  responsibilities: string[];
};

type Experience = {
  title: string;
  place: string;
  positions: Position[];
};

export type ResumeSchema = {
  title: string;
  subtitle: string;
  about: Section<string>;
  skills: string;
  experience: Section<Experience[]>;
  education: Section<Education[]>;
  languages: Section<string[]>;
};
