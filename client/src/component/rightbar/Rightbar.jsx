import React from 'react'
import "./rightbar.css";
import Online from "../online/Online";
import {Users} from "../../dummy";
function rightbar({user}) {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER
  const HomeRightbar=()=>{
    return (
      <>
        <div className="birthdayContainer">
          <img src= {PF+"gift.png" }alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Foster</b>and <b> 3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
           {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar=()=>{
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
            {user.relationship === 1
                ? "Single"
                : user.relationship === 1
                ? "Married"
                : "-"
            }
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarfollowings">
          <div className="rightbarfollowing">
            <img src={`${PF}person/1.jpeg`} alt="" className="rightbarfollowingImg" />
            <span className="rightbarfollowingName">Ahuja</span>
          </div>
          <div className="rightbarfollowing">
            <img src={`${PF}person/2.jpeg`} alt="" className="rightbarfollowingImg" />
            <span className="rightbarfollowingName">Ahuja</span>
          </div>
          <div className="rightbarfollowing">
            <img src={`${PF}person/4.jpeg`} alt="" className="rightbarfollowingImg" />
            <span className="rightbarfollowingName">Ahuja</span>
          </div>
          <div className="rightbarfollowing">
            <img src={`${PF}person/7.jpeg`} alt="" className="rightbarfollowingImg" />
            <span className="rightbarfollowingName">Ahuja</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="Rightbarwrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}

export default rightbar
