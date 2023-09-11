'use client'

import { useState } from "react"; 

export default function NewReply({currentUser, user, openReply, addReply}){
    
    let [content, setContent] = useState('')
    let atUsername = `@${user.username} `
    
    function onSendReply(e){
        e.preventDefault()
        
        if(!content) return
        
        const id = Math.floor(Math.random() * 1000) + 2
        let score = 0
        let createdAt = Date.now()
        const replyingTo = atUsername

        let newReply = {
            id,
            content,
            createdAt,
            score,
            replyingTo,
            user
        }
        
        addReply(newReply)

        //Clear the text area once reply is sent
        setContent('')
    }

    return(
        <form className={`new_reply ${openReply ? 'active_new_reply' : 'new_reply'}`} onSubmit={onSendReply}>
            <textarea
                name="content" cols="30" rows="4"
                defaultValue={atUsername}
                onChange={(e)=> setContent(e.target.value)}
            ></textarea>

            <div className="avatar_btn">
                <img src={currentUser.image.webp} alt="" />
                <button type="submit">REPLY</button>
            </div>
        </form>
    )
}