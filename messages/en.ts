import { ResumeSchema } from '@/types';

const content: { index: ResumeSchema } = {
  index: {
    title: 'Askar Yalyaev',
    subtitle: 'Javascript Frontend developer | React',
    skills: 'Skills',
    experience: {
      title: 'Work experience',
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
              responsibilities: ['-'],
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
              responsibilities: ['-'],
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
