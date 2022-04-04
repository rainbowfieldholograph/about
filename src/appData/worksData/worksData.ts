import eyesclosedImg from '../../img/eyesclosed.png';
import maybetomorrowImg from '../../img/mbt.png';
import waterTransportationImg from '../../img/water-transportation.png';
import reactNativeShop from '../../img/react-native-shop.jpg';
import topAppImg from '../../img/top-app.png';
import reactShopImg from '../../img/react-shop.png';
import reactNativeShopPrev from '../../img/react-native-shop-preview.png';
import passwordGeneartorImg from '../../img/password-generator.png';
import { IWorkData } from './worksData.interface';

export const worksData: IWorkData[] = [
  {
    image: eyesclosedImg,
    title: 'Eyesclosed (Music-playlist)',
    description:
      'Fullstack приложение для прослушивания и загрузки музыки (типа как музыка ВК). В чуть более поздних версиях, в качестве стейт менеджера использовался сначала useContext + useReducer, затем MobX, но нынче используется Apollo Client local state (сам Apollo был тут почти с самого начала, но я не знал, что он так же может и в локальное состояние. Данное приложение - мой первый опыт в backend. Код frontend`а переписывался раз ~10. На данный момент находится в процессе разработки. Layout адаптивен под мобильные устройства и доступен с клавиатуры. В плане доступности учтено много мелочей, например: при открытии модального окна, фокус не выходит за пределы модалки, управление плеером клавишами. Frontend задеплоен на GithubPages, backend на Heroku, аудио-файлы хранятся в AWS s3 buckets',
    stack:
      'React, TypeScript, Vite, ApolloClient (+ Apollo local state), MongoDB, NodeJS, Express, GraphQL, ApolloServer, AWS s3 buckets',
    projectLink: 'https://rainbowfieldholograph.github.io/music-playlist-fullstack/',
    gitLink: 'https://github.com/rainbowfieldholograph/music-playlist-fullstack',
  },

  {
    image: maybetomorrowImg,
    title: 'Maybetomorrow',
    description:
      'Fullstack Todo. UI сделан с использованием MaterialUI. Адаптив, доступность, поддерживается возможность авторизации/регистрации пользователей. Проект был сделан только для того, чтобы попрактиковать авторизацию/регистацию с обеих сторон (front/back). Изредка обновляю + исправляю баги. Backend задеплоен на heroku.',
    stack: 'React, ApolloClient, MaterialUI, NodeJS, MongoDB, Express, GraphQL, JWT',
    projectLink: 'https://rainbowfieldholograph.github.io/todo-client-server/',
    gitLink: 'https://github.com/rainbowfieldholograph/todo-client-server',
  },
  {
    image: waterTransportationImg,
    title: 'Water Transportation',
    description:
      'Only frontend разработка, делалась в ноябре 2021, по макету с Figma. Adaptive layout. Репозиторий хранится на notabug. Является изменённой версией реального проекта, который делал по работе. Важная информация! Все кнопки в хедере нажимаются (даже кружок), так же на странице расписания, можно нажать "Выбрать", там будет большая форма. Задеплоено на heroku',
    stack: 'React',
    projectLink: 'https://water-transportation.herokuapp.com',
    gitLink: 'https://notabug.org/perfectblue/water-transportation',
  },
  {
    image: topAppImg,
    title: 'Top app',
    description:
      'Проект на основе курса React NextJS. Frontend, используется API courses-top.ru. Accessability, adaptive, Css grid, + - адекватно читается скрин ридерами. Хостинг: Vercel',
    stack: 'React, NextJS, TypeScript',
    projectLink: 'https://top-app-react-nextjs.vercel.app',
    gitLink: 'https://github.com/rainbowfieldholograph/top-app-react-nextjs',
  },
  {
    image: reactShopImg,
    title: 'React shop',
    description:
      'Fullstack интернет магазин. Все товары с корзины хранятся в session storage. Изначально вместо Prisma пытался использовать Sequelize. Так как приложение использует базу данных postgresql, у меня возникли некоторые сложности с деплоем данного приложения, так что, пока никуда не задеплоено.',
    stack: 'React, Mobx, NodeJS, Express, Prisma (postgresq)',
    gitLink: 'https://github.com/rainbowfieldholograph/react-shop',
  },
  {
    image: reactNativeShop,
    imagePreview: reactNativeShopPrev,
    title: 'React Native shop demo',
    description:
      'Демо версия мобильного приложения на React Native, Реальная версия приложения делалась в октябре 2021. Обычное приложение магазин.',
    stack: 'React Native',
    gitLink: 'https://github.com/rainbowfieldholograph/react-native-shop-demo',
  },
  {
    image: passwordGeneartorImg,
    title: 'Simple Password generator',
    description:
      'Генератор паролей, написанный на TypeScript. Генератор гарантирует, что в сгенерированном пароле будет хотя бы 1 символ из выбранной категории (используется рекурсия). Пояснение: У некоторых генераторов паролей есть 1 недостаток: например, при выборе длины в 10 символов и категорий: Numbers, UpperCases, LowerCases, Symbols, может случайны образом сгенерироваться пароль без единого символа из одной или более категорий.',
    stack: 'TypeScript',
    projectLink: 'https://rainbowfieldholograph.github.io/password-generator/',
    gitLink: 'https://github.com/rainbowfieldholograph/password-generator',
  },
];
