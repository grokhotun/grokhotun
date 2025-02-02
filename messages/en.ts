import { ResumeSchema } from '@/types';

const content: { index: ResumeSchema } = {
  index: {
    title: 'Askar Yalyaev',
    subtitle: 'Javascript Frontend Engineer | React, TypeScript, Node.js',
    summary: {
      title: 'About',
      content:
        'Frontend engineer with 5 years of experience in developing scalable systems including e-commerce platforms, high-load web applications',
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
              title: 'Frontend Lead, design system',
              description: 'Head of design system developing',
              responsibilities: [
                'Developed a design system, establishing a unified visual language, improving development efficiency',

                'Implemented a streamlined process for contributing new features and bug fixes, improving collaboration, code quality, and accelerating development cycles',

                'Created and maintained comprehensive Storybook documentation for developers, streamlining UI component usage and ensuring consistency across the development team',
              ],
            },
            {
              period: '08/2022 - 07/2023',
              title: 'Frontend developer',
              description: '',
              responsibilities: [
                'Conducted an audit to identify bottlenecks within the application, successfully reducing the bundle size by 30%, enhancing performance and improving loading time',

                'Developed and wrote a comprehensive guide for utilizing dynamic environment variables in web applications, enhancing flexibility and simplifying configuration management for the development team',

                'Managed the end-to-end recruitment process, identifying and interviewing candidates, and successfully hired 5 developers with the right expertise for each project',
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
                'Refactored editable tables across five key service screens, reducing re-renders and improving performance by 12%',

                'Increased unit test coverage from 62% to 86%, significantly improving code reliability and reducing the risk of defects',
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
                'Designed and implemented a mobile version of the client’s e-commerce site, increasing unique users by 30% and effectively capturing the mobile audience',

                "Improved the client's website indexing through SEO optimizations, boosting its search ranking from the second page to the top of the first page",

                'Developed a trigger-based email campaign mechanism for an e-commerce platform, boosting conversion rates by 2x through timely, personalized messages aligned with customer needs',

                'Developed an algorithm to integrate the e-commerce database with the TradeX inventory management system, optimizing data synchronization and workflow efficiency',
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
                'Developed and maintained SCADA system functionality "Kaskad"',

                'Participated in commissioning activities, provided on-site software maintenance',
              ],
            },
          ],
        },
        {
          title: 'Aviatron (ex. Intek)',
          place: 'Ufa, Russia',
          positions: [
            {
              period: '08/2018 - 01/2019',
              title: 'Software engineer',
              description: '',
              responsibilities: [
                'Developed a low-level library for seamless communication with Modbus RTU and TCP protocols, enabling efficient and reliable data exchange',

                'Wrote and authored technical documentation for the usage of a low-level library, ensuring clear implementation and support for developers',

                'Designed a testing rig based on the Mega12 controller for load testing Modbus and TCP ports of other controllers, ensuring reliability and performance under stress conditions',
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
