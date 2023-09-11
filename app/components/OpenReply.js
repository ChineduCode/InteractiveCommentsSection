export default function OpenReply({activeReply}){
    
    return(
        <div className="openreply-icon" onClick={activeReply}>
            <img src="images/icon-reply.svg" alt="" />
            <span>Reply</span>
        </div>
    )
}