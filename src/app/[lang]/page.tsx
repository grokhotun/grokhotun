import React from 'react';
import {
  Title,
  Paragraph,
  Span,
  Link,
  Divider,
  List,
  RussianFlag,
  BritishFlag,
  Box,
} from '@/app/ui';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import NextLink from 'next/link';

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
  'JavaScript',
  'TypeScript',

  'HTML',
  'CSS',
  'SASS',
  'LESS',
  'styled-components',
  'tailwind',

  'React',
  'Next.js',

  'Redux',
  'Zustand',
  'ReactQuery',
  'Effector',
  'Microfrontends',

  'Ant Design, Material UI, Radix UI, Stitches',

  'Webpack',
  'Vite',
  'Node.js',
  'npm',
  'yarn',
  'Storybook',

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
    <main className='py-9 mx-auto w-[210mm]'>
      <Box className='flex items-center'>
        <Title className='w-full' level={1}>
          {t('title')}
        </Title>
        <NextLink href={href}>{title}</NextLink>
      </Box>
      <Title level={2}>{t('subtitle')}</Title>
      <Box>
        <Span>LinkedIn: </Span>
        <Link target='_blank' href='https://www.linkedin.com/in/askar-yalyaev/'>
          https://www.linkedin.com/in/askar-yalyaev/
        </Link>
      </Box>
      <Box>
        <Span>Email: </Span>
        <Link target='_blank' href='mailto:askarrussia@gmail.com'>
          askarrussia@gmail.com
        </Link>
      </Box>
      <Box>
        <Span>Telegram: </Span>
        <Link target='_blank' href='https://t.me/skrylyv'>
          https://t.me/skrylyv
        </Link>
      </Box>
      <Title level={3}>{t('experience.title')}</Title>
      {experience.map(company => (
        <React.Fragment key={company.title}>
          <Title level={4}>{company.title}</Title>
          <Paragraph className='italic font-light'>{company.place}</Paragraph>
          {Object.values<any>(company.positions).map(position => (
            <React.Fragment key={position.title}>
              <Box className='flex items-center'>
                <Title level={5} className='grow'>
                  {position.title}
                </Title>
                <Paragraph className='my-2 italic text-base font-light'>
                  {position.period}
                </Paragraph>
              </Box>
              <Paragraph>{position.description}</Paragraph>
              <List>
                {Object.values<string>(position.responsibilities)
                  .filter(responsibility => !!responsibility)
                  .map(responsibility => (
                    <List.Item key={responsibility}>{responsibility}</List.Item>
                  ))}
              </List>
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
      <Title level={3}>{t('skills')}</Title>
      <Paragraph>{skills.join(', ')}</Paragraph>
      <Title level={3}>{t('education.title')}</Title>
      {education.map(education => (
        <React.Fragment key={education.title}>
          <Box className='flex items-center'>
            <Title level={4} className='grow'>
              {education.title}
            </Title>
            <Paragraph className='my-2 italic text-base font-light'>
              {education.period}
            </Paragraph>
          </Box>
          <Paragraph>{education.description}</Paragraph>
        </React.Fragment>
      ))}
      <Title level={3}>{t('languages.title')}</Title>
      <List>
        {languages.map(language => (
          <List.Item key={language}>{language}</List.Item>
        ))}
      </List>
    </main>
  );
}
