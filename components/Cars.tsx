import React from 'react'
import CarCards from "@/components/CarCards";

const Cars = () => {
    return (
        <>
        <section>
            <div className=" h-[100vh] bg-theme-dark">
                <div className="flex flex-col justify-center items-center gap-5 p-10 text-white">
                    <h1 className="text-[40px] font-medium">Our Legacy</h1>
                    <p className=" text-center text-[16px] font-medium leading-7">
                        "Fuelled by passion, precision, and a legacy of speed, our racing team at IIT Bombay has left tire marks on the tracks and indelible memories in the hearts of enthusiasts. Celebrating the spirit of innovation and performance, we pave the way for future racers, leaving a legacy that accelerates beyond the finish line."
                    </p>
                </div>
                <div className='overflow-auto h-[70vh]'>
                    <CarCards />
                </div>
            </div>
        </section>
        </>
    )
}

export default Cars