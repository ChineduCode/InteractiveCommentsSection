import Score from "./Score"
import EditReply from "./EditReply"
import DeleteReply from "./DeleteReply"

export default function CurrentUserReply({reply}){
    const {user} = reply
    
    return(
        <div className="reply">
            <div className="top">
                <span className="profile-avatar"> 
                    <img src={user.image.webp} alt="avatar" />
                </span>
                <span className="username_you">
                    <span className="username"> {user.username}  </span>
                    <span className="you-text">you</span>
                </span>
                <span className="createdAt"> {reply.createdAt} </span>
            </div>

            <p className="content"> @{reply.replyingTo} {reply.content} </p>

            <div className="score_reply">
                <Score score={reply.score}/>
                <div className="edit_delete_reply">
                    <EditReply />
                    <DeleteReply />
                </div>
            </div>
        </div>
    )
}