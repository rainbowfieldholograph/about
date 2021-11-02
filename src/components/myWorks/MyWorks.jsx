import React from 'react'
import Work from '../work/Work'
import styles from './MyWorks.module.css'

import eyesClosedImg from '../../img/eyesclosed.png'
import maybetomorrowImg from '../../img/maybetomorrow.png'
import moodboardImg from '../../img/moodboard.png'
import reactsneakersImg from '../../img/react-sneakers.png'
import lainMatrixRain from '../../img/lain-matrix-rain.png'

const worksData = [
  {
    image: eyesClosedImg,
    title: 'Eyes-closed',
    descr: 'Fullstack приложение для прослушивания и загрузки музыки. Выполнен деплой на heroku',
    stack: 'React, MongoDB, NodeJS, Express, GraphQL, ApolloServer, s3 buckets',
    project: 'https://eyes-closed.herokuapp.com/',
    github: 'https://github.com/rainbowfieldholograph/music-playlist-fullstack',
  },
  {
    image: maybetomorrowImg,
    title: 'Maybetomorrow',
    descr:
      'Улучшенная версия Todo-list. Является fullstack приложением, поддерживается возможность авторизации пользователей',
    stack: 'React, NodeJS, MongoDB, Express, GraphQL, JWT',
    project: 'https://maybetomorrow.herokuapp.com/',
    github: 'https://github.com/rainbowfieldholograph/todo-client-server',
  },
  {
    image: moodboardImg,
    title: 'Moodboard',
    descr: 'Demo версия старой работы на React(+ добавил минимальный функционал)',
    stack: 'React',
    project: 'https://rainbowfieldholograph.github.io/moodboard-old-work/',
    github: 'https://github.com/rainbowfieldholograph/moodboard-old-work',
  },
  {
    image: reactsneakersImg,
    title: 'React sneakers',
    descr:
      'Приложение, сделанное по видеокурсу react sneakers от archakov. Исправлено много багов в изначальном коде (до сих пор много багов, по-тихоньку исправляю)',
    stack: 'React, MockAPI',
    project: 'https://rainbowfieldholograph.github.io/react-sneakers/',
    github: 'https://github.com/rainbowfieldholograph/react-sneakers',
  },
  {
    image: lainMatrixRain,
    title: 'Lain Matrix Rain',
    descr:
      'Матричный дождь с использованием ванильного javaScript без фреймворков. Немного копипаста, немного своего x)',
    stack: 'Vanilla javaScript',
    project: 'https://rainbowfieldholograph.github.io/lain-matrix-rain/',
    github: 'https://github.com/rainbowfieldholograph/lain-matrix-rain',
  },
]

const MyWorks = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>My works example</h1>
        <ul className={styles.myWorks}>
          {worksData.map((item, index) => {
            return (
              <Work
                key={index}
                image={item.image}
                title={item.title}
                descr={item.descr}
                stack={item.stack}
                project={item.project}
                github={item.github}
              />
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default MyWorks
