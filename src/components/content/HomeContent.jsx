import React, { useEffect, useState } from 'react';
import SignupModal from '../SignupModal';
import { Link } from 'react-router-dom';
import { Hero, Button, Toast, Artboard } from 'react-daisyui';
import Typewriter from 'typewriter-effect';
import { useSelector, useDispatch } from 'react-redux';
import ReadingCard from '../ReadingCard';

function HomeContent() {

    const [visible, setVisible] = useState(false);
    const user = useSelector((state) => state.user);
    console.log(user['readings']);

    useEffect(() => {

    }, [user]);
    const toggleVisible = () => {
        setVisible(!visible)
    };

    return (
        <>
            <div className="flex w-auto space-x-10 flex-nowrap overflow-x-auto p-8 bg-neutral rounded-2xl">
                {user['readings'].map((item) => {
                    console.log(item);
                    console.log(item.book);
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