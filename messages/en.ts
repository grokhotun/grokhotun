import { ResumeSchema } from '@/types';

const content: { index: ResumeSchema } = {
  index: {
    title: 'Askar Yalyaev',
    subtitle: 'Javascript Frontend developer | React',
    about: {
      title: 'About',
      content:
        'A frontend developer with more than four years experience in developing high-load UI and web-apps',
    },
    skills: 'Skills',
    experience: {
      title: 'Experience',
      content: [
        {
          title: 'Samolet Development',
          place: 'Moscow, Russia',
          positions: [
            {
              period: '07/2023 - Present',
              title: 'Design System Frontend Lead',
              description: 'Head of design system developing',
              responsibilities: [
                'Team management',
                'Task planning, decomposition, estimation, and grooming',
                'Gathering technical requirements and researching user scenarios',
                'Designing component architecture',
                'Writing, maintaining, and updating Storybook documentation',
                'Frontend product teams consulting ',
                'Code review, mentoring, and conducting interviews',
              ],
            },
            {
              period: '08/2022 - 07/2023',
              title: 'Frontend developer',
              description: '',
              responsibilities: [
                'Designing application architecture and its modules',
                'Gathering technical requirements and communicating with business analysts',
                'Profiling, identifying bottlenecks, and optimizing web applications',
                'Setting up, implementing, and supporting micro-frontends',
                'Writing and maintaining end-to-end tests',
                'Configuring CI/CD pipelines',
                'Supporting and developing internal tools',
                'Code review, mentoring, and conducting interviews',
              ],
            },
          ],
        },
        {
          title: 'kt.team',
          place: 'Togliatti, Russia',
          positions: [
            {
              period: '05/2021 - 08/2022',
              title: 'Frontend developer',
              description: '',
              responsibilities: [
                'Designing application architecture and its modules',
                'Gathering technical requirements and communicating with business analysts',
                'Profiling, identifying bottlenecks, and optimizing web applications',
                'Setting up, implementing, and supporting micro-frontends',
                'Writing and maintaining end-to-end tests',
                'Configuring CI/CD pipelines',
                'Supporting and developing internal tools',
                'Code review, mentoring, and conducting interviews',
              ],
            },
          ],
        },
        {
          title: 'Artmax',
          place: 'Ufa, Russia',
          positions: [
            {
              period: '09/2020 - 05/2021',
              title: 'Fullstack developer',
              description: '',
              responsibilities: [
                'Разработка e-commerce сервиса на стеке React, Next + Redux, TypeScript',
                'Поддержка и сопровождение существующих проектов на Vue2 + Nuxt стеке',
                'Коммуникация с клиентами для обсуждения требований и деталей реализаций задач',
                'Верстка макетов, электронных писем, коммуникация с дизайнерами',
                'Развертывание и настройка серверного окружения, CI/CD',
                'Поддержка, сопровождение и рефакторинг legacy-проектов на PHP стеке',
                'Интеграция товароучетными системами (1C, TradeX)',
                'Проведение code-review',
              ],
            },
          ],
        },
        {
          title: 'Sybcom',
          place: 'Ufa, Russia',
          positions: [
            {
              period: '01/2019 - 09/2020',
              title: 'Frontend developer',
              description: '',
              responsibilities: [
                'Разработка функционала SCADA-системы для взаимодействия и сбора данных на React.js + Redux',
                'Участие в проработке и продумывание архитектуры приложения и новых модулей',
                'Разработка технической и пользовательской документации',
                'Участие в пуско-наладочных работах, проведение технического обслуживания программного обеспечения на объекте заказчика, обучение пользователей работе с системой',
                'Проведение code-review',
              ],
            },
          ],
        },
        {
          title: 'Intek',
          place: 'Ufa, Russia',
          positions: [
            {
              period: '01/2018 - 01/2019',
              title: 'Software engineer',
              description: '',
              responsibilities: [
                'Программирование ПЛК серии Мега в среде Codesys',
                'Настройка протокола ModBus RTU и TCP',
                'Разработка интерфейса пользователя в панелях оператора',
                'Разработка графических компонентов для SCADA-системы с использованием HTML, CSS, JavaScript',
                'Разработка технической и пользовательской документации',
                'Участие в пуско-наладочных работах, проведение технического обслуживания систем на объекте',
              ],
            },
          ],
        },
      ],
    },
    education: {
      title: 'Education',
      content: [
        {
          title: 'Ufa State Aviation Technical University',
          description: 'Bachelor of computer science and robotics',
          period: '09/2014 - 08/2018',
        },
      ],
    },
    languages: {
      title: 'Languages',
      content: ['Russian - Native', 'English - C1'],
    },
  },
};

export default content;
