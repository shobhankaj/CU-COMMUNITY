import {useState,useEffect, useContext} from 'react'
import "./post.css"
import {MoreVert} from '@mui/icons-material';
import axios from "axios";
import {format} from 'timeago.js';
import {Link} from "react-router-dom"
import { AuthContext } from '../../contex/AuthContex';



function Post({post}) {

  const [like,setlike] = useState(post.likes.length)
  const [isLiked,setIsLiked]=useState(false)
  const [user , setUser] = useState({});
  const {user:currentUser}=useContext(AuthContext);
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  useEffect(()=>{
    const fetchUser = async() => {
       const res=await axios.get(`/user?userId=${post.userId}`);
       setUser(res.data)
    };
    fetchUser()
  },[]);


  useEffect(()=>{
    setIsLiked(post.likes.includes(currentUser._id));
  },[currentUser._id,post.likes]);



  const likeHandler=()=>{
    try{
      axios.put("/posts/"+post._id+"/like" , {userId:currentUser._id});
    }catch(err){

    }

    setlike(isLiked ? like-1 :like+1)
    setIsLiked(!isLiked)
  }
  console.log(PF+post.img);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
              <Link to={`profile/${user.username}`}>
                <img className="postProfileImg" src={user.profilePicture ? PF+user.profilePicture :PF+"person/noAvatar.png"} alt="" />
              </Link>
                <span className="postUserName">{user.username}</span>
                <span className="postDate"> {format(post.createdAt)}</span>
            </div>
            <div className="postTopRight">
                <MoreVert />
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img className="postImg" src={PF+post.img} alt="" />

        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img className="likeIcon" onClick={likeHandler} src={`${PF}like.png`} alt="" />
                <img className="likeIcon" src={`${PF}heart.png`} onClick={likeHandler}alt="" />
                <span className="likeCounter">{like} peaple like it</span>
            </div>
            <div className="postBottomRight">
                <div className="postCommentText">{post.comment} comments</div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Post
