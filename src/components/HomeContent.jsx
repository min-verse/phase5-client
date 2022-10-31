import React, { useState } from 'react';
import SignupModal from './SignupModal';
import { Hero, Button } from 'react-daisyui';

function HomeContent() {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        setVisible(!visible)

    };

    return (
        <Hero>
            <Hero.Overlay className="bg-opacity-60 px-32 py-72" style={{ backgroundImage: "url(https://i.insider.com/627bc4fd8f41d500187ac408?width=700)", backgroundPosition: 'center', opacity: 0.18 }} />
            <Hero.Content className="text-center py-100">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">BOOCO Shelves</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
                        a id nisi.
                    </p>
                    <Button onClick={toggleVisible} color="info" className="hover:bg-[#075985]" style={{ color: 'white' }}>Let's Read Together <span style={{paddingLeft:5}}> &#128218;</span></Button>
                    <SignupModal open={visible} toggle={toggleVisible}/>
                </div>
            </Hero.Content>
        </Hero>
    )
}

export default HomeContent;