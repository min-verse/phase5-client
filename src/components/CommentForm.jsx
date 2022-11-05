import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';

function CommentForm({ post, handleError, handleNewComment }) {

    const [commentContent, setCommentContent] = useState('');

    const {id, user} = post;

    const handleCommentChange = (e) => {
        const newComment = e.target.value;
        setCommentContent(newComment);
    };

    

    function submitComment(e) {
        e.preventDefault();
        let token = localStorage.getItem("token");
        fetch(`http://localhost:5000/comments`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            body: JSON.stringify({
                postId: id,
                content: commentContent
            })
        }).then((res) => {
            if (res.ok) {
                return res.json();
            } else if (res.status == "401") {
                throw new Error("Unauthorized Request. Must be signed in.");
            }
        })
            .then((data) => {
                console.log(data);
                handleNewComment(data);
                setCommentContent('');
            })
            .catch((err) => {
                handleError(err);
            });
    }

    return (
        <>
            <form onSubmit={submitComment}>
                <textarea
                    name="commentContent"
                    value={commentContent}
                    onChange={handleCommentChange}
                    className="textarea textarea-info"
                    placeholder={`Add a comment to ${user}'s post`}></textarea>
                <button type="submit" className="btn">Add Comment</button>
            </form>
        </>
    );
}

export default CommentForm;