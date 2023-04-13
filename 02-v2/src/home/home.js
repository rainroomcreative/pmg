import React from 'react';
import Hero from './hero';
import LogoBanner from './logo-banner';

function Home() {
    return (
        <div className='w-full'>
            <Hero />
            <LogoBanner />
        </div>
    );
}

export default Home;