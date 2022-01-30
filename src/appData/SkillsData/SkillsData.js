import {
  faHtml5,
  faNode,
  faCss3Alt,
  faJsSquare,
  faReact,
  faAws,
  faSass,
} from '@fortawesome/free-brands-svg-icons'
import mongoImg from '../../img/mongo.png'
import graphqlImg from '../../img/graphql.png'
import apolloImg from '../../img/apollo.png'
import tsImg from '../../img/typescript.png'
import MUIImg from '../../img/materialui.png'
import webpackImg from '../../img/webpack.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const skillsData = [
  {
    title: 'HTML',
    iconComponent: <FontAwesomeIcon icon={faHtml5} />,
    description:
      'Есть опыт и знания семантической вёрстки, так же доступность (она же accessability). Немного знаю про aria.',
  },
  {
    title: 'CSS',
    iconComponent: <FontAwesomeIcon icon={faCss3Alt} />,
    description:
      'Адаптивная вёрстка, опыт в работе с Flexbox, так же немного знаком с grid (самую малость).',
  },
  {
    title: 'JavaScript',
    iconComponent: <FontAwesomeIcon icon={faJsSquare} />,
    description: 'Основы, ES6+, немного работы с DOM, немного ООП.',
  },
  {
    title: 'React',
    iconComponent: <FontAwesomeIcon icon={faReact} />,
    description:
      'В реакте чувствую себя плюс-минус уверенно, это основной фреймворк (или библиотека, как хотите). Основные знания, хуки, библиотеки, JSX, функциональный подход, немного мемоизации.',
  },
  {
    title: 'SCSS',
    iconComponent: <FontAwesomeIcon icon={faSass} />,
    description:
      'Есть небольшой опыт работы с данным препроцессором. Переменные, вложенность.',
  },
  {
    title: 'TypeScript',
    iconComponent: <img src={tsImg} alt="Typescript" width={30} height={30} />,
    description:
      'Имеются начальные знания TypeScript: типы, кастомные типы, интерфейсы, enum, немножко tsconfig. Знаю, что есть еще дополнительный функционал для ООП.',
  },
  {
    title: 'React Native',
    iconComponent: <FontAwesomeIcon icon={faReact} />,
    description: 'Есть опыт разработки мобильных приложений на React Native.',
  },
  {
    title: 'React Material UI',
    iconComponent: (
      <img className="reverseColor" src={MUIImg} alt="MongoDB" width={30} height={30} />
    ),
    description: 'Потыкал немного, что да как, вроде немного разобрался.',
  },
  {
    title: 'Webpack',
    iconComponent: (
      <img className="reverseColor" src={webpackImg} alt="MongoDB" width={30} height={30} />
    ),
    description:
      'Знаю что это, и немного понимаю как с ним можно работать. Но опыта нормальной настройки webpack нет.',
  },
  {
    title: 'Vite',
    iconComponent: (
      <svg
        width="30px"
        height="30px"
        viewBox="0 0 256 257"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
      >
        <path
          d="M255.152904,37.937763 L134.896865,252.97646 C132.413943,257.416178 126.035075,257.442321 123.5149,253.02417 L0.87443175,37.9584812 C-1.87111536,33.1438084 2.24595371,27.3119153 7.70191187,28.2871109 L128.086639,49.8052023 C128.854587,49.9424525 129.640835,49.9411454 130.408783,49.8012155 L248.276014,28.3179595 C253.713738,27.3268821 257.850198,33.1136134 255.152904,37.937763 Z"
          fill="white"
        ></path>
        <path
          d="M185.432401,0.0631038902 L96.4393502,17.500942 C94.9766549,17.7875335 93.8936852,19.0270992 93.8054529,20.5146956 L88.3311293,112.971419 C88.2023755,115.149123 90.2023075,116.839261 92.3277254,116.349082 L117.10466,110.630976 C119.422882,110.096354 121.517582,112.138114 121.041128,114.469407 L113.67994,150.515893 C113.184532,152.941955 115.462232,155.016394 117.831433,154.29681 L133.134834,149.647295 C135.507302,148.927059 137.786963,151.00738 137.285019,153.435402 L125.586724,210.056351 C124.854723,213.598061 129.565674,215.529368 131.530313,212.49287 L132.842687,210.464834 L205.359174,65.745575 C206.573511,63.3224548 204.479465,60.5594769 201.818118,61.0730542 L176.31441,65.9952397 C173.91776,66.4573155 171.878614,64.2253653 172.555061,61.8805431 L189.2009,4.17570253 C189.878001,1.82692623 187.831665,-0.406957894 185.432401,0.0631038902 Z"
          fill="black"
        ></path>
      </svg>
    ),
    description:
      'Могу ввести в консоли: npm init vite@latest и выбрать нужные мне параметры. Есть небольшой опыт работы с ним. Он мне нравится своей простотой и скоростью.',
  },
  {
    title: 'NodeJS',
    iconComponent: <FontAwesomeIcon icon={faNode} />,
    description: 'Знаю поверхностно, опыт небольшой.',
  },
  {
    title: 'MongoDB | Mongoose',
    iconComponent: (
      <img className="reverseColor" src={mongoImg} alt="MongoDB" width={30} height={30} />
    ),
    description: 'Работал с MongoDB через Mongoose.',
  },
  {
    title: 'GraphQL',
    iconComponent: (
      <img className="reverseColor" src={graphqlImg} alt="MongoDB" width={40} height={40} />
    ),
    description:
      'Сделал пару серверных приложений (pet projects) с использованием GraphQL. Умею работать с playground. +ApolloServer (самую малость, уже и забыл, что такое вообще существовало)',
  },
  {
    title: 'Apollo Client',
    iconComponent: (
      <img className="reverseColor" src={apolloImg} alt="MongoDB" width={40} height={40} />
    ),
    description: 'Умею работать с хуками Apollo Client, опыт есть.',
  },
  {
    title: 'AWS S3 Buckets',
    iconComponent: <FontAwesomeIcon icon={faAws} />,
    description:
      'Поверхностно разобрался как через серверное приложение загружать туда файлы.',
  },
]
