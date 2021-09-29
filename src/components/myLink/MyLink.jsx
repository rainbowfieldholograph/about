import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MyLink = ({ href, icon }) => {
  return (
    <a href={href} target="_blank">
      <FontAwesomeIcon color="white" icon={icon} />
    </a>
  )
}

export default MyLink
