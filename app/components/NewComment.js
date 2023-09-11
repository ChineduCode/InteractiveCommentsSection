'use client'

import { useState } from "react";

export default function NewComment({user, onAddComment}){
   
    let [content, setContent] = useState('')

    const id = Math.floor(Math.random() * 1000) + 2
    let score = 0
    const replies = []
    let createdAt = Date.now()

    let newComment = {
        id,
        content,
        createdAt,
        score,
        user,
        replies
    }

    function onSubmitComment(e){
        e.preventDefault()

        if(!content) return

        onAddComment(newComment)

        //Clear the text area once comment is added
        setContent(content = '')
    }

    return(
        <form className="new_comment" onSubmit={onSubmitComment}>
            <textarea
             name="content" cols="30" rows="4"
             value={content}
             onChange={(e)=> setContent(e.target.value)}
            ></textarea>

            <div className="avatar_btn">
                <img src={user.image.webp} alt="" />
                <button type="submit">SEND</button>
            </div>
        </form>
    )
}