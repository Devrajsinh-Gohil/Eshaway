import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import anime from 'animejs';
import { PinContainer } from './ui/3d-pin'; // Import PinContainer from its file
import Image from "next/image";
import { achievements } from '../data/data'; // Import achievements from data.ts

const Timeline = () => {
    const refs: React.RefObject<HTMLElement>[] = achievements.map(() => useRef(null));
    const [bubblePositions, setBubblePositions] = useState<number[]>([]);

    useEffect(() => {
    setTimeout(() => {
        setBubblePositions(refs.map(ref => ref.current ? ref.current.offsetTop : 0));
    }, 100);

    anime({
        targets: '.timeline .el',
        opacity: [0, 1],
        translateX: (el: any, i: any) => i % 2 === 0 ? [-600, 0] : [600, 0],
        delay: anime.stagger(100), // increase delay for each element
        easing: 'easeOutExpo',
    });
}, []);

    return (
        <section className='mt-10'>
            <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <div className="timeline flex flex-col space-y-4 relative h-[100vh] md:space-y-0 w-[100vw] overflow-scroll">
                    <div className='flex justify-center items-center text-5xl mt-10 timeline-heading h-10 '>
                        <h1 className='text-4xl sm:text-7xl font-bold z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-0 md:py-8 sticky'>Achievements</h1>
                    </div>
                    {/* <div className="spacer" style={{ height: '2.5rem' }} /> */}
                    <div style={{
                        top: `calc(${bubblePositions[0]}px + 3rem)`,
                        height: `${bubblePositions[bubblePositions.length - 1] - bubblePositions[0]}px`,
                    }} className="hidden md:block absolute w-1 h-full left-1/2 transform -translate-x-1/2 text-4xl sm:text-7xl font-bold text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500"></div>
                    {achievements.map((achievement, index) => (
                        <React.Fragment key={index}>
                            <div style={{
                                top: `calc(${bubblePositions[index]}px + 3rem)`,
                            }} className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full items-center justify-center text-4xl sm:text-7xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500`}>
                                <span className="text-white text-xs">{achievement.year}</span>
                            </div>
                            <div ref={refs[index] as React.RefObject<HTMLDivElement>} className={`${index % 2 === 1 ? 'ml-0 md:ml-[30rem]' : 'mr-0 md:mr-[30rem]'} el opacity-0 pb-10`}>
                                <PinContainer title={achievement.title} href={`#${achievement.title}`} className='w-full md:w-1/2 z-10' index={index}>
                                    <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[15rem] ">
                                        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                            {achievement.year}: {achievement.description}
                                        </h3>
                                        <Image src={`${achievement.img}`} height="500" width="500" alt='lol' className=" shadow-lg rounded-2xl mt-5" />
                                    </div>
                                </PinContainer>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;