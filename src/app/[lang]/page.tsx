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
  'JavaScript, TypeScript',
  'React, Redux, Zustand, React Query, Effector, Next.js',
  'Microfrontends',
  'Node.js, npm, yarn',
  'HTML, CSS, SASS, LESS, styled-components, tailwind',
  'Ant Design, Material UI, Radix UI, Stitches',
  'Storybook',
  'Jest E2E, Puppeter, TDD, React Testing Library',
  'Websocket, REST API Graph QL',
  'Docker, docker-compose',
  'Jira, Figma, Git',
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
      <div className='flex items-center'>
        <Title className='w-full' level={1}>
          {t('title')}
        </Title>
        <NextLink href={href}>{title}</NextLink>
      </div>
      <Title level={2}>{t('subtitle')}</Title>
      <div>
        <Span>LinkedIn: </Span>
        <Link target='_blank' href='https://www.linkedin.com/in/askar-yalyaev/'>
          https://www.linkedin.com/in/askar-yalyaev/
        </Link>
      </div>
      <div>
        <Span>Email: </Span>
        <Link target='_blank' href='mailto:askarrussia@gmail.com'>
          askarrussia@gmail.com
        </Link>
      </div>
      <div>
        <Span>Telegram: </Span>
        <Link target='_blank' href='https://t.me/skrylyv'>
          https://t.me/skrylyv
        </Link>
      </div>
      <Title level={3}>{t('about.title')}</Title>
      <Paragraph>{t('about.content')}</Paragraph>
      <Divider />
      <Title level={3}>{t('skills')}</Title>
      <List>
        {skills.map(skill => (
          <List.Item key={skill}>{skill}</List.Item>
        ))}
      </List>
      <Divider />
      <Title level={3}>{t('experience.title')}</Title>
      {experience.map(company => (
        <React.Fragment key={company.title}>
          <Title level={4}>{company.title}</Title>
          <Paragraph className='italic font-light'>{company.place}</Paragraph>
          {Object.values<any>(company.positions).map(position => (
            <React.Fragment key={position.title}>
              <div className='flex items-center'>
                <Title level={5} className='grow'>
                  {position.title}
                </Title>
                <Paragraph className='my-2 italic text-base font-light'>
                  {position.period}
                </Paragraph>
              </div>
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
      <Divider />
      <Title level={3}>{t('education.title')}</Title>
      {education.map(education => (
        <React.Fragment key={education.title}>
          <div className='flex items-center'>
            <Title level={4} className='grow'>
              {education.title}
            </Title>
            <Paragraph className='my-2 italic text-base font-light'>
              {education.period}
            </Paragraph>
          </div>
          <Paragraph>{education.description}</Paragraph>
        </React.Fragment>
      ))}
      <Divider />
      <Title level={3}>{t('languages.title')}</Title>
      <List>
        {languages.map(language => (
          <List.Item key={language}>{language}</List.Item>
        ))}
      </List>
    </main>
  );
}
