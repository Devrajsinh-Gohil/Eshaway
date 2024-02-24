import React from 'react'
import { Boxes } from './ui/background-boxes'
import { SOCIAL_ICONS } from '@/data/data'

const ContactUs = () => {
    return (
        <section>
            <div className="h-[100vh] relative w-full overflow-hidden bg-theme-dark flex flex-col items-center justify-center">
                <div className="absolute inset-0 w-full h-full bg-theme-dark z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

                <Boxes />
                <div className="text-white p-6 z-10 flex flex-col md:flex-row gap-5">
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Racing Team IIT Bombay</h2>
                        <p className="mb-4 max-w-[20rem]">IIT Bombay Racing is India's premier Formula Student Electric team with a vision to "Revolutionize Electric Mobility in India.</p>
                    </div>


                    <div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">Magazine</h3>
                            <p className="mb-4">Stay update with our latest</p>
                            <input
                                type='email'
                                className="mb-4 appearance-none border-gray-300 w-[80%] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Email"
                            />
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