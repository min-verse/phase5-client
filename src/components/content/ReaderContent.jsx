import React, { useEffect, useState } from 'react';
import SignupModal from '../SignupModal';
import { Link, useNavigate } from 'react-router-dom';
import { Hero, Button, Toast, Artboard } from 'react-daisyui';
import Typewriter from 'typewriter-effect';
import { useSelector, useDispatch } from 'react-redux';
import ReadingCard from '../ReadingCard';
import BookCard from '../BookCard';
import PostList from '../PostList';
import ReaderResultContent from './ReaderResultContent';

function ReaderContent({ readerId }) {

    const [currentReader, setCurrentReader] = useState();
    const [friendStatus, setFriendStatus] = useState();
    const [sentRequest, setSentRequest] = useState(false);
    const [comments, setComments] = useState([]);
    const navigate = useNavigate();

    function goToUserHome() {
        navigate("/home");
    }

    useEffect(() => {
        console.log('evoked');
        const getPost = async () => {
            let token = localStorage.getItem("token");
            if (token) {
                await fetch(`http://localhost:5000/reader_page`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: token,
                    },
                    body: JSON.stringify({ reader: readerId })
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
                        if (data['reader_self']) {
                            goToUserHome();
                        } else if (data['reader']) {
                            setCurrentReader(data['reader']);
                            setFriendStatus(data['status']);
                        }
                    })
                    .catch((err) => console.error(err));
            } else {
                alert("Not logged in.");
            }
        };
        getPost();
    }, []);

    const handlePostSubmit = (e) => {
        e.preventDefault();
        console.log("I'm submitted!")
    };

    return (
        <>
            {currentReader &&
                <>
                    <div style={{ margin: 20 }}>
                        <h1 className="reader-result-username">{currentReader['username']}</h1>
                        <div>
                            {friendStatus !== "not friends" ?
                                <>
                                    {friendStatus === "accepted" ?
                                        <>
                                            <button className="btn reader-result-buttons" disabled>Already Friends</button>
                                            <button className="btn btn-success reader-result-buttons">Live Chat</button>
                                            <button className="btn btn-error reader-result-buttons">Remove Friend</button>
                                        </>
                                        :
                                        <button className="btn" disabeled>Pending</button>}
                                </>
                                :
                                sentRequest ?
                                    <button className="btn btn-success">Send Friend Request</button>
                                    :
                                    <button className="btn" disabled>Sent Request</button>
                            }
                        </div>
                    </div>
                </>}
            {currentReader && <ReaderResultContent reader={currentReader} status={friendStatus} />}
        </>
    )
}

export default ReaderContent;