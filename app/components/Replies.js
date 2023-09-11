import UserReply from "./UserReply"
import CurrentUserReply from "./CurrentUserReply"

export default function Replies({replies, currentUser}){
    return(
        <div className="replies">
            {replies.map(reply=>
                { if(currentUser.username === reply.user.username){
                    return <CurrentUserReply key={reply.id} reply={reply} />
                }else {
                    return <UserReply key={reply.id} reply={reply} />
                } }
            )}
        </div>
    )
}