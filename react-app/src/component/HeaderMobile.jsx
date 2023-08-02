import { useState } from 'react'
import pageLogo from '../assets/img/logo-company.png'


function HeaderMobile() {
    const [open, setOpen] = useState(true);
    return (
      <>
        <header className="w-full bg-sidebar py-5 px-6 sm:hidden">
            <div className="flex items-center justify-between">
                <a href="index.html" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">
					<img src={pageLogo} alt="Logo"/> 
				</a>
                <button className="text-white text-3xl focus:outline-none" onClick={()=>setOpen(!open)}>
                    <svg style={{display: !open && 'none'}}
                     xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M3 8h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2Zm18 8H3a1 1 0 0 0 0 
                        2h18a1 1 0 0 0 0-2Zm0-5H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z"/>
                    </svg>
                    <svg style={{display:  open && 'none'}}
                     xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 20 20"><g fill="currentColor">
                        <path d="M7.172 14.243a1 1 0 1 1-1.415-1.415l7.071-7.07a1 1 0 1 1 1.415 1.414l-7.071 7.07Z"/>
                        <path d="M5.757 7.172a1 1 0 0 1 1.415-1.415l7.07 7.071a1 1 0 1 1-1.414 1.415l-7.07-7.071Z"/></g>
                    </svg>
                </button>
            </div>

            {/* Dropdown Nav */}
            <nav className={open ? 'hidden': 'flex flex-col pt-4'}>
				<div className="w-full">
					<form>   
						<label for="search" className="mb-2 text-sm font-medium text-color sr-only ">Search</label>
						<div className="relative">
							<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<iconify-icon icon="dashicons:search" className="text-color" width="24"></iconify-icon>
							</div>
							<input type="search" id="search" 
                            className="block w-full p-4 pl-10 text-sm text-color  rounded-lg bg-white 
                            focus:ring-purple-800 focus:border-purple-800 placeholder-purple-900" 
                            placeholder="Search" required />
						</div>
					</form>
				</div>
                <a href="index.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-home mr-3"></i>
                	Home
                </a>
                <a href="#" className="flex items-center active-nav-link text-white py-2 pl-4 nav-item">
                    <i className="fas fa-user mr-3"></i>
               		Profile
                </a>
                <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-comment-alt mr-3"></i>
                	Messages
                </a>
                <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-list-alt mr-3"></i>
                	Purchases
                </a>
                <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-gift mr-3"></i>
                	Returns
                </a>
                <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-images mr-3"></i>
                	Gallery
                </a>
                <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-chart-bar mr-3"></i>
                	Analytics
                </a>
                <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-cog mr-3"></i>
                	Settings
                </a>
                <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-user mr-3"></i>
                    My Account
                </a>
                <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                    <i className="fas fa-sign-out-alt mr-3"></i>
                    Log Out
                </a>
                
            </nav>
        </header>
      </>
    )
}

export default HeaderMobile