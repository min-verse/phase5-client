import React, {useEffect, useState} from 'react';
import ReaderResultCard from './ReaderResultCard';

function ReaderResultList({readers}){

    return(
        <>
            {readers.map((reader)=>{
                return (
                    <ReaderResultCard
                    key={reader.id}
                    reader={reader}
                    />
                );
            })}
        </>
    )
}

export default ReaderResultList;