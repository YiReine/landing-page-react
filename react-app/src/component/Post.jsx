import { useState } from 'react'
import avatar from '../assets/img/avatar.png'
import imgUser from '../assets/img/user-1.png'
import post from '../assets/img/post.png'
function PostContent() {    
    const [comment, setComment] = useState(false);
    return (
        <div className="mx-auto flex justify-center max-w-3xl md:mb-8 bg-white rounded-lg items-center relative md:p-0 p-8">
            <div className="h-full relative">
                <div className="py-2 px-2">
                    <div className="flex justify-between py-2 items-start">
                        <div className="relative mt-1 flex items-center">
                            <div className="mr-2">
                                <img src={avatar} alt="avatar main"
                                        className="w-20 h-20 rounded-full object-cover"/>
                            </div>
                            <div className="ml-3 flex justify-start flex-col">
                                <p className="text-color text-base font-semibold">
                                    Charles Deo
                                </p>
                                <p className="text-color text-xs">
                                    15 mins ago
                                </p>
                            </div>
                        </div>
                        <button type="button" className="relative p-2 focus:outline-none border-none rounded-full top-2">
                            <svg className="w-5 h-5 text-color" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> 
                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/> 
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="relative w-full h-full">
                    <img src={post} alt="new post" className="rounded-lg w-full h-full object-cover"/>
                </div>
                <div>
                    <div className="p-2 flex flex-col space-y-3">
                        <div className="w-full">
                            <p className="font-normal text-lg text-color">
                                <span className="font-bold">Charles Deo</span>
                                New Blazer put here... $500!!!!!!
                            </p>
                        </div>
                    </div>
                    <div className="flex space-x-6 items-start p-2">
                        <div className="flex space-x-2 items-center">
                            <button type="button" className="focus:outline-none Like">
                                <svg className="w-8 h-8 text-color-light" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#a303a0" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                            </button>
                            <span className="font-bold text-color text-lg">1,498</span>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <button type="button" className="focus:outline-none Comment" onClick={()=>setComment(!comment)}>
                                <svg className="w-8 h-8 text-color-light" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#a303a0" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                            </button>
                            <span className="font-bold text-color text-lg">3,000</span>
                        </div>
                    </div>
                </div>

                <div style={{display:  !comment && 'none'}} className="z-50 mt-2">
                    <form>
                        <div className="flex justify-between items-center w-full">
                            <div className="w-10 shrink-0 mr-2">
                                <img src={avatar}  alt="avatar"
                                className="w-10 h-10 rounded-full object-cover"/>
                            </div>
                            <div className="flex w-full h-10 py-2 px-3 rounded-lg focus:outline-none bg-gray-100">
                                <input type="text" name="comment" id="comment" placeholder="Write your comment..." className="w-full text-sm bg-gray-100"/>
                                <button className="w-15 right-2 border-none text-sm text-indigo-600 focus:outline-none">
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512 "className="w-5 h-5"><path fill="#a303a0" d="m476.59 227.05l-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52A24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4a24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8Z"/></svg>
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="flex w-full">
                        <div className="flex justify-start flex-col space-y-3 items-start border-gray-100 w-full">
                            <div className="relative mt-1 mb-3 pt-2 flex">
                                <div className="w-10 shrink-0 mr-2">
                                    <img src={imgUser} alt="avatar 2" className="w-10 h-10 rounded-full object-cover"/>
                                </div>
                                <div className="ml-2 w-full mt-2 space-y-2">
                                    <p className="text-gray-600 md:text-base text-sm w-full">
                                        <p className="font-bold text-gray-900">Beckham</p>
                                        Nice!!!
                                    </p>
                                    <div className="flex space-x-4">
                                        <button type="button" className="focus:outline-none time mt-1 text-gray-600 text-xs">
                                                <p>Like</p>
                                        </button>
                                        <button type="button" className="focus:outline-none time mt-1 text-gray-600 text-xs">
                                                <p>Replay</p>
                                        </button>
                                        <div className="time mt-1 text-gray-400 text-xs">
                                            <p>1h</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="place-items-center flex flex-col w-full">
                                <button type="button" className="focus:outline-none time mt-1 text-gray-600 text-sm">
                                    View more comments
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
function Post() {
    const [open, setOpen] = useState(3);
    return (
      <>
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <div className="lg:mx-6 px-6 bg-white rounded-xl">
                <div className="w-full">
                    <div className="text-lg xl:text-2xl">
                        <ul className="flex border-b pt-10">
                            <li className="mr-1" onClick={()=>setOpen(1)}>
                                <a className={open == 1 ? 'border-line font-bold text-color-light bg-white inline-block py-2 px-4' : 'text-color-light hover:text-orange-200 bg-white inline-block py-2 px-4'} href="#">Followers</a>
                            </li>
                            <li className="mr-1" onClick={()=>setOpen(2)}>
                                <a className={open == 2 ? 'border-line font-bold text-color-light bg-white inline-block py-2 px-4' : 'text-color-light hover:text-orange-200 bg-white inline-block py-2 px-4'} href="#">Following</a>
                            </li>
                            <li className="mr-1" onClick={()=>setOpen(3)}>
                                <a className={open == 3 ? 'border-line font-bold text-color-light bg-white inline-block py-2 px-4' : 'text-color-light hover:text-orange-200 bg-white inline-block py-2 px-4'} href="#">Post</a>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white p-3">
                        <div id="" className={open == 1 ? ' ': 'hidden'}>
                            <div className="py-3 flex items-center">
                                <a href="#" className="realtive z-10 w-10 h-10 mr-3 rounded-full overflow-hidden hover:border-gray-300 focus:border-gray-300 focus:outline-none">
                                    <img src={avatar} alt=""/>
                                </a>
                                <div>
                                    <p className="text-base font-semibold">
                                        <b>Future Stock</b>
                                    </p>
                                    <span className="text-sm">ancomchua@gmail.com</span>
                                </div>
                            </div>

                            <div className="py-3 flex items-center">
                                <a href="#" className="realtive z-10 w-10 h-10 mr-3 rounded-full overflow-hidden hover:border-gray-300 focus:border-gray-300 focus:outline-none">
                                    <img src={avatar} alt=""/>
                                </a>
                                <div>
                                    <p className="text-base font-semibold">
                                        <b>Future Stock</b>
                                    </p>
                                    <span className="text-sm">ancomchua@gmail.com</span>
                                </div>
                            </div>

                            <div className="py-3 flex items-center">
                                <a href="#" className="realtive z-10 w-10 h-10 mr-3 rounded-full overflow-hidden hover:border-gray-300 focus:border-gray-300 focus:outline-none">
                                    <img src={avatar} alt=""/>
                                </a>
                                <div>
                                    <p className="text-base font-semibold">
                                        <b>Future Stock</b>
                                    </p>
                                    <span className="text-sm">ancomchua@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        <div id="" className={open == 2 ? ' ': 'hidden'}>
                            <div className="py-3 flex items-center">
                                <a href="#" className="realtive z-10 w-10 h-10 mr-3 rounded-full overflow-hidden hover:border-gray-300 focus:border-gray-300 focus:outline-none">
                                 <img src={avatar} alt=""/>
                                </a>
                                <div>
                                    <p className="text-base font-semibold">
                                        <b>Future Stock</b>
                                    </p>
                                    <span className="text-sm">ancomchua@gmail.com</span>
                                </div>
                            </div>

                            <div className="py-3 flex items-center">
                                <a href="#" className="realtive z-10 w-10 h-10 mr-3 rounded-full overflow-hidden hover:border-gray-300 focus:border-gray-300 focus:outline-none">
                                 <img src={avatar} alt=""/>
                                </a>
                                <div>
                                    <p className="text-base font-semibold">
                                        <b>Future Stock</b>
                                    </p>
                                    <span className="text-sm">ancomchua@gmail.com</span>
                                </div>
                            </div>

                            <div className="py-3 flex items-center">
                                <a href="#" className="realtive z-10 w-10 h-10 mr-3 rounded-full overflow-hidden hover:border-gray-300 focus:border-gray-300 focus:outline-none">
                                 <img src={avatar} alt=""/>
                                </a>
                                <div>
                                    <p className="text-base font-semibold">
                                        <b>Future Stock</b>
                                    </p>
                                    <span className="text-sm">ancomchua@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        <div id="" className={open == 3 ? ' ': 'hidden'}>
                            <PostContent />
                            <PostContent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}

export default Post