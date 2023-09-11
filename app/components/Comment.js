'use client'

import Replies from "./Replies"
import OpenReply from "./OpenReply"
import Score from "./Score"
import NewReply from "./NewReply"
import { useState } from "react"

export default function Comment({comment, currentUser, addReply}){
    let {user, replies} = comment

    let [openReply, setOpenReply] = useState(false) 
    function activeReply(){
        setOpenReply(!openReply)
    }

    // function handleNewReply(newReply){
    //     console.log(newReply)
    //     setData({currentUser, comments : [comments.map(comment => comment.replies = [newReply, ...comment.replies])]})
    // }

    return(
        <div className="comments-replies">
            <div className="comment">
                <div className="top">
                    <span className="profile-avatar">
                        <img src={user.image.webp} alt="avatar" />
                    </span>
                    <span className="username"> {user.username} </span>
                    <span className="createdAt"> {comment.createdAt} </span>
                </div>

                <p className="content"> {comment.content} </p>

                <div className="score_reply">
                    <Score score={comment.score}/>
                    <OpenReply activeReply={activeReply}/>
                </div>
            </div>

            <NewReply currentUser={currentUser} user={user} openReply={openReply} addReply={addReply}/>
            <Replies replies={replies} currentUser={currentUser} />
        </div>
    )
}