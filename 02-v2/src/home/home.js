import React from 'react';
import Hero from './hero';
import LogoBanner from './logo-banner';
import Mission from './mission';
import Value from './value';

function Home() {
    return (
        <div className='w-full'>
            <Hero />
            <LogoBanner />
            <Mission />
            <Value />
        </div>
    );
}

export default Home;