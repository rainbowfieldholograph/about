import React from 'react'
import Work from '../work/Work'
import styles from './MyWorks.module.css'

import eyesClosedImg from '../../img/eyesclosed.png'
import todoImg from '../../img/todo.png'
import moodboardImg from '../../img/moodboard.png'
import reactsneakersImg from '../../img/react-sneakers.png'

const worksData = [
  {
    image: eyesClosedImg,
    title: 'Eyes-closed',
    descr: 'Fullstack приложение для прослушивания и загрузки музыки. Выполнен деплой на heroku',
    stack: 'React, MongoDB, NodeJS, Express, GraphQL, s3 buckets',
    project: 'https://eyes-closed.herokuapp.com/',
    github: 'https://github.com/youthfulanger/music-playlist-fullstack',
  },
  {
    image: todoImg,
    title: 'Todo-list',
    descr:
      'Обычное приложение todo, планируется расширить функционал. Выполнен деплой на github pages',
    stack: 'React',
    project: 'https://youthfulanger.github.io/todolist-test/',
    github: 'https://github.com/youthfulanger/todolist-test',
  },
  {
    image: moodboardImg,
    title: 'Moodboard',
    descr:
      'Супер старая работа по адаптивной вёрстке одного урезанного дизайна на React(+ добавил минимальный функционал) ',
    stack: 'React',
    project: 'https://youthfulanger.github.io/moodboard-old-work/',
    github: 'https://github.com/youthfulanger/moodboard-old-work',
  },
  {
    image: reactsneakersImg,
    title: 'React sneakers',
    descr:
      'Приложение, сделанное по видеокурсу react sneakers от archakov. Исправлено много багов в изначальном коде.(до сих пор много багов, по-тихоньку исправляю)',
    stack: 'React, MockAPI',
    project: 'https://youthfulanger.github.io/react-sneakers/',
    github: 'https://github.com/youthfulanger/react-sneakers',
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
