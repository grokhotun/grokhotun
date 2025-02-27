import { ResumeSchema } from '../src/types';

const content: { index: ResumeSchema } = {
  index: {
    title: 'Аскар Яляев',
    subtitle: 'Senior Javascript Frontend разработчик',
    thirdtitle: '6+ лет опыта',
    email: 'askarrussia@gmail.com',
    summary: {
      title: 'Обо мне',
      content:
        'Фронтенд-разработчик с опытом более 6 лет в разработке масштабируемых начиная от E-commerce веб-сайтов и заканчивая  высоконагруженными web приложениями. Последние 2 года занимался руководством команды дизайн-системы, разработкой и внедрением',
    },
    skills: 'Навыки',
    experience: {
      title: 'Опыт работы',
      content: [
        {
          title: 'Samolet Development',
          place: 'Москва, Россия',
          link: 'https://samolet.ru/',
          positions: [
            {
              period: ['2023-09-01', 'по настоящее время'],
              title: 'Frontend Lead, дизайн система',
              description: 'Работа над внутренней дизайн-системой',
              responsibilities: [
                'Разработал дизайн-систему с нуля, что позволило унифицировать дизайн всех продуктов и сократить показатели Time-To-Market',
                'Организовал и описал единый процесс контрибьютинга, баг-репортинга и сбора обратной связи',
                'Разработал и поддерживал документацию-стенд Storybook',
                'Управлял командой из 3 frontend-разработчиков, планировал, декомпозировал, оценивал и грумил задачи',
                'Участвовал в сборе технических требований и исследовании пользовательских сценариев, коммуникация с дизайн-лидами',
                'Занимался приоритизацией беклога, постановкой целей на квартал',
                'Внедрил процесс CI/CD для монорепозитория, настроив независимую сборку и публикацию библиотек дизайн-системы по тегам, что оптимизировало развертывание и ускорило выпуск обновлений',
                'Консультировал продуктовые команды',
                'Участие с докладами во внутренних встречах гильдии',
              ],
            },
            {
              period: ['2022-08-01', '2023-09-01'],
              title: 'Frontend разработчик',
              description: 'Работа над внутренними сервисами',
              responsibilities: [
                'Оптимизировал конфигурацию сборщика приложения, что позволило сократить размер приложения на 26.8%',
                'Принимал участие в построении и внедрении микрофронтенд архитектуры',
                'Писал и поддерживал end-to-end тесты',
                'Поддерживал и развивал внутренние библиотеки и инструменты разработки',
                'Занимался сбором технических требований, коммуницировал с бизнес-аналитиками',
                'Провел более 20 собеседований, впоследствии чего были наняты 5 frontend инженеров',
              ],
            },
          ],
        },
        {
          title: 'kt.team',
          place: 'Тольятти, Россия',
          link: 'https://www.kt-team.ru/',
          positions: [
            {
              period: ['2021-04-01', '2022-08-01'],
              title: 'Frontend разработчик',
              description:
                'Разработка внутренних сервисов в компании Samolet Development',
              responsibilities: [
                'Участвовал в разработке одного из первых веб-сервисов, запущенных в продакшн',
                'Занимался сбором технических требований, коммуницировал с бизнес-аналитиками',
                'Пропрофилировал и оптимизировал веб-сервисы, что позволило повысить показатели метрик LCP с 5.5 с до 2.1 с и FCP 3.2 с до 1.8 c',
                'Увеличил покрытие кода unit-тестами с 44.3% до 86.7%',
                'Писал и поддерживал end-to-end тесты',
                'Поддерживал и развивал внутренние библиотеки и инструменты',
              ],
            },
          ],
        },
        {
          title: 'Artmax',
          place: 'Уфа, Россия',
          link: '',
          positions: [
            {
              period: ['2020-09-01', '2021-04-01'],
              title: 'Fullstack разработчик',
              description:
                'Заказная разработка интернет-магазинов, сайт-визиток, лендингов под ключ',
              responsibilities: [
                'Разрабатывал функционал интернет-магазинов',
                'Разработал под ключи алгоритм интеграции с товароучетной системой TradeX для одного из клиентов',
                'Участвовал в сборе технических требований и коммуникации с клиентами',
                'Занимался версткой макетов Figma, электронных писем, рекламных баннеров',
                'Развертывал и поддерживал серверное окружение, конфигурировал CI/CD деплоймент',
                'Поддерживал и рефакторил legacy-проекты на PHP',
                'Код-ревью',
              ],
            },
          ],
        },
        {
          title: 'СибКом',
          place: 'Уфа, Россия',
          link: '',
          positions: [
            {
              period: ['2019-01-01', '2020-09-01'],
              title: 'Frontend разработчик',
              description: 'Работа над внутренней SCADA-системой',
              responsibilities: [
                'Разрабатывал функционал SCADA-системы "Каскад"',
                'Разрабатывал переиспользуемые графические компоненты и мнемосхемы',
                'Поддерживал и актуализировал техническую и пользовательскую документациию',
                'Участвовал в пуско-наладочных работах, проводил техническое обслуживание программного обеспечения на объекте клиента, обучал пользователей работе с системой',
                'Код-ревью',
              ],
            },
          ],
        },
        {
          title: 'Авиатрон (ex. Intek)',
          place: 'Уфа, Россия',
          link: '',
          positions: [
            {
              period: ['2018-06-01', '2019-01-01'],
              title: 'Программист-разработчик',
              description:
                'Работа над программным обеспечением для продуктов Мега12, MegaWeb',
              responsibilities: [
                'Разрабатывал прошивки для программируемых логических контроллеров Мега12',
                'Разработал с нуля низкоуровневую библиотеку для контроллеров семейства STM для работы с протоколами ModBus RTU и TCP',
                'Разрабатывал интерфейсы пользователя для панелей Weintek',
                'Разрабатывал графические компоненты для SCADA-системы "MegaWeb"',
                'Разработка технической и пользовательской документации',
                'Участие в пуско-наладочных работах, проведение технического обслуживания программного обеспечения на объекте заказчика, обучение пользователей работе с системой',
              ],
            },
          ],
        },
      ],
    },
    education: {
      title: 'Образование',
      content: [
        {
          title: 'Уфимский Авиационный Технический Университет',
          description: 'Бакалавр, Информатика и вычислительная техника',
          link: 'https://uust.ru/history/usatu/',
          period: ['2014-09-01', '2018-09-01'],
        },
      ],
    },
    languages: {
      title: 'Языки',
      content: ['Русский - носитель', 'Английский - B2'],
    },
  },
};

export default content;
