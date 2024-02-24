"use client"
import React, { useEffect, useRef, memo } from 'react';
import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";
import anime from "animejs"

const ANIME_CONFIGS = [
    {
        translateY: [-100, 0],
        opacity: [0, 1],
        duration: 3000,
        easing: 'easeOutExpo',
    },
    {
        scale: [0.1, 1],
        translateY: [-300, 0],
        opacity: [0, 1],
        delay: 500,
        duration: 2000,
        easing: 'easeOutExpo',
    }
];

const LandingHero = () => {
    const logoRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        anime({
            targets: logoRef.current,
            ...ANIME_CONFIGS[0]
        });
        anime({
            targets: textRef.current,
            ...ANIME_CONFIGS[1]
        });
    }, []);

    return (
        <section>
            <div className="h-[100vh] relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
                <div className="w-full absolute inset-0 h-screen">
                    <SparklesCore
                        id="tsparticlesfullpage"
                        background="transparent"
                        minSize={0.6}
                        maxSize={2.4}
                        particleDensity={200}
                        className="w-full h-full"
                        particleColor="#44177E"
                    />
                </div>
                <div className='z-10 flex flex-col gap-1 justify-center items-center'>
                    <div ref={logoRef} className=' opacity-0'>
                        <Image src={'/iitbracing_logo_blue.png'} alt="logo" width={300} height={100} className=' w-[15rem] md:w-50 h-auto'/>
                    </div>
                    <div className='opacity-0 sm' ref={textRef}>
                        <Image src={'/Cars_Logo_Black.png'} alt="logo" width={400} height={200} className=' w-[20rem] md:w-30 h-auto'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(LandingHero);