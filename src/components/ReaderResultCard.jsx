import React, { useEffect, useState } from 'react';
import { setUser, clearUser, setReadings, setPendingsUpdate, setReadingsUpdate, setFriends, setPosts, setComments, setPendings, setGenres, setMoods } from './state/user';
import { useDispatch, useSelector } from 'react-redux';
import ErrorAlert from './ErrorAlert';
import { Link } from 'react-router-dom';

function ReaderResultCard({ reader }) {

    const [inFriends, setInFriends] = useState(false);
    const [inPending, setInPending] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { id, username, readings } = reader;
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (user['friends'] && user['friends'].length && user['friends'].length > 0) {
            const addedFriend = user['friends'].find(reader => reader['friend']['id'] === id);
            const pendingFriend = user['pendings'].find(reader => reader['friend']['id'] === id);
            if (addedFriend) {
                setInFriends(true);
            } else if (pendingFriend) {
                setInPending(true);
            }
        }
    }, [user]);

    const handleSendRequest = async () => {
        try {
            setLoading(true);
            let token = localStorage.getItem("token");
            if (token) {
                await fetch(`http://localhost:5000/friendships`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: token,
                    },
                    body: JSON.stringify({
                        id: id
                    })
                }).then(res => res.json())
                    .then((data) => {
                        setError('');
                        setLoading(false);
                        setPendingsUpdate(data);
                        console.log(data);
                        setInPending(true);
                    });
            } else {
                alert("You are not logged in.");
            }
        } catch (error) {
            setError(error);
        }
    };

    return (
        <div>
            {/* <div>
                <img src={cover} />
            </div> */}
            <div>
                {error && error.length && error.length > 0 ?
                    <ErrorAlert errors={error} />
                    :
                    null}
                <h1>{username}</h1>
                <h3>Their Recent Reads:</h3>
                {readings && readings.length ?
                    readings.length > 5 ?
                        <p>{readings.map((book, index) => {
                            if (index < 5) {
                                return (
                                    <span key={index}>{book['book']['title']}, </span>
                                );
                            } else if (index === 5) {
                                return (
                                    <span key={index}>{book['book']['title']}</span>
                                );
                            }
                        })}</p>
                        :
                        <p>{readings.map((book, index) => {
                            if (index < readings.length) {
                                return (
                                    <span key={index}>{book['book']['title']}, </span>
                                );
                            } else{
                                return (
                                    <span key={index}>{book['book']['title']}</span>
                                );
                            }
                        })}</p>
                    :
                    <p>This reader hasn't added any books yet</p>
                }
                <div>
                    <Link className="btn" to={`/readers/${id}`}>See Profile</Link>
                    {inFriends ?
                        <button className="btn" disabled>Already Friends</button>
                        :
                        inPending ?
                            <button className="btn" disabled>Already Requested</button>
                            :
                            loading ?
                                <button className="btn" disabled>Sending Request...</button>
                                :
                                <button className="btn" onClick={handleSendRequest}>Send Friend Request</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default ReaderResultCard;