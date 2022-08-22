import React, { useState } from 'react';
import bag from '../images/bag (4).png';
import bars from '../images/statistics@2x.png';
import phone from '../images/phone.png';
import heart from '../images/Icon ionic-ios-heart@2x.png';
import lap from '../images/71MR2GN7vfL._AC_SL1500_@2x.png';
import top from '../images/71DkiXprgBS._AC_SL1500_ (1)@2x.png';
import laptop from '../images/xcc@2x.png';
import detail from '../images/71usm8vWd1L._AC_SL1500_@2x.png';
import slidedetail from "../images/3@2x.png";
import slidedetail1 from '../images/5@2x.png';
import slidedetail2 from '../images/2@2x.png';
import slidedetail3 from '../images/1@2x.png';
import share from '../images/share (1).png';
import watchlist from '../images/watchlist (2).png';
import comment from '../images/comments (1).png';
import hearts from '../images/heart@2x.png';
import { AiFillStar, AiOutlineQuestionCircle, AiOutlineDelete } from 'react-icons/ai';
import { FaStarHalfAlt } from 'react-icons/fa';
import { BiDollar } from 'react-icons/bi';
import { FiStar } from 'react-icons/fi';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


function Main() {
    const [data, setdata] = useState([0, 1, 2])
    return (
        <div className='bg-stone-100 p-2'>
            <div className='bg-white p-2 w-9/12 m-auto my-1'>
                <div className='flex items-center justify-between'>
                    <div>
                        <p className='text-xs'>what's...</p>
                        <p className='text-2xl'>Trending</p>
                    </div>
                    <div className='flex items-center'>
                        <select className='border rounded-md text-sm text-slate-500 w-36 h-8 focus:outline-none'>
                            <option>select Category</option>
                        </select>

                        <p className='text-xs mx-3 text-blue-600 underline cursor-pointer'>View all</p>
                    </div>
                </div>
            </div>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={27}
                totalSlides={3}
            >
                <Slider>

                    {data.map((e, i) => {
                        return (
                            <Slide index={e}><div className=' w-9/12 m-auto '>
                                <div className='flex items-center'>
                                    <div className='bg-white basis-3/12 p-2 mx-2'>
                                        <div className='flex items-end justify-between'>
                                            <div className='relative'>
                                                <img src={bag} className="w-8"></img>
                                                <p className='bg-black text-white w-4 h-4 rounded-full absolute top-3 left-4 self-center  gobal-padd text-center'>+2</p>
                                            </div>
                                            <div className='mx-1'>
                                                <p className='text-xs font-medium'>Ends: Jan 08,Fri,00:00PM</p>
                                            </div>
                                            <div>
                                                <div className='bg-white p-2 shadow shadow-stone-500 rounded-full'>
                                                    <img src={bars} className="w-5" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='relative'>
                                            <img src={phone} />
                                            <div className='bg-white p-2 shadow shadow-stone-500 rounded-full absolute top-4 right-0'>
                                                <img src={heart} className=" w-5" />
                                            </div>
                                        </div>

                                        <div className='text-center'>
                                            <p className='text-sm'>SAMSUMG Galaxy s20 FE 5G Factory Unlocked Android Cell</p>
                                            <p className='text-xs font-semibold bg-stone-300'>Online Price Range</p>
                                            <p className='text-sm'> $182 <sup>99</sup> - $293<sup>99</sup></p>
                                        </div>
                                    </div>



                                    <div className='bg-white basis-3/12 p-2 mx-2'>
                                        <div className='flex items-end justify-between'>
                                            <div className='relative'>
                                                <img src={bag} className="w-8"></img>
                                                <p className='bg-black text-white w-4 h-4 rounded-full absolute top-3 left-4 self-center  gobal-padd text-center'>+2</p>
                                            </div>
                                            <div className='mx-1'>
                                                <p className='text-xs font-medium'>Ends: Jan 08,Fri,00:00PM</p>
                                            </div>
                                            <div>
                                                <div className='bg-white p-2 shadow shadow-stone-500 rounded-full'>
                                                    <img src={bars} className="w-5" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='relative'>
                                            <img src={laptop} />
                                            <div className='bg-white p-2 shadow shadow-stone-500 rounded-full absolute top-4 right-0'>
                                                <img src={heart} className=" w-5" />
                                            </div>
                                        </div>

                                        <div className='text-center'>
                                            <p className='text-sm'>SAMSUMG Galaxy s20 FE 5G Factory Unlocked Android Cell</p>
                                            <p className='text-xs font-semibold  bg-stone-300'>Online Price Range</p>
                                            <p className='text-sm'> $182 <sup>99</sup> - $293<sup>99</sup></p>
                                        </div>
                                    </div>



                                    <div className='bg-white basis-3/12 p-2 mx-2'>
                                        <div className='flex items-end justify-between'>
                                            <div className='relative'>
                                                <img src={bag} className="w-8"></img>
                                                <p className='bg-black text-white w-4 h-4 rounded-full absolute top-3 left-4 self-center  gobal-padd text-center'>+2</p>
                                            </div>
                                            <div className='mx-1'>
                                                <p className='text-xs font-medium'>Ends: Jan 08,Fri,00:00PM</p>
                                            </div>
                                            <div>
                                                <div className='bg-white p-2 shadow shadow-stone-500 rounded-full'>
                                                    <img src={bars} className="w-5" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='relative'>
                                            <img src={lap} />
                                            <div className='bg-white p-2 shadow shadow-stone-500 rounded-full absolute top-4 right-0'>
                                                <img src={heart} className=" w-5" />
                                            </div>
                                        </div>

                                        <div className='text-center'>
                                            <p className='text-sm'>SAMSUMG Galaxy s20 FE 5G Factory Unlocked Android Cell</p>
                                            <p className='text-xs font-semibold  bg-stone-300'>Online Price Range</p>
                                            <p className='text-sm'> $182 <sup>99</sup> - $293<sup>99</sup></p>
                                        </div>
                                    </div>

                                    <div className='bg-white basis-3/12 p-2 mx-2'>
                                        <div className='flex items-end justify-between'>
                                            <div className='relative'>
                                                <img src={bag} className="w-8"></img>
                                                <p className='bg-black text-white w-4 h-4 rounded-full absolute top-3 left-4 self-center  gobal-padd text-center'>+2</p>
                                            </div>
                                            <div className='mx-1'>
                                                <p className='text-xs font-medium'>Ends: Jan 08,Fri,00:00PM</p>
                                            </div>
                                            <div>
                                                <div className='bg-white p-2 shadow shadow-stone-500 rounded-full'>
                                                    <img src={bars} className="w-5" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='relative'>
                                            <img src={top} />
                                            <div className='bg-white p-2 shadow shadow-stone-500 rounded-full absolute top-4 right-0'>
                                                <img src={heart} className=" w-5" />
                                            </div>
                                        </div>

                                        <div className='text-center'>
                                            <p className='text-sm'>SAMSUMG Galaxy s20 FE 5G Factory Unlocked Android Cell</p>
                                            <p className='text-xs font-semibold  bg-stone-300'>Online Price Range</p>
                                            <p className='text-sm'> $182 <sup>99</sup> - $293<sup>99</sup></p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            </Slide >
                        )
                    })}

                </Slider>
            </CarouselProvider>


            <div className=' p-2 w-9/12 m-auto my-1'>
                <div className='flex '>
                    <div className='basis-1/2 mx-1'>
                        <div className='bg-white p-2  m-auto my-1'>
                            <div className='flex  justify-between'>
                                <div className='basis-2/12'>
                                    <img src={slidedetail} className="mb-2 h-12" />
                                    <img src={slidedetail1} className="mb-2 h-12" />
                                    <img src={slidedetail2} className="mb-2 h-12" />
                                    <img src={slidedetail3} className="mb-2 h-12" />
                                    <img src={slidedetail} className="mb-2 h-12" />
                                    <img src={slidedetail2} className="mb-2 h-12" />
                                </div>
                                <div className='basis-9/12'>
                                    <img src={detail} />
                                </div>
                                <div className='basis-1/12'>
                                    <div className='bg-white p-1 w-8 h-8   shadow shadow-stone-500 rounded-full  mt-3'>
                                        <img src={share} className="w-6" />
                                    </div>
                                    <p className='text-stone-600  text-xs font-medium mx-1'>12.5k</p>

                                    <div className='bg-white p-1 w-8 h-8   align-middle  shadow shadow-stone-500 rounded-full  mt-3'>
                                        <img src={watchlist} className="w-6" />
                                    </div>
                                    <p className='text-stone-600  text-xs font-medium mx-1'>12.5k</p>
                                    <div className='bg-white p-1 w-8 h-8  shadow shadow-stone-500 rounded-full  mt-3'>
                                        <img src={hearts} className=" w-6 " />
                                    </div>
                                    <p className='text-stone-600  text-xs font-medium mx-1'>12.5k</p>
                                    <div className='bg-white p-1 w-8 h-8 shadow shadow-stone-500 rounded-full mt-3 '>
                                        <img src={comment} className=" w-6" />
                                    </div>
                                    <p className='text-stone-600  text-xs font-medium mx-1'>12.5k</p>
                                    <div className='bg-white p-2 w-8 h-8 shadow shadow-stone-500 rounded-full mt-3 '>
                                        <img src={bars} className=" w-6" />
                                    </div>
                                    <p className='text-stone-600  text-xs font-medium mx-1'>12.5k</p>
                                </div>
                            </div>
                            <div>
                                <p className='text-2xl text-justify mb-2'>SAMSUMG Galaxy s20 FE 5G</p>
                                <div className='flex items-center'>
                                    <AiFillStar className='text-blue-700' />
                                    <AiFillStar className='text-blue-700' />
                                    <AiFillStar className='text-blue-700 ' />
                                    <FaStarHalfAlt className='text-blue-700 text-sm' />
                                    <FiStar className='text-blue-700 mx-0.5 text-sm' />

                                    <div>
                                        <p className='text-stone-600 text-xs mx-0.5'>(<span className='underline mx-0.5'>7,114 ratings </span>)</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='mt-2'>
                                    <p className='text-stone-600 text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, rem. Dicta possimus soluta facere voluptas ea commodi rerum quasi voluptatum. Odio mollitia, alias, doloribus porro nemo adipisci minus rem </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='basis-1/2 mx-1'>
                        <div className='bg-white p-2  m-auto my-1'>
                            <div>
                                <p className='text-sm font-semibold'>Condition</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='border border-stone-500 rounded-md p-1 mx-1'>
                                    <p className='text-0'>New</p>
                                </div>
                                <div className='border border-stone-400 rounded-md p-1 mx-1'>
                                    <p className='text-0 text-stone-400'>New-Open Box</p>
                                </div>
                                <div className='border border-stone-400 rounded-md p-1 mx-1'>
                                    <p className='text-0 text-stone-400'>Used-Like New</p>
                                </div>
                                <div className='border border-stone-400 rounded-md p-1 mx-1'>
                                    <p className='text-0 text-stone-400'>Used-Good</p>
                                </div>
                                <div className='border border-stone-400 rounded-md p-1 mx-1'>
                                    <p className='text-0 text-stone-400'>Used - Acceptable</p>
                                </div>
                                <div className='border border-stone-400 rounded-md p-1 mx-1'>
                                    <p className='text-0 text-stone-400'>Refurbished</p>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <p className='text-sm font-semibold'>Color</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='border border-stone-500 rounded-md px-2 py-1 mx-1 '>
                                    <div className='w-8 h-8 bg-blue-800 rounded-full'></div>
                                    <p className='text-0 text-center'>Blue</p>
                                </div>

                                <div className='border border-stone-500 rounded-md px-2 py-1 mx-1'>
                                    <div className='w-8 h-8 bg-green-500 rounded-full'></div>
                                    <p className='text-0  text-center'>Green</p>
                                </div>

                                <div className='border border-stone-500 rounded-md px-2 py-1 mx-1'>
                                    <div className='w-8 h-8 bg-stone-800 rounded-full'></div>
                                    <p className='text-0  text-center'>Black</p>
                                </div>

                                <div className='border border-stone-500 rounded-md px-2 py-1 mx-1'>
                                    <div className='w-8 h-8 bg-orange-400 rounded-full'></div>
                                    <p className='text-0  text-center'>Orange</p>
                                </div>
                            </div>
                        </div>

                        <div className='bg-white py-2 px-5  m-auto my-1'>
                            <div className='flex items-center justify-between'>
                                <p className='text-stone-300 relative bottom-2'>______________________</p>
                                <p>My Offer Details</p>
                                <p className='text-stone-300 relative bottom-2'>______________________</p>
                            </div>
                            <div className='flex items-center '>
                                <div className='mr-3'>
                                    <div className='flex items-center justify-between'>
                                        <p className='text-stone-600 text-xs'>specify</p>
                                        <AiOutlineQuestionCircle />
                                    </div>
                                    <p className='text-sm font-medium'>Response</p>
                                    <p className='text-stone-600 text-xs text-end'>Timeline</p>
                                </div>
                                <div className='mx-2'>
                                    <div className='flex items-center justify-start'>
                                        <select className='border rounded-md text-sm text-slate-500 w-36 h-8 focus:outline-none mx-2'>
                                            <option>select Category</option>
                                        </select>

                                        <select className='border rounded-md text-sm text-slate-500 w-36 h-8 focus:outline-none mx-2'>
                                            <option>select Category</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className='flex items-center mt-3'>
                                <div className='mr-3'>
                                    <div className='flex items-center justify-between'>
                                        <p className='text-stone-600 text-xs'>Request</p>
                                        <AiOutlineQuestionCircle />
                                    </div>
                                    <p className='text-sm font-medium'>Quantity</p>

                                </div>
                                <div className='mx-2'>
                                    <div className='flex items-center'>
                                        <select className='border rounded-md text-sm text-slate-500 w-72 h-8 focus:outline-none mx-2'>
                                            <option>select Category</option>
                                        </select>
                                        <div>
                                            <AiOutlineDelete className='text-red-700 cursor-pointer' />
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div className='flex  mt-3'>
                                <div className='mr-3'>
                                    <div className='flex items-center justify-between'>
                                        <p className='text-stone-600 text-xs'>Offer</p>
                                        <AiOutlineQuestionCircle />
                                    </div>
                                    <p className='text-sm font-medium'>Amount</p>

                                </div>
                                <div className=''>
                                    <div className='flex items-baseline'>
                                        <BiDollar />
                                        <div className='mx-2'>
                                            <input className='border rounded-md text-sm p-2 text-slate-500 w-72 h-8 focus:outline-none ' />
                                            <p className='text-xs text-stone-600 '>Accept(s) <span className='font-medium text-stone-800'>0</span> of <span className='font-medium text-stone-800'>3</span></p>

                                            <div className='flex items-center'>
                                                <input type="checkbox" value='dsfsd'/>
                                                <label className='text-xs text-stone-600 mx-1'>share your find in social media</label><br></br>
                                            </div>

                                            <div className='mt-1'>
                                                <button className='bg-blue-700 w-72 text-white text-sm p-1'>My Offer</button>
                                            </div>
                                        </div>

                                        <div>
                                            <p className='text-stone-600 text-xs'> Per Item</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Main