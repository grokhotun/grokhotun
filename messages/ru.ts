import { ResumeSchema } from '../src/types';

const content: { index: ResumeSchema } = {
  index: {
    title: 'Аскар Яляев',
    subtitle: 'Javascript Frontend разработчик | React',
    skills: 'Навыки',
    experience: {
      title: 'Опыт',
      content: [
        {
          title: 'Samolet Development',
          place: 'Москва, Россия',
          positions: [
            {
              period: '07/2023 - по настоящее время',
              title: 'Frontend Lead, дизайн система',
              description: 'Работа над внутренней дизайн-системой',
              responsibilities: [
                'Управление командой',
                'Планирование, декомпозиция, оценка и груминг задач',
                'Сбор технических требований и исследование пользовательских сценариев',
                'Проектирование архитектуры компонентов',
                'Написание, поддержка и наполнение документации Storybook',
                'Консалтинг продуктовых команд',
                'Код-ревью, менторство, проведение собеседований',
              ],
            },
            {
              period: '08/2022 - 07/2023',
              title: 'Frontend разработчик',
              description: 'Работа над внутренними сервисами',
              responsibilities: [
                'Проектирование архитектуры приложений и их модулей',
                'Сбор технических требований, коммуникация с бизнес-аналитиками',
                'Профилирование, поиск узких мест и оптимизация веб-приложений',
                'Настройки, внедрение и поддержка микрофронтендов',
                'Написание и поддержка end-to-end тестов',
                'Конфигурирование CI/CD',
                'Поддержка и развитие внутренних инструментов',
                'Код-ревью, менторство, проведение собеседований',
              ],
            },
          ],
        },
        {
          title: 'kt.team',
          place: 'Тольятти, Россия',
          positions: [
            {
              period: '05/2021 - 08/2022',
              title: 'Frontend разработчик',
              description:
                'Разработка внутренних сервисов в компании Samolet Development',
              responsibilities: [
                'Проектирование архитектуры приложений и их модулей',
                'Сбор технических требований, коммуникация с бизнес-аналитиками',
                'Профилирование, поиск узких мест и оптимизация веб-приложений',
                'Настройки, внедрение и поддержка микрофронтендов',
                'Написание и поддержка end-to-end тестов',
                'Конфигурирование CI/CD',
                'Поддержка и развитие внутренних инструментов',
                'Код-ревью, менторство, проведение собеседований',
              ],
            },
          ],
        },
        {
          title: 'Artmax',
          place: 'Уфа, Россия',
          positions: [
            {
              period: '09/2020 - 05/2021',
              title: 'Fullstack разработчик',
              description:
                'Заказная разработка интернет-магазинов, сайт-визиток, лендингов под ключ',
              responsibilities: [
                'Разработка функционала интернет-магазинов',
                'Разработка алгоритмов интеграции с товароучетными системами МойСклад, 1C, TradeX',
                'Сбор технических требований, коммуникация с клиентами',
                'Верстка макетов Figma, электронных писем, рекламных баннеров',
                'Развертывание и поддержка серверного окружения, конфигурирование CI/CD',
                'Поддержка и рефакторинг legacy-проектов на PHP',
                'Код-ревью',
              ],
            },
          ],
        },
        {
          title: 'СибКом',
          place: 'Уфа, Россия',
          positions: [
            {
              period: '01/2019 - 09/2020',
              title: 'Frontend разработчик',
              description: 'Работа над внутренней SCADA-системой',
              responsibilities: [
                'Разработка функционала SCADA-системы "Каскад"',
                'Разработка графических компонентов',
                'Проектирование архитектуры приложения',
                'Разработка технической и пользовательской документации',
                'Участие в пуско-наладочных работах, проведение технического обслуживания программного обеспечения на объекте заказчика, обучение пользователей работе с системой',
                'Код-ревью',
              ],
            },
          ],
        },
        {
          title: 'Intek',
          place: 'Уфа, Россия',
          positions: [
            {
              period: '01/2018 - 01/2019',
              title: 'Программист-разработчик',
              description:
                'Работа над программным обеспечением для продуктов Мега12, MegaWeb',
              responsibilities: [
                'Разработка прошивок для программируемых логических контроллеров Мега12',
                'Разработка и поддержка низкоуровневых библиотек для работы с протоколами ModBus RTU и TCP',
                'Разработка интерфейсов пользователя Weintek',
                'Разработка графических компонентов для SCADA-системы MegaWeb',
                'Написание технической и пользовательской документации',
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
          period: '09/2014 - 08/2018',
        },
      ],
    },
    languages: {
      title: 'Языки',
      content: ['Русский - носитель', 'Английский - C1'],
    },
  },
};

export default content;
