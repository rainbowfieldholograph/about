import eyesclosedImg from '../../img/eyesclosed.png'
// import maybetomorrowImg from '../../img/maybetomorrow.png'
// import moodboardImg from '../../img/moodboard.png'
// import reactsneakersImg from '../../img/react-sneakers.png'
import waterTransportation from '../../img/water-transportation.png'
import { IWorkData } from './worksData.interface'

export const worksData: IWorkData[] = [
  {
    image: eyesclosedImg,
    title: 'Eyesclosed',
    description:
      'Fullstack приложение для прослушивания и загрузки музыки. Frontend задеплоен на githupages, backend на heroku, файлы хранятся в s3 buckets',
    stack: 'React, MongoDB, NodeJS, Express, GraphQL, ApolloServer, ApolloCilent, s3 buckets',
    projectLink: 'https://rainbowfieldholograph.github.io/music-playlist-fullstack/',
    githubLink: 'https://github.com/rainbowfieldholograph/music-playlist-fullstack',
  },

  // {
  //   image: maybetomorrowImg,
  //   title: 'Maybetomorrow',
  //   descr:
  //     'Улучшенная версия Todo-list. Является fullstack приложением, поддерживается возможность авторизации пользователей',
  //   stack: 'React, NodeJS, MongoDB, Express, GraphQL, ApolloCilent, JWT',
  //   project: 'https://maybetomorrow.herokuapp.com/',
  //   github: 'https://github.com/rainbowfieldholograph/todo-client-server',
  // },
  // {
  //   image: moodboardImg,
  //   title: 'Moodboard',
  //   descr: 'Demo версия старой работы на React(+ добавил минимальный функционал)',
  //   stack: 'React',
  //   project: 'https://rainbowfieldholograph.github.io/moodboard-old-work/',
  //   github: 'https://github.com/rainbowfieldholograph/moodboard-old-work',
  // },
  // {
  //   image: reactsneakersImg,
  //   title: 'React sneakers',
  //   descr:
  //     'Приложение, сделанное по видеокурсу react sneakers от archakov. Исправлено много багов в изначальном коде (до сих пор много багов, по-тихоньку исправляю)',
  //   stack: 'React, MockAPI',
  //   project: 'https://rainbowfieldholograph.github.io/react-sneakers/',
  //   github: 'https://github.com/rainbowfieldholograph/react-sneakers',
  // },
  {
    image: waterTransportation,
    title: 'Water Transportation',
    description:
      'FrontEnd разработочка, делалось в ноябре 2021, по макету с Figma. Adaptive layout, no accessability. Первая попытка оптимизации React (мемоизация). Ссылку на исходный код можно получить, написав мне в лс. Важная информация! Все кнопки в хедере нажимаются (даже кружок), так же на странице расписания, можно нажать "Выбрать", там будет большая форма. Задеплоено на heroku',
    stack: 'React',
    projectLink: 'https://water-transportation.herokuapp.com',
    githubLink: 'https://youtube.com',
  },
]
