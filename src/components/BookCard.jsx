import React from 'react';
import { Button, Progress } from 'react-daisyui';
import { Link } from 'react-router-dom';

function BookCard() {

    return (
        <div className="book-top-container">
            <div className="book-card-image-container">
                <img src={'https://cdn.thestorygraph.com/bm5pvy09tuu7vrjmogrej8e9q388'} className="book-card-image" />
            </div>
        <div className="book-inner-info">
            <div className='book-card'>

                <div className="book-card-info">
                    <h1>If You Could See the Sun</h1>
                    <small style={{ fontStyle: 'italic' }}>Ann Liang</small>
                </div>

                <Button className="book-card-button">Placeholder Button</Button>
            </div>
            <div className="book-card">
                <div className="book-description">
                    In this genre-bending YA debut, a Chinese American girl monetizes her strange new invisibility powers by discovering and selling her wealthy classmates\' most scandalous secrets.

                    Alice Sun has always felt invisible at her elite Beijing international boarding school, where she\'s the only scholarship student among China\'s most rich and influential teens. But then she starts uncontrollably turning invisible—actually invisible.

                    When her parents drop the news that they can no longer afford her tuition, even with the scholarship, Alice hatches a plan to monetize her strange new power—she\'ll discover the scandalous secrets her classmates want to know, for a price.

                    But as the tasks escalate from petty scandals to actual crimes, Alice must decide if it\'s worth losing her conscience—or even her life.
                </div>
            </div>
        </div>
        </div>
    )
}

export default BookCard;