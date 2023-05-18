import React from 'react'

const CommentForm = () => {

    return (
        <form>
            <input
                type="text"
                placeholder="Your name"
            />
            <input
                type="text"
                placeholder="Say something..."
            />
            <input
                type="submit"
                value="Post" /* submit button */
            />
        </form>
    )

}

export default CommentForm



// Controlled component = to control the state of inputs, blank string
  // Will take whatever the user is typing into the box