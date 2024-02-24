import React, { useCallback, useEffect, useRef, useState } from 'react'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
import Image from "next/image";
import { cardData } from '@/data/data';
import anime from 'animejs';

const CarCards = () => {
    const cardRefs = cardData.map(() => useRef(null));

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    anime({
                        targets: entry.target,
                        opacity: [0, 1],
                        easing: 'easeInExpo',
                        duration:400,
                    });
                    observer.unobserve(entry.target); // Unobserve the current target
                }
            });
        }, {
            threshold: 0.1
        });
    
        cardRefs.forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });
    
        return () => {
            cardRefs.forEach((ref) => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, []);
    
    const [isPopupOpen, setPopupOpen] = useState(false);
    const popupRef = useRef(null);
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && (popupRef.current as HTMLElement).contains(event.target as Node)) {
                setPopupOpen(false);
            }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    
    const handleButtonClick = useCallback(() => {
        setPopupOpen(true);
    }, []);
    
    return (
        <div className='flex flex-col justify-start md:flex-row md:items-center px-10 w-full gap-20 overflow-auto h-[65vh] pb-10 md:pb-0'>
            {cardData.map((card, index) => (
                <div key={index} ref={cardRefs[index]} className=' opacity-0'>
                    <CardContainer className="inter-var w-[21rem] md:w-[25rem]">
                        <CardBody key={index} className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] md:w-[25rem] h-auto rounded-xl p-7 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                                {card.title}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                {card.description}
                            </CardItem>
                            <CardItem
                                translateZ="100"
                                rotateX={20}
                                rotateZ={-10}
                                className="w-full mt-4"
                            >
                                <Image
                                    src={card.imageSrc}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-10">
                                <CardItem
                                    translateZ={20}
                                    translateX={-40}
                                    as="button"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:font-bold"
                                >
                                <div onClick={handleButtonClick} className='mx-1'>
                                    {card.buttonText1}
                                </div>
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    translateX={40}
                                    as="button"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    {card.buttonText2}
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                    {isPopupOpen && (
                        <div ref={popupRef} className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                <div className="fixed inset-0 bg-gray-500 bg-opacity-20 transition-opacity" aria-hidden="true"></div>
                                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                                    Car Details
                                                </h3>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                        {card.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                        <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setPopupOpen(false)}>
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default CarCards