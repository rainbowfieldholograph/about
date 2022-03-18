import { ReactComponent as JavascriptIcon } from '../../img/javascript-icon.svg';
import { ReactComponent as TypescriptIcon } from '../../img/typescript-icon.svg';
import { ReactComponent as HTMLIcon } from '../../img/html-icon.svg';
import { ReactComponent as CSSIcon } from '../../img/css-icon.svg';
import { ReactComponent as ReactIcon } from '../../img/react-icon.svg';
import { ReactComponent as VueIcon } from '../../img/vue-icon.svg';
import { ReactComponent as NextJSIcon } from '../../img/nextjs-icon.svg';
import { ReactComponent as SCSSIcon } from '../../img/scss-icon.svg';
import { ReactComponent as MaterialUiIcon } from '../../img/materialui-icon.svg';
import { ReactComponent as WebpackIcon } from '../../img/webpack-icon.svg';
import { ReactComponent as ViteIcon } from '../../img/vite-icon.svg';
import { ReactComponent as MobxIcon } from '../../img/mobx-icon.svg';
import { ReactComponent as ApolloIcon } from '../../img/apollo-icon.svg';
import { ReactComponent as ReduxIcon } from '../../img/redux-icon.svg';
import { ReactComponent as NodejsIcon } from '../../img/nodejs-icon.svg';
import { ReactComponent as MongoDbIcon } from '../../img/mongodb-icon.svg';
import { ReactComponent as GraphQlIcon } from '../../img/graphql-icon.svg';
import { ReactComponent as PrismaIcon } from '../../img/prisma-icon.svg';
import { ReactComponent as AwsIcon } from '../../img/aws-icon.svg';
import { ReactComponent as GitIcon } from '../../img/git-icon.svg';
import { ReactComponent as FigmaIcon } from '../../img/figma-icon.svg';
import { ReactComponent as HerokuIcon } from '../../img/heroku-icon.svg';

import { ISkillCategory } from './skillsData.interface';

export const skillsData: ISkillCategory[] = [
  {
    title: 'General',
    skills: [
      {
        title: 'JavaScript',
        iconComponent: <JavascriptIcon color="white" />,
        description: 'Основы, ES6+, немного работы с DOM, немного ООП, работа с AJAX.',
      },
      {
        title: 'TypeScript',
        iconComponent: <TypescriptIcon color="white" />,
        description: 'Имеются знания TypeScript, активно изучаю + практикую.',
      },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      {
        title: 'HTML',
        iconComponent: <HTMLIcon color="white" />,
        description: 'Есть опыт и знания семантической вёрстки и accessability.',
      },
      {
        title: 'CSS',
        iconComponent: <CSSIcon color="white" />,
        description: 'Адаптивная вёрстка, опыт в работе с Flex, так же знаком с Grid.',
      },
      {
        title: 'ReactJS',
        iconComponent: <ReactIcon color="white" />,
        description:
          'Основные знания, хуки, библиотеки, JSX, функциональный подход, немного мемоизации.',
      },
      {
        title: 'VueJS',
        iconComponent: <VueIcon color="white" />,

        description: 'Начал учить недавно, но очень быстро осваиваюсь.',
      },
      {
        title: 'React Native',
        iconComponent: <ReactIcon color="white" />,
        description:
          'Имеется практический опыт разработки мобильных приложений на React Native с использованием дополнительных библиотек.',
      },
      {
        title: 'React NextJS',
        iconComponent: <NextJSIcon color="white" />,
        description: 'Есть опыт работы с SSR на React с помощью фреймворка NextJS.',
      },
      {
        title: 'SCSS',
        iconComponent: <SCSSIcon color="white" />,
        description: 'Умею работать с препроцессором SCSS, активно применяю на практике.',
      },
      {
        title: 'React Material UI',
        iconComponent: <MaterialUiIcon color="white" />,
        description: 'Есть опыт разработки React приложений вместе с Material UI.',
      },
      {
        title: 'Webpack',
        iconComponent: <WebpackIcon color="white" />,
        description: 'Основные знания настройки приложения, подключение плагинов и тд.',
      },
      {
        title: 'Vite',
        iconComponent: <ViteIcon color="white" />,
        description: 'Знания и практический опыт настройки приложения с Vite.',
      },
      {
        title: 'MobX',
        iconComponent: <MobxIcon color="white" />,
        description: 'Основные знания + определённый опыт использования на практике.',
      },
      {
        title: 'Apollo Client',
        iconComponent: <ApolloIcon color="white" />,
        description:
          'Умею работать с Apollo Client, как для запросов на GraphQL API, так и для управления локальным состоянием приложения.',
      },
      {
        title: 'Redux / Redux Thunk / Redux Toolkit',
        iconComponent: <ReduxIcon color="white" />,
        description: 'Умею управлять глобальным состоянием приложения, с помощью Redux.',
      },
    ],
  },
  {
    title: 'Backend',
    skills: [
      {
        title: 'NodeJS + ExpressJS',
        iconComponent: <NodejsIcon color="white" />,
        description:
          'Дефолтные знания. Могу по шаблону сделать простой сервер без архитектуры.',
      },
      {
        title: 'MongoDB | Mongoose',
        iconComponent: <MongoDbIcon color="white" />,
        description: 'Работал с MongoDB через Mongoose.',
      },
      {
        title: 'GraphQL / Apollo Server',
        iconComponent: <GraphQlIcon color="white" />,
        description:
          'Сделал пару серверных приложений (pet projects), с использованием GraphQL. Умею работать с playground. Так же знаком с Apollo Server.',
      },
      {
        title: 'Prisma',
        iconComponent: <PrismaIcon color="white" />,
        description: 'Есть опыт работы с PostreSQL через ORM Prisma.',
      },
      {
        title: 'AWS S3 Buckets',
        iconComponent: <AwsIcon color="white" />,
        description: 'Загрузка файлов на AWS s3 buckets со своего серверного приложения.',
      },
    ],
  },
  {
    title: 'Other Skills',
    skills: [
      {
        title: 'Git',
        iconComponent: <GitIcon color="white" />,
        description: 'Основные команды.',
      },
      {
        title: 'Figma',
        iconComponent: <FigmaIcon color="white" />,
        description: 'Есть опыт вёрстки с макета Figma.',
      },
      {
        title: 'Heroku',
        iconComponent: <HerokuIcon color="white" />,
        description: 'Деплоил туда пару приложений NodeJS.',
      },
    ],
  },
];
