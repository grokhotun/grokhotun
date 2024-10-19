type Languages = {
  title: string;
  content: string[];
};

type Education = {
  title: string;
  content: { title: string; description: string; period: string }[];
};

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
  about: {
    title: string;
    content: string;
  };
  experience: {
    title: string;
    content: Experience[];
  };
  education: Education;
  languages: Languages;
};
