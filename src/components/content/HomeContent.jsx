import React, { useEffect, useState } from 'react';
import SignupModal from '../SignupModal';
import { Link, useNavigate } from 'react-router-dom';
import { Hero, Button, Toast, Artboard } from 'react-daisyui';
import Typewriter from 'typewriter-effect';
import { useSelector, useDispatch } from 'react-redux';
import FriendTable from '../FriendTable';
import ReadingCard from '../ReadingCard';
import ReadingGallery from '../ReadingGallery';

function HomeContent() {

    const [visible, setVisible] = useState(false);
    const [currentlyReading, setCurrentlyReading] = useState([]);
    const [readerSearch, setReaderSearch] = useState('');
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    console.log(user);

    function goToReaderSearch(query){
        navigate(`/readersearch?user=${query}`);
    }

    useEffect(() => {
        const newReading = user['readings'].filter((item) => {
            return item.status === "reading";
        });
        setCurrentlyReading(newReading);
    }, [user, user['readings']]);

    const toggleVisible = () => {
        setVisible(!visible)
    };

    const handleReaderSearchChange = (e)=>{
        const newSearchValue = e.target.value.toLowerCase();
        setReaderSearch(newSearchValue);
    };

    const handleReaderSearch = (e)=>{
        e.preventDefault();
        const encoded = encodeURIComponent(readerSearch);
        goToReaderSearch(encoded);
    };

    return (
        <>
            <h1 style={{
                fontSize: 30,
                fontStyle: 'italic',
                paddingLeft: 50
            }}>Currently Reading</h1>
            <ReadingGallery reading={currentlyReading} />
            <div>
                <form onSubmit={handleReaderSearch}>
                    <input 
                    type="text" 
                    name="readerSearch"
                    value={readerSearch}
                    onChange={handleReaderSearchChange}
                    placeholder="Find fellow readers to add"/>
                    <button type="submit">Search</button>
                </form>
                {user['friends'] && user['friends'].length && user['friends'].length > 0 ?

                    <FriendTable friends={user['friends']} />
                    :
                    <h1>
                        No fellow readers added yet! Look through our database to find others!
                    </h1>

                }
            </div>
            {/* <div className="flex w-auto h-120 mx-4 space-x-10 flex-nowrap overflow-x-auto p-8 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-2xl">
                {currentlyReading.map((item) => {
                    return (
                        <ReadingCard
                            key={item.id}
                            book={item.book}
                            progress={item.progress}
                        />
                    );
                })}
            </div> */}
        </>
    )
}

export default HomeContent;