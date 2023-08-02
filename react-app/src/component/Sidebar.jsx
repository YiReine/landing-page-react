import pageLogo from '../assets/img/logo-company.png'
function Sidebar() {
    return (
      <>
        <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
            <div className="p-6">
                <a href="index.html" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">
                    <img src={pageLogo} alt="Logo"/> 
                </a>
            </div>
            <nav className="text-white text-base font-semibold pt-3">
                <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                    <i className="fas fa-home mr-3"></i>
                    Home
                </a>
                <a href="#" className="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
                    <i className="fas fa-user mr-3"></i>
                    Profile
                </a>
                <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                    <i className="fas fa-comment-alt mr-3"></i>
                    Messages
                </a>
                <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                    <i className="fas fa-list-alt mr-3"></i>
                    Purchases
                </a>
                <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                    <i className="fas fa-gift mr-3"></i>
                    Returns
                </a>
                <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                <i className="fas fa-images mr-3"></i>
                    Gallery
                </a>
                <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                <i className="fas fa-chart-bar mr-3"></i>
                    Analytics
                </a>
                <a href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                <i className="fas fa-cog mr-3"></i>
                    Settings
                </a>
            </nav>
        </aside>
      </>
    )
}

export default Sidebar