import React from "react";
import CountUp from 'react-countup';

class Stats extends React.Component {

    render(){
        return (
            <div className="flex flex-col gap-14">
                <div className="flex flex-row justify-center text-blue font-bold container mx-auto gap-5">
                    <div className="w-1/3">
                            <CountUp
                            start={0}
                            end={50}
                            duration={1.5}
                            suffix="%"
                            onEnd={() => console.log('Ended! 👏')}
                            onStart={() => console.log('Started! 💨')}
                            >
                                {({ countUpRef, start }) => (
                                    <h3 className="text-3xl" ref={countUpRef} onLoad={start}></h3>                                
                                )}
                            </CountUp>
                        <h4 className="text-sm mt-6">Cheaper than competitors.</h4>
                    </div>
                    <div className="w-1/3">
                        <CountUp
                        start={0}
                        end={1.2}
                        delay={1.5}
                        duration={1.5}
                        decimals={1}
                        decimal="."
                        prefix="$"
                        suffix="M"
                        onEnd={() => console.log('Ended! 👏')}
                        onStart={() => console.log('Started! 💨')}
                        >
                            {({ countUpRef, start }) => (
                                <h3 className="text-3xl" ref={countUpRef} onLoad={start}></h3>                                
                            )}
                        </CountUp>
                        <h4 className="text-sm mt-6">Managed Projects </h4>
                    </div>
                    <div className="w-1/3">
                        <CountUp
                            start={0}
                            end={2000}
                            delay={3}
                            duration={1.5}
                            onEnd={() => console.log('Ended! 👏')}
                            onStart={() => console.log('Started! 💨')}
                            >
                                {({ countUpRef, start }) => (
                                    <h3 className="text-3xl" ref={countUpRef} onLoad={start}></h3>                                
                                )}
                        </CountUp>
                        <h4 className="text-sm mt-6">Client hours saved</h4>
                    </div>
                </div>
                <a href="/portfolio" className="bg-blue hover:bg-gold text-white py-3 px-14 rounded-3xl">See Case Studies</a>
            </div>
        )
    }
}

export default Stats;