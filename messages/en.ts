import { ResumeSchema } from '@/types';

const content: { index: ResumeSchema } = {
  index: {
    title: 'Askar Yalyaev',
    subtitle: 'Senior Javascript Frontend Engineer',
    summary: {
      title: 'About',
      content:
        'Frontend Engineer with 6+ years of experience in building scalable and high-performance web applications, including e-commerce platforms and high-load systems. Mainly I work with TypeScript and React, but also have experience with Vue.js. For the past two years, I have been leading the development of a design system. Skilled in developing responsive, user-friendly interfaces and optimizing web performance',
    },
    skills: 'Skills',
    experience: {
      title: 'Experience',
      content: [
        {
          title: 'Samolet Group',
          place: 'Moscow, Russia',
          link: 'https://samolet.ru/en/investors/about_us/',
          positions: [
            {
              period: ['2023-09-01', 'Present'],
              duration: '2.7 years',
              title: 'Frontend Lead, design system',
              description: 'Head of Design System Development',
              responsibilities: [
                'Developed a design system, establishing a unified visual language, improving development efficiency, improved UI consistence by <b>92%</b> and reduce design debt',

                'Implemented a streamlined process for contributing new features and bug fixes, improving collaboration, code quality, and accelerating feature delivery by <b>23%</b>',

                'Created and maintained comprehensive Storybook documentation for developers, streamlining UI component usage and reducing onboarding time for new developers by <b>57%</b>',

                'Configured CI/CD pipelines in GitLab to automate snapshot testing, ensuring UI stability and preventing regressions across the design system',
              ],
            },
            {
              period: ['2022-08-01', '2023-09-01'],
              duration: '1.2 years',
              title: 'Frontend developer',
              description: '',
              responsibilities: [
                'Conducted an audit to identify bottlenecks within the application, successfully reducing the bundle size by <b>26.8%</b>, enhancing performance and improving loading time',

                'Implemented a microfrontend architecture, enabling independent deployment and scaling of key services, which improved development speed and maintainability',

                'Developed and wrote a comprehensive guide for utilizing dynamic environment variables in web applications, enhancing flexibility and simplifying configuration management for the development teams',

                'Managed the end-to-end recruitment process, identifying and interviewing candidates, and successfully hired <b>5 developers</b> with the right expertise for each project',
              ],
            },
          ],
        },
        {
          title: 'kt.team',
          place: 'Togliatti, Russia',
          link: 'https://kt.team/en/',
          positions: [
            {
              period: ['2021-04-01', '2022-08-01'],
              duration: '1.5 years',
              title: 'Frontend developer',
              description:
                'Outstaffed to "Samolet Group" as a frontend engineer',
              responsibilities: [
                'Contributed to the development of a first-to-market product, leading to a successful launch and generating revenue from the first release',

                'Refactored editable tables across five key service screens, reducing re-renders and improving performance, leading to a First Contentful Paint (FCP) improvement from <b>3.2s</b> to <b>1.8s</b> and a Largest Contentful Paint (LCP) reduction from <b>5.5s</b> to <b>2.1s</b>',

                'Increased unit test coverage from <b>44.3% to 86.7%</b>, significantly improving code reliability and reducing the risk of defects',
              ],
            },
          ],
        },
        {
          title: 'Artmax',
          place: 'Ufa, Russia',
          link: '',
          positions: [
            {
              period: ['2020-09-01', '2021-04-01'],
              duration: '8 months',
              title: 'Fullstack developer',
              description: '',
              responsibilities: [
                'Designed and implemented a mobile version of the client’s e-commerce site, increasing unique users by <b>58.3%</b> and effectively capturing the mobile audience',

                "Improved the client's website indexing through SEO optimizations, boosting its search ranking from <b>the second page to the top of the first page</b>",

                'Developed a trigger-based email campaign mechanism for an e-commerce platform, boosting conversion rates by 2x and increasing revenue from email marketing by 12-18% through timely, personalized product recommendations aligned with customer needs',

                'Developed an algorithm to integrate the e-commerce database with the TradeX inventory management system, optimizing data synchronization and workflow efficiency',
              ],
            },
          ],
        },
        {
          title: 'Sybcom',
          place: 'Ufa, Russia',
          link: '',
          positions: [
            {
              period: ['2019-01-01', '2020-09-01'],
              duration: '1.9 years',
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
          link: '',
          positions: [
            {
              period: ['2018-06-01', '2019-01-01'],
              duration: '8 months',
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
          period: ['2014-09-01', '2018-09-01'],
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
