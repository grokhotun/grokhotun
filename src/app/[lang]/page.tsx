import React from 'react';
import {
  Title,
  Paragraph,
  Span,
  Link,
  List,
  RussianFlag,
  BritishFlag,
  Box,
} from '@/app/ui';
import dayjs from 'dayjs';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import NextLink from 'next/link';

const duration = (start: string, end: string) => {
  const difference = dayjs(end).diff(dayjs(start), 'months');
  const years = Math.floor(difference / 12);
  const months = difference % 12;
  if (years < 1) return `${months} months`;
  return `${years}.${months} years`;
};

const useLanguageLink = (lang: 'en' | 'ru') => {
  const { href, title } = {
    en: {
      title: <RussianFlag />,
      href: '/ru',
    },
    ru: {
      title: <BritishFlag />,
      href: '/en',
    },
  }[lang];

  return [href, title] as const;
};

const skills = [
  'React',
  'Next.js',
  'Vue.js',
  'Nuxt.js',

  'JavaScript',
  'TypeScript',

  'HTML',
  'CSS',
  'SASS',
  'LESS',
  'styled-components',
  'tailwind',
  'Stitches',

  'Redux',
  'Zustand',
  'React Query',
  'Effector',
  'Microfrontends',

  'Ant Design',
  'Material UI',
  'Radix UI',

  'Webpack',
  'Vite',
  'Node.js',
  'npm',
  'yarn',
  'Storybook',
  'Nx',
  'Release-it',
  'Lerna',

  'Jest',
  'End-to-end',
  'Puppeter',
  'Test Driven Development',
  'React Testing Library',

  'Websocket',
  'REST API ',
  'GraphQL',

  'Docker',
  'docker-compose',
  'k8s',

  'Jira',
  'Figma',
  'Git',
  'SCRUM',
];

type HomeProps = { params: { lang: 'en' | 'ru' } };

export default function Home(props: HomeProps) {
  unstable_setRequestLocale(props.params.lang);
  const [href, title] = useLanguageLink(props.params.lang);
  const t = useTranslations('index');
  const experience = Object.values<any>(t.raw('experience.content'));
  const education = Object.values<any>(t.raw('education.content'));
  const languages = Object.values<string>(t.raw('languages.content'));

  return (
    <main className='mx-auto w-[210mm] px-16 py-16'>
      <Box className='flex items-start'>
        <Box className='flex-1'>
          <Title className='w-full' level={1}>
            {t('title')}
          </Title>
          <Paragraph className='font-semibold'>{t('subtitle')}</Paragraph>
          <Paragraph>5+ years of experience</Paragraph>
        </Box>
        <Box className='flex-1 flex flex-col items-end'>
          <Link
            target='_blank'
            href='https://www.linkedin.com/in/askar-yalyaev/'
          >
            linkedin.com/in/askar-yalyaev/
          </Link>
          <Link target='_blank' href='mailto:askarrussia@gmail.com'>
            askarrussia@gmail.com
          </Link>
          <Link target='_blank' href='https://t.me/skrylyv'>
            https://t.me/skrylyv
          </Link>
        </Box>
      </Box>
      <Title className='text-center' level={2}>
        {t('summary.title')}
      </Title>
      <Paragraph>{t('summary.content')}</Paragraph>
      <Title className='text-center' level={2}>
        {t('experience.title')}
      </Title>
      <Box className='flex flex-col gap-2'>
        {experience.map(company => (
          <Box key={company.title}>
            <Box className='flex justify-between'>
              <Title level={3}>{company.title}</Title>
              <Paragraph className='italic font-light'>
                {company.place}
              </Paragraph>
            </Box>
            {Object.values<any>(company.positions).map(position => (
              <React.Fragment key={position.title}>
                <Box className='flex items-center'>
                  <Title level={5} className='grow'>
                    {position.title}
                  </Title>
                  <Paragraph className='my-1 italic text-base font-light'>
                    <span>
                      {position.period
                        .map((p: string) => {
                          if (!dayjs(p).isValid()) return p;
                          return dayjs(p).format('MM/YYYY');
                        })
                        .join(' - ')}
                    </span>
                  </Paragraph>
                </Box>
                <Paragraph>{position.description}</Paragraph>
                <List>
                  {Object.values<string>(position.responsibilities)
                    .filter(responsibility => !!responsibility)
                    .map(responsibility => (
                      <List.Item key={responsibility}>
                        <Paragraph>{responsibility}</Paragraph>
                      </List.Item>
                    ))}
                </List>
              </React.Fragment>
            ))}
          </Box>
        ))}
      </Box>
      <Title className='text-center' level={2}>
        {t('skills')}
      </Title>
      <Paragraph>{skills.join(', ')}</Paragraph>
      <Title className='text-center' level={2}>
        {t('education.title')}
      </Title>
      {education.map(education => (
        <React.Fragment key={education.title}>
          <Box className='flex items-center'>
            <Title level={4} className='grow'>
              {education.title}
            </Title>
            <Paragraph className='my-1 italic text-base font-light'>
              {education.period
                .map((p: string) => {
                  if (!dayjs(p).isValid()) return p;
                  return dayjs(p).format('MM/YYYY');
                })
                .join(' - ')}
            </Paragraph>
          </Box>
          <Paragraph>{education.description}</Paragraph>
        </React.Fragment>
      ))}
      <Title className='text-center' level={2}>
        {t('languages.title')}
      </Title>
      <List>
        {languages.map(language => (
          <List.Item key={language}>{language}</List.Item>
        ))}
      </List>
    </main>
  );
}
