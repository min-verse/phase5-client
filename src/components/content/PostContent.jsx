import React, { useEffect, useState } from 'react';
import SignupModal from '../SignupModal';
import { Link } from 'react-router-dom';
import { Hero, Button, Toast, Artboard } from 'react-daisyui';
import Typewriter from 'typewriter-effect';
import { useSelector, useDispatch } from 'react-redux';
import ReadingCard from '../ReadingCard';
import BookCard from '../BookCard';
import PostList from '../PostList';

function PostContent({ postId }) {

    const [currentPost, setCurrentPost] = useState();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        console.log('evoked');
        const getPost = async () => {
            let token = localStorage.getItem("token");
            if (token) {
                await fetch(`http://localhost:5000/posts/${postId}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: token,
                    },
                })
                    .then((res) => {
                        if (res.ok) {
                            return res.json();
                        } else if (res.status == "401") {
                            throw new Error("Unauthorized Request. Must be signed in.");
                        }
                    })
                    .then((data) => {
                        console.log(data);
                        setCurrentPost(data);
                        setComments(data['comments']);
                    })
                    .catch((err) => console.error(err));
            } else {
                alert("Not logged in.");
            }
        };
        getPost();
    }, []);

    const handlePostSubmit = (e)=>{
        e.preventDefault();
        console.log("I'm submitted!")
    };

    return (
        <>
            <h1 style={{
                fontSize: 30,
                fontStyle: 'italic',
                paddingLeft: 50
            }}>{postId}</h1>
            <div className="book-page">
                {currentPost && <div>
                <h1>{currentPost['title']}</h1>
                <p>{currentPost['content']}</p>
                </div>}
            </div>
        </>
    )
}

export default PostContent;