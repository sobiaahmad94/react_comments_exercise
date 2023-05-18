import React, { useState } from 'react'

// defines the component CommentForm that takes an object as a parameter and takes the onCommentSubmit property from it
// props.onCommentSubmit
const CommentForm = ({ onCommentSubmit }) => {

    // variable author and function setAuthor updates value using the useState hook
    // value for author is an empty string
    // value for text is also an empty string
    // the functions setAuthor and setText will add to the empty string
    const [author, setAuthor] = useState('')
    const [text, setText] = useState('')

    // when someone enters an author in the author variable then this event is activated:)
    const handleAuthorChange = (evt) => {
        setAuthor(evt.target.value)
    }
// attaching an event listener thing to the setText function
// when the is changed then the function is ran I think
    const handleTextChange = (evt) => {
        setText(evt.target.value)
    }

    const handleCommentSubmit = (evt) => {
        evt.preventDefault()
        const authorToSubmit = author.trim()
        const textToSubmit = text.trim()
        // ! is not, || is or
        if (!authorToSubmit || !textToSubmit) {
            return
        }

        onCommentSubmit({
            author: authorToSubmit,
            text: textToSubmit
        })

        setAuthor('')
        setText('')
    }

    // JSX form similar to HTML, onSubmit used 
    return (
        <form onSubmit={handleCommentSubmit}>
            <input
                type="text"
                placeholder="Your name"
                value={author}
                onChange={handleAuthorChange}
            />
            <input
                type="text"
                placeholder="Say something..."
                value={text}
                onChange={handleTextChange}
            />
            <input
                type="submit"
                value="Post"
            />
        </form>
    )

}

export default CommentForm