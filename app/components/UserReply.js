import OpenReply from "./OpenReply"
import Score from "./Score"

export default function Reply({reply}){
    const {user} = reply
    
    return(
        <div className="reply">
            <div className="top">
                <span className="profile-avatar"> 
                    <img src={user.image.webp} alt="avatar" />
                </span>
                <span className="username"> {user.username} </span>
                <span className="createdAt"> {reply.createdAt} </span>
            </div>

            <p className="content">@{reply.replyingTo} {reply.content} </p>

            <div className="score_reply">
                <Score score={reply.score}/>
                <OpenReply />
            </div>
        </div>
    )
}