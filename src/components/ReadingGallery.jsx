import React from 'react';
import ReadingCard from './ReadingCard';

function ReadingGallery({reading}){

    return(
        <>
        <div className="flex w-auto h-120 mx-4 space-x-10 flex-nowrap overflow-x-auto p-8 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-2xl">
                {reading.map((item) => {
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
};

export default ReadingGallery;