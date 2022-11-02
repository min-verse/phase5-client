import React, { useEffect, useState } from 'react';
import SignupModal from '../SignupModal';
import { Link } from 'react-router-dom';
import { Hero, Button, Toast, Artboard } from 'react-daisyui';
import Typewriter from 'typewriter-effect';
import { useSelector, useDispatch } from 'react-redux';
import ReadingCard from '../ReadingCard';
import BookCard from '../BookCard';

function BookContent({ bookId }) {

    const [currentBook, setCurrentBook] = useState(false);
    const [error, setError] = useState('');
    const [currentlyReading, setCurrentlyReading] = useState([]);
    const user = useSelector((state) => state.user);

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) {
            fetch(`http://localhost:5000/books/${bookId}`, {
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
                })
                .catch((err) => console.error(err));
        } else {
            // alert("Not logged in.");
        }
    }, [user]);

    const toggleVisible = () => {
        setVisible(!visible)
    };

    return (
        <>
        <h1 style={{
                fontSize: 30,
                fontStyle: 'italic',
                paddingLeft: 50
            }}>{bookId}</h1>
        <div className="book-page">
            <BookCard />
        </div>
        </>
    )
}

export default BookContent;