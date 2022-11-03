import React, { useState } from 'react';
import { Button, Progress } from 'react-daisyui';
import { useDispatch } from 'react-redux';
import { setUser, clearUser, setReadings, setFriends, setPosts, setComments, setPendings, setGenres, setMoods } from './state/user';
import { Link } from 'react-router-dom';

function BookCard({ book }) {

    const { id, title, author, total_pages, publisher, year_published, genres, moods, description, cover, ISBN } = book;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();

    const handleClick = () => {
        const newBool = !visible;
        setVisible(newBool);
    }

    const handleSelect = async (e) => {
        e.preventDefault();
        setLoading(true);
        const status = e.target['select-status'].value;
        try{
            let token = localStorage.getItem("token");
            if(token){
                await fetch(`http://localhost:5000/readings`, {
                    method:'PATCH',
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: token,
                    },
                    body: JSON.stringify({
                        id: id,
                        status: status
                    })
                }).then(res => res.json())
                .then((data)=>{
                    setLoading(false);
                    console.log(data);
                    dispatch(setReadings(data));
                });
            }else{
                alert("You are not logged in.");
            }
        }catch(error){
            setError(error);
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }

    return (
        <>
            <div className="book-top-container">
                <div className="book-card-image-container">
                    <img src={cover} className="book-card-image" />
                </div>
                <div className="book-inner-info">
                    <div className='book-card'>

                        <div className="book-card-info book-title">
                            <h1 className="book-title">{title}</h1>
                            <small style={{ fontStyle: 'italic' }}>{author}</small>
                        </div>
                    </div>
                    <div className="book-card">
                        <div className="book-description">
                            <p className="book-summary">{description}</p>
                            <p>genre(s): {genres.map((genre, index) => {
                                if (index !== genres.length - 1) {
                                    return (
                                        <span className="genre-style">{genre}, </span>
                                    );
                                } else {
                                    return (
                                        <span className="genre-style">{genre}</span>
                                    );
                                }
                            })}</p>
                            <p>mood(s): {moods.map((mood, index) => {
                                if (index !== moods.length - 1) {
                                    return (
                                        <span className="mood-style">{mood}, </span>
                                    );
                                } else {
                                    return (
                                        <span className="mood-style">{mood}</span>
                                    );
                                }

                            })}</p>
                        </div>
                        <div className="book-reading-button">
                        {error && error.length && error.length > 0 ? 
                                    <ErrorAlert errors={error} />
                                :
                                null}
                            {loading ?
                            
                                <select className="select select-info w-full max-w-xs book-reading-select" disabled>
                                    <option>
                                        &#128214;
                                        Setting status...
                                    </option>
                                </select>
                            
                                :
                                <form onSubmit={handleSelect} style={{display: 'flex', justifyContent:'flex-end'}}>
                                    <select name="select-status" className="select select-info w-full max-w-xs book-reading-select">
                                        <option disabled selected>Select status</option>
                                        <option value="to-read">to-read</option>
                                        <option value="reading">reading</option>
                                        <option value="completed">completed</option>
                                    </select>
                                    <button type="submit" className="btn btn-active btn-ghost" style={{
                                        fontSize:'small',
                                        marginLeft:10
                                    }}>Set Status</button>
                                </form>
                            }

                        </div>
                    </div>
                    <div className="book-more-info">
                        <button onClick={handleClick} className="book-more-info-button">more information</button>
                        {visible &&
                            <ul className="book-extra-details">
                                <li>ISBN: {ISBN}</li>
                                <li>Year Published: {year_published}</li>
                                <li>Publisher: {publisher}</li>
                                <li>Total Pages: {total_pages}</li>
                            </ul>
                        }
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default BookCard;