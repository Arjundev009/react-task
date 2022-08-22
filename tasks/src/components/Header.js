import React from 'react';
import menu from '../images/menu (1).png';
import location from '../images/Location (1).png';
import Filte from '../images/Filter (2).png';
import search from '../images/Search (2).png';
import close from '../images/Close (2).png';
import { AiOutlineVideoCamera } from 'react-icons/ai';
import trending from '../images/Trending (2).png';
import bag from '../images/bag (1).png';
import admin from '../images/admin.png';
import {GoTriangleLeft} from 'react-icons/go';
function Header() {
    return (
        <div className='flex items-center shadow-md rounded-lg'>
            <div className='bg-stone-900 text-white basis-11/12'>
                <div className='flex items-center justify-between p-2'>
                    <div className='px-24'>
                        <p className='text-2xl text-stone-400 font-light'>LO<span className='text-white font-normal'>go</span></p>
                    </div>
                    <div>
                        <div className='flex items-center'>
                            <div className='flex items-center'>
                                <img src={menu} className="w-6" />
                                <p className='text-xs mx-1'>Menu</p>
                            </div>

                            <div className='flex items-center'>
                                <img src={location} className="w-6" />
                                <p className='text-xs mx-1'>Location</p>
                            </div>

                            <div className='flex items-center mx-3'>
                                <div className='bg-stone-400 p-1 rounded-l-md'>
                                    <img src={Filte} className="w-6 " />
                                </div>
                                <img src={search} className="w-8 bg-white p-1.5 h-8 " />
                                <div className='relative flex items-center'>
                                    <input className='p-1 w-96 focus:outline-0 text-black' value="ipho" />
                                </div>
                                <img src={close} className="w-8 bg-white p-1.5 h-8 rounded-r-md" />
                            </div>

                            <div className='flex items-center mx-3'>
                                <div className='flex items-center mx-2'>
                                    <AiOutlineVideoCamera className='text-blue-600 text-2xl' />
                                    <p className='text-xs mx-1'>Read Shows</p>
                                </div>
                                <div className='mx-2'>
                                    <img src={trending} className="w-6" />
                                </div>
                                <div className='mx-2'>
                                    <img src={bag} className="w-6" />
                                </div>
                            </div>
                            <GoTriangleLeft className='relative left-3.5'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='basis-1/12 '>
                <div className='bg-white '>
                    <div className='text-center '>
                        <img src={admin} className="w-6 m-auto " />
                        <p className='text-xs'>Hi Madhu</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;