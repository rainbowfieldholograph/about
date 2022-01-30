import {
  faHtml5,
  faNode,
  faCss3Alt,
  faJsSquare,
  faReact,
  faAws,
  faSass,
  faDocker,
  faFigma,
  faGitSquare,
  faLinux,
} from '@fortawesome/free-brands-svg-icons'
import mongoImg from '../img/mongo.png'
import graphqlImg from '../img/graphql.png'
import apolloImg from '../img/apollo.png'
import tsImg from '../img/typescript.png'
import MUIImg from '../img/materialui.png'
import webpackImg from '../img/webpack.png'
import prismaImg from '../img/prisma.png'
import sequelizeImg from '../img/sequelize.png'
import herokuImg from '../img/heroku.png'
import reduxImg from '../img/redux.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const skillsData = {
  general: {
    title: 'General',
    skills: [
      {
        title: 'JavaScript',
        iconComponent: <FontAwesomeIcon icon={faJsSquare} />,
        description: 'Основы, ES6+, немного работы с DOM, немного ООП, работа с http.',
      },
      {
        title: 'TypeScript',
        iconComponent: <img src={tsImg} alt="Typescript" width={30} height={30} />,
        description:
          'Имеются начальные знания TypeScript: строгая типизация, кастомные типы, интерфейсы, enum, поверхностно знаком с настройкой tsconfig.',
      },
    ],
  },
  frontend: {
    title: 'Frontend',
    skills: [
      {
        title: 'HTML',
        iconComponent: <FontAwesomeIcon icon={faHtml5} />,
        description:
          'Есть опыт и знания семантической вёрстки, так же доступность (accessability).',
      },
      {
        title: 'CSS',
        iconComponent: <FontAwesomeIcon icon={faCss3Alt} />,
        description:
          'Адаптивная вёрстка, опыт в работе с Flexbox, так же немного знаком с grid.',
      },
      {
        title: 'ReactJS',
        iconComponent: <FontAwesomeIcon icon={faReact} />,
        description:
          'В реакте чувствую себя плюс-минус уверенно. Основные знания, хуки, библиотеки, JSX, функциональный подход, немного мемоизации.',
      },
      {
        title: 'SCSS',
        iconComponent: <FontAwesomeIcon icon={faSass} />,
        description:
          'Когда-то был небольшой опыт работы с данным препроцессором. Знания начальные: переменные, вложенность.',
      },
      {
        title: 'React Native',
        iconComponent: <FontAwesomeIcon icon={faReact} />,
        description:
          'Есть опыт разработки мобильных приложений на React Native с использованием дополнительных библиотек.',
      },
      {
        title: 'React Material UI',
        iconComponent: (
          <img className="reverseColor" src={MUIImg} alt="MongoDB" width={30} height={30} />
        ),
        description: 'Попробовал, вроде разобрался.',
      },
      {
        title: 'Webpack',
        iconComponent: (
          <img
            className="reverseColor"
            src={webpackImg}
            alt="MongoDB"
            width={30}
            height={30}
          />
        ),
        description:
          'Знаю что это, и немного понимаю как с ним можно работать. Но опыта самостоятельной настройки webpack нет.',
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
          'Могу ввести в консоли: npm init vite@latest и выбрать нужные мне параметры. Есть небольшой опыт работы с ним.',
      },
      {
        title: 'MobX',
        iconComponent: (
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
          >
            <path
              d="M256 236.394V19.607c0-8.894-5.923-16.4-14.037-18.8l-9.215 5.514-102.265 109.037-3.206 10.021-1.873 9.62 31.89 119.18 4.933 1.82h74.167c10.828 0 19.606-8.777 19.606-19.605"
              fill="#FFF"
            />
            <path
              d="M0 19.606v216.787c0 6.705 3.367 12.62 8.5 16.155l6.287-3.01 108.246-115.894 4.244-8.265.159-7.99L97.976 5.306 93.513 0H19.606C8.778 0 0 8.778 0 19.606"
              fill="#FFF"
            />
            <path
              d="M127.277 125.38L241.963.806a19.595 19.595 0 0 0-5.57-.807H93.515l33.763 125.38z"
              fill="#FFF"
            />
            <path
              d="M19.606 256h142.622l-34.951-130.621L8.499 252.549A19.511 19.511 0 0 0 19.606 256"
              fill="#FFF"
            />
            <path
              d="M94.918 97.03h14.225c5.668 21.386 12.119 40.152 19.316 57.085 8.152-19.05 14.127-37.83 19.185-57.086h13.442c-6.02 23.926-15.868 48.04-27.132 72.93h-11.89c-10.82-23.586-20.03-47.837-27.146-72.93zm-46.92-37.055h31.63v135.637h-31.77v-10.456H67.33V70.152H47.998V59.975zm160.169 10.177h-19.332v115.004h19.47v10.456h-31.769V59.975h31.63v10.177z"
              fill="#FFF"
              stroke="#000"
              strokeWidth={8}
            />
          </svg>
        ),
        description: 'Есть основные знания и опыт разработки с ним, но глубоко не вникал.',
      },
      {
        title: 'Apollo Client',
        iconComponent: (
          <img
            className="reverseColor"
            src={apolloImg}
            alt="Apollo Client"
            width={40}
            height={40}
          />
        ),
        description: 'Умею работать с хуками Apollo Client, опыт есть.',
      },
      {
        title: 'Redux / Redux Toolkit',
        iconComponent: (
          <img className="reverseColor" src={reduxImg} alt="Redux" width={30} height={30} />
        ),
        description:
          'Совсем недавно начал учить Redux / Redux Toolkit. Пока что, нахожусь в процессе обучения.',
      },
    ],
  },
  backend: {
    title: 'Backend',
    skills: [
      {
        title: 'NodeJS + ExpressJS',
        iconComponent: <FontAwesomeIcon icon={faNode} />,
        description:
          'Могу по шаблону сделать простой сервер без сложной архитектуры. Опыт имеется',
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
          <img
            className="reverseColor"
            src={graphqlImg}
            alt="GraphQL"
            width={40}
            height={40}
          />
        ),
        description:
          'Сделал пару серверных приложений (pet projects) с использованием GraphQL. Умею работать с playground. Так же знаком с ApolloServer.',
      },
      {
        title: 'Prisma',
        iconComponent: (
          <img className="reverseColor" src={prismaImg} alt="Prisma" width={30} height={30} />
        ),
        description: 'Опыта очень мало, применял всего 1 раз.',
      },
      {
        title: 'Sequelize',
        iconComponent: (
          <img
            className="reverseColor"
            src={sequelizeImg}
            alt="Sequelize"
            width={30}
            height={30}
          />
        ),
        description:
          'Попытался использовать, не понравилось (не осилил), предпочел использовать Prisma. ИМХО синтаксис выглядит страшно и громоздко.',
      },
      {
        title: 'AWS S3 Buckets',
        iconComponent: <FontAwesomeIcon icon={faAws} />,
        description:
          'Поверхностно разобрался как через серверное приложение загружать файлы на AWS s3 buckets.',
      },
    ],
  },
  other: {
    title: 'Other Skills',
    skills: [
      {
        title: 'Git',
        iconComponent: <FontAwesomeIcon icon={faGitSquare} />,
        description: 'Основные команды. Имеется опыт (смотрите github профиль).',
      },
      {
        title: 'Figma',
        iconComponent: <FontAwesomeIcon icon={faFigma} />,
        description: 'Есть опыт вёрстки с макета Figma.',
      },
      {
        title: 'Linux',
        iconComponent: <FontAwesomeIcon icon={faLinux} />,
        description:
          'Чуть-чуть знаком с десктопным линукс (Debian 11, так же пробовал Trisquel). Немного умею в консоль: дефолтные команды: apt, работа с файлами, curl.',
      },
      {
        title: 'Docker',
        iconComponent: <FontAwesomeIcon icon={faDocker} />,
        description: 'Знаю что это и зачем это нужно. Есть минимальный опыт.',
      },
      {
        title: 'Heroku',
        iconComponent: (
          <img src={herokuImg} className="reverseColor" alt="Heroku" width={35} height={35} />
        ),
        description:
          'Деплоил туда пару приложений NodeJS. Понимаю как им пользоваться на базовом уровне.',
      },
    ],
  },
}
