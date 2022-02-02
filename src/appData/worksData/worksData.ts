import eyesclosedImg from '../../img/eyesclosed.png'
import maybetomorrowImg from '../../img/mbt.png'
import waterTransportationImg from '../../img/water-transportation.png'
import reactNativeShop from '../../img/react-native-shop.jpg'
import topAppImg from '../../img/top-app.png'
import reactShopImg from '../../img/react-shop.png'
import reactNativeShopPrev from '../../img/react-native-shop-preview.png'
import { IWorkData } from './worksData.interface'

export const worksData: IWorkData[] = [
  {
    image: eyesclosedImg,
    title: 'Eyesclosed',
    description:
      'Fullstack приложение для прослушивания и загрузки музыки. Frontend задеплоен на GithubPages, backend на heroku, файлы хранятся в s3 buckets',
    stack:
      'React, MobX, ApolloClient, MongoDB, NodeJS, Express, GraphQL, ApolloServer, s3 buckets',
    projectLink: 'https://rainbowfieldholograph.github.io/music-playlist-fullstack/',
    githubLink: 'https://github.com/rainbowfieldholograph/music-playlist-fullstack',
  },

  {
    image: maybetomorrowImg,
    title: 'Maybetomorrow',
    description:
      'Обычное приложение Todo. Является fullstack разработкой. Адаптив слабоват, accessability присутствует, поддерживается возможность авторизации/регистрации пользователей. Если выдаёт ошибку от heroku, то подождите немного и обновите страницу.',
    stack: 'React, ApolloClient, MaterialUI, NodeJS, MongoDB, Express, GraphQL, JWT',
    projectLink: 'https://maybetomorrow.herokuapp.com/',
    githubLink: 'https://github.com/rainbowfieldholograph/todo-client-server',
  },
  {
    image: waterTransportationImg,
    title: 'Water Transportation',
    description:
      'Only frontend разработка, делалась в ноябре 2021, по макету с Figma. Adaptive layout, no accessability. Первая попытка оптимизации React (мемоизация). Ссылку на исходный код можно получить, написав мне в лс. Важная информация! Все кнопки в хедере нажимаются (даже кружок), так же на странице расписания, можно нажать "Выбрать", там будет большая форма. Задеплоено на heroku',
    stack: 'React',
    projectLink: 'https://water-transportation.herokuapp.com',
  },
  {
    image: topAppImg,
    title: 'Top app',
    description:
      'Проект на основе курса React NextJS. Frontend, используется API courses-top.ru. Accessability, adaptive, Css grid, + - адекватно читается скрин ридерами. Хостинг: Vercel',
    stack: 'React, NextJS, TypeScript',
    projectLink: 'https://top-app-react-nextjs.vercel.app',
    githubLink: 'https://github.com/rainbowfieldholograph/top-app-react-nextjs',
  },
  {
    image: reactShopImg,
    title: 'React shop',
    description:
      'Fullstack интернет магазин. Все товары с корзины хранятся в session storage. Так как приложение использует базу данных postgresql, у меня возникли некоторые сложности с деплоем данного приложения, так что, пока никуда не задеплоено.',
    stack: 'React, Mobx, NodeJS, Express, Prisma (postgresq)',
    githubLink: 'https://github.com/rainbowfieldholograph/react-shop',
  },
  {
    image: reactNativeShop,
    imagePreview: reactNativeShopPrev,
    title: 'React Native shop demo',
    description:
      'Демо версия мобильного приложения на React Native, Реальная версия приложения делалась в октябре 2021. Обычное приложение магазин.',
    stack: 'React Native',
    githubLink: 'https://github.com/rainbowfieldholograph/react-native-shop-demo',
  },
]
