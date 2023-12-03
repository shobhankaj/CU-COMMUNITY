import React from 'react'
import "./sidebar.css"
import {QuestionAnswer,Bookmark,Group,OndemandVideo,Chat,RssFeed} from '@mui/icons-material';
import {Users} from "../../dummy";
import CloseFriend from '../CloseFriend/CloseFriend';
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon"></RssFeed>
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon"></Chat>
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <OndemandVideo className="sidebarIcon"></OndemandVideo>
            <span className="sidebarListItemText">Video</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon"></Group>
            <span className="sidebarListItemText">Group</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon"></Bookmark>
            <span className="sidebarListItemText">Bookmark</span>
          </li>
          <li className="sidebarListItem">
            <QuestionAnswer className="sidebarIcon"></QuestionAnswer>
            <span className="sidebarListItemText">QuestionAnswer</span>
          </li>
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          
              {Users.map(u=>(
                <CloseFriend key={u.id} user={u} />
               ))}
         
          
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
