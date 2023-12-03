import React, { useContext, useRef, useState } from 'react'
import "./share.css"
import {PermMedia,Label,Room,EmojiEmotions} from '@mui/icons-material';
import { AuthContext } from '../../contex/AuthContex';
import axios from 'axios';


function Share() {
    const {user} = useContext(AuthContext);
    const PF=process.env.REACT_APP_PUBLIC_FOLDER;
    const desc=useRef();
    const [file,setFile]=useState(null);
    const submitHandler= async (e)=>{
        e.preventDefault();
        const newPost = {
            userId:user._id,
            desc:desc.current.value
        }
        if(file){
            const data= new FormData();
            
            const fileName= Date.now() + file.name;

            data.append("file",file);
            data.append("name",fileName);
            newPost.img = fileName;
            console.log(data.file);
            try{
                const res =await axios.post("/upload", data);
                console.log(res);
            }
            catch(err){
                console.log(err);
            }
        }
        try{
           await axios.post("/posts",newPost);
           //window.location.reload();
        }catch(err){}
    }
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
            <img src={user.profilePicture ? PF+user.profilePicture:PF+"person/noAvatar.png"} alt="" className="shareProfileImg" />
            <input type="text" 
                   placeholder={"what's in your mind " + user.username +"?"}
                   className="shareInput"
                   ref={desc}
            />
        </div>
            <hr className="shareHr" />
            <form onSubmit={submitHandler} className="shareBottom">
                <div className="shareOptions">
                    <label htmlFor="file" className="shareOption">
                        <PermMedia htmlColor="tomato" className="shareIcon" />
                        <span  className="shareOptionText">Photo or Video</span>
                        <input type="file" style={ {display: "none"}} id="file" name="file" accept=".png,.jpeg,.jpg" onChange={(e)=>setFile(e.target.files[0])}/>
                    </label>
                    <div className="shareOption">
                        <Label htmlColor="blue" className="shareIcon" />
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor="green" className="shareIcon" />
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className="shareButton" type="submit">Share</button>
            </form>
        </div>
    </div>
  )
}

export default Share
