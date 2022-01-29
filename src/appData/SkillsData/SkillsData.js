import {
  faHtml5,
  faNode,
  faCss3Alt,
  faJsSquare,
  faReact,
  faAws,
} from '@fortawesome/free-brands-svg-icons'
import mongoImg from '../../img/mongo.png'
import graphqlImg from '../../img/graphql.png'
import apolloImg from '../../img/apollo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const skillsData = [
  {
    title: 'HTML',
    iconComponent: <FontAwesomeIcon icon={faHtml5} />,
  },
  {
    title: 'CSS',
    iconComponent: <FontAwesomeIcon icon={faCss3Alt} />,
  },
  {
    title: 'JavaScript',
    iconComponent: <FontAwesomeIcon icon={faJsSquare} />,
  },
  {
    title: 'React',
    iconComponent: <FontAwesomeIcon icon={faReact} />,
  },
  {
    title: 'NodeJS',
    iconComponent: <FontAwesomeIcon icon={faNode} />,
  },
  {
    title: 'MongoDB',
    iconComponent: (
      <img className="reverseColor" src={mongoImg} alt="MongoDB" width={30} height={30} />
    ),
  },
  {
    title: 'GraphQL',
    iconComponent: (
      <img className="reverseColor" src={graphqlImg} alt="MongoDB" width={40} height={40} />
    ),
    size: 40,
  },
  {
    title: 'Apollo Client',
    iconComponent: (
      <img className="reverseColor" src={apolloImg} alt="MongoDB" width={40} height={40} />
    ),
    size: 40,
  },
  {
    title: 'S3 Buckets',
    iconComponent: <FontAwesomeIcon icon={faAws} />,
  },
]
