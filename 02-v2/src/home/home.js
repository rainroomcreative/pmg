import React from 'react';
import Hero from './hero';
import LogoBanner from './logo-banner';
import Mission from './mission';
import Value from './Value';

function Home() {
    return (
        <div className='w-full snap-y snap-mandatory'>
            <Hero />
            <LogoBanner />
            <Mission />
            <Value />
        </div>
    );
}

export default Home;