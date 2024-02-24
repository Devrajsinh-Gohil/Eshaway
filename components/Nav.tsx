import Image from 'next/image'
import React, { memo } from 'react'
import { NAV_ITEMS, SOCIAL_ICONS } from '../data/data';

const Nav = () => {
    return (
        <>
            <nav className=' hidden navbar navbar-expand-lg navbar-light bg-light bg-theme-dark md:flex flex-row justify-between items-center px-5 py-4 w-[100vw] z-[111] fixed'>
                <Image src={'/iitbracing_logo.png'} alt='logo' width={110} height={110} />
                <ul className='flex flex-row justify-center items-center gap-5 text-md text-white'>
                    {NAV_ITEMS.map((item) => (
                        <li key={item} className='hover:text-[#C81111] hover:underline'>{item}</li>
                    ))}
                </ul>
                <ul className='flex flex-row justify-center items-center text-white gap-5'>
                    {SOCIAL_ICONS.map((Icon, index) => (
                        <li key={index} className='hover:text-[#C81111] '><Icon /></li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default memo(Nav);