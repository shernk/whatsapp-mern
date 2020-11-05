import { Avatar } from '@material-ui/core'
import React from 'react'
import './sidebarchat.css'

function Sidebarchat() {
  return (
    <div>
      <div className="sidebarChat">
        <Avatar />
        <div className="sidebarChat__info">
          <h2>Room name</h2>
          <p>This is the last message</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebarchat
