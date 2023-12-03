import * as React from 'react';
import Sidebar from '../../component/sidebar/Sidebar';
import Feed from '../../component/feed/Feed';
import Rightbar from '../../component/rightbar/Rightbar';
import "./Home.css"

import Topbar from "../../component/Topbar/Topbar"

 function Home() {
  return (
    <div>
      <Topbar />
      <div className="homeContainer">
        <Sidebar/>
        <Feed />
        <Rightbar/>
      </div>
      
    </div>
  );
}

export default Home