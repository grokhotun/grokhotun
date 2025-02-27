import React from 'react';
import { Title, Paragraph, Link, List, Box } from '@/app/ui';
import dayjs from 'dayjs';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useDuration } from '../hooks';

const skills = [
  'React',
  'Next.js',
  'Vue.js',
  'Nuxt.js',

  'JavaScript',
  'TypeScript',

  'HTML',
  'HTML5',
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
  'Nginx',
  'npm',
  'yarn',
  'Storybook',
  'Nx',
  'Release-it',
  'Lerna',
  'Eslint',
  'Prettier',

  'Jest',
  'End-to-end',
  'Puppeter',
  'Test Driven Development',
  'React Testing Library',
  'Enzyme',
  'Playwright',
  'Sentry',
  'Allure',
  'Grafana',

  'Websocket',
  'REST API ',
  'GraphQL',

  'Docker',
  'docker-compose',
  'k8s',
  'CI/CD',

  'Jira',
  'Confluence',
  'Figma',
  'Git',
  'SCRUM',
  'Gitlab',
  'Github',
];

type HomeProps = { params: { lang: 'en' | 'ru' } };

export default function Home(props: HomeProps) {
  unstable_setRequestLocale(props.params.lang);
  const t = useTranslations('index');
  const duration = useDuration(props.params.lang);
  const experience = Object.values<any>(t.raw('experience.content'));
  const education = Object.values<any>(t.raw('education.content'));
  const languages = Object.values<string>(t.raw('languages.content'));
  const email = t('email');
  // const months = experience
  //   .map(exp =>
  //     exp.positions
  //       .map((position: any) => position.period)
  //       .map(([from, to]: [string, string]) => {
  //         const start = from;
  //         const end = dayjs(to).isValid() ? dayjs(to) : dayjs();
  //         const difference = dayjs(end).diff(dayjs(start), 'months');
  //         return difference;
  //       }),
  //   )
  //   .flat()
  //   .reduce((experience, current) => experience + current, 0);

  return (
    <main className='mx-auto w-[210mm] px-16 py-16'>
      <Box className='flex items-start'>
        <Box className='flex-1'>
          <Title className='w-full' level={1}>
            {t('title')}
          </Title>
          <Paragraph className='font-semibold'>{t('subtitle')}</Paragraph>
          <Paragraph>{t('thirdtitle')}</Paragraph>
        </Box>
        <Box className='flex-1 flex flex-col items-end'>
          <Link
            target='_blank'
            href='https://www.linkedin.com/in/askar-yalyaev/'
          >
            LinkedIn
          </Link>
          <Link target='_blank' href={`mailto:${email}`}>
            {email}
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
              <Title level={3}>
                {company.link ? (
                  <a target='_blank' href={company.link}>
                    {company.title}
                  </a>
                ) : (
                  company.title
                )}
              </Title>
              <Paragraph className='italic font-light'>
                {company.place}
              </Paragraph>
            </Box>
            {company.description && (
              <Box className='flex justify-between'>
                <Paragraph className='my-1 text-base font-light'>
                  {company.description}
                </Paragraph>
              </Box>
            )}
            {Object.values<any>(company.positions).map(position => (
              <React.Fragment key={position.title}>
                <Box className='flex items-center'>
                  <Title level={5} className='grow italic'>
                    {position.title}
                  </Title>
                  <Paragraph className='my-1 italic text-base font-light flex gap-1'>
                    <span>
                      {position.period
                        .map((p: string) => {
                          if (!dayjs(p).isValid()) return p;
                          return dayjs(p).format('MM/YYYY');
                        })
                        .join(' - ')}
                    </span>
                    <span>
                      ({duration(position.period[0], position.period[1])})
                    </span>
                  </Paragraph>
                </Box>
                <Paragraph>{position.description}</Paragraph>
                <List>
                  {Object.values<string>(position.responsibilities)
                    .filter(responsibility => !!responsibility)
                    .map(responsibility => (
                      <List.Item key={responsibility}>
                        <Paragraph
                          dangerouslySetInnerHTML={{ __html: responsibility }}
                        ></Paragraph>
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
              {education.link ? (
                <a target='_blank' href={education.link}>
                  {education.title}
                </a>
              ) : (
                education.title
              )}
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
