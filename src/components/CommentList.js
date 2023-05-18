import React from 'react'
import Comment from './Comment.js'
import CommentBox from '../containers/CommentBox.js'

const CommentList = ({ comments }) => {

    const commentNodes = comments.map(comment => {
        return (
            <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>		
        )
    })

    return (
        <>
            {commentNodes}

        </>
    )

}

export default CommentList