import React, { useEffect, useState } from 'react';
import SignupModal from '../SignupModal';
import { Link } from 'react-router-dom';
import { Hero, Button, Toast, Artboard } from 'react-daisyui';
import Typewriter from 'typewriter-effect';
import { useSelector, useDispatch } from 'react-redux';
import ReadingCard from '../ReadingCard';

function HomeContent() {

    const [visible, setVisible] = useState(false);
    const [currentlyReading, setCurrentlyReading] = useState([]);
    const user = useSelector((state) => state.user);

    useEffect(() => {
        const newReading = user['readings'].filter((item)=>{
            return item.status === "reading";
        });
        setCurrentlyReading(newReading);
    }, [user]);

    const toggleVisible = () => {
        setVisible(!visible)
    };

    return (
        <>
        <h1 style={{
            fontSize:30,
            fontStyle:'italic',
            paddingLeft:50
        }}>Currently Reading</h1>
            <div className="flex w-auto h-120 mx-4 space-x-10 flex-nowrap overflow-x-auto p-8 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-2xl">
                {currentlyReading.map((item) => {
                    return (
                        <ReadingCard
                            key={item.id}
                            book={item.book}
                            progress={item.progress}
                        />
                    );
                })}

            </div>
        </>
    )
}

export default HomeContent;