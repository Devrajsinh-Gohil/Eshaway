import React from 'react'
import { Boxes } from './ui/background-boxes'
import { SOCIAL_ICONS } from '@/data/data'

const ContactUs = () => {
    return (
        <section>
            <div className="h-[100vh] relative w-full overflow-hidden bg-theme-dark flex flex-col items-center justify-center">
                <div className="absolute inset-0 w-full h-full bg-theme-dark z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

                <Boxes />
                <div className="text-white p-6 z-10 flex flex-col md:flex-row gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Racing Team IIT Bombay</h2>
                        <p className="mb-4 max-w-[20rem]">IIT Bombay Racing is India&apos;s premier Formula Student Electric team with a vision to &quot;Revolutionize Electric Mobility in India.&quot;</p>
                    </div>


                    <div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Magazine</h3>
                            <p className="mb-4">Stay update with our latest</p>
                            <div className='flex flex-row items-center justify-center'>
                            <input
                                type='email'
                                className="appearance-none border-gray-300 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-10"
                                placeholder="Email"
                            />
                            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 h-10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Phone</h3>
                            <p className="mb-1">7875692712</p>
                            <p className="mb-4">9930779212</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-2">Address</h3>
                            <p className="mb-4">IIT Bombay, Powai, 400063, India</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-2">Follow us</h3>
                        <ul className=' list-none flex flex-row gap-2'>
                            {SOCIAL_ICONS.map((Icon, index) => (
                                <li key={index} className='hover:text-[#C81111] '><Icon /></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs