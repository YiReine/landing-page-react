import avatar from '../assets/img/avatar.png'
function Header() {
    return (
      <>
        <header className="w-full items-center py-2 px-6 hidden sm:flex">
            <div className="w-2/3 md:w-3/4 lg:w-5/6">
                <form>   
                    <label for="default-search" className="mb-2 text-sm font-medium text-color sr-only ">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <iconify-icon icon="dashicons:search" className="text-color" width="24"></iconify-icon>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-color  rounded-lg bg-white focus:ring-purple-800 focus:border-purple-800 placeholder-purple-900" placeholder="Search" required/>
    
                    </div>
                </form>
            </div>
            <div className="relative w-1/3 md:w-1/4 lg:w-1/6 flex justify-end right-2">
                <div className="text-color mr-3">
					<p className="text-sm"><b>Yennhi</b></p>
					<a href="#" className="text-xs">Log out</a>
				</div>
				<button className="realtive z-10 w-12 h-12 rounded-full overflow-hidden  hover:border-gray-300 focus:border-gray-300 focus:outline-none">
                    <img src={avatar} alt="avatar"/>
                </button>
            </div>
        </header>
      </>
    )
}

export default Header