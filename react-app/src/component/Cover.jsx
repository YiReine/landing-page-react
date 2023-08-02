import avatar from '../assets/img/avatar.png'
import cover from '../assets/img/cover.png'
import { Route, useParams } from 'react-router-dom';
function ButtonVisitor() {
    return (
        <div className="px-6 pb-6 flex sm:flex-nowrap flex-wrap justify-center lg:justify-end lg:mr-6 lg:w-1/2 w-full">
            <button className="bg-light w-10 h-10 p-2 mr-3 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center mt-6">
                <iconify-icon icon="bi:chat-left-text-fill" class="text-white" width="20"></iconify-icon>
            </button>
            <button className="bg-light text-white w-40 h-10 mr-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center mt-6">
                Follow
            </button>
            <button className="bg-white text-color-light border border-light w-44 h-10 rounded-lg  hover:shadow-xl hover:bg-gray-300 flex items-center justify-center mt-6">
                Schedule a meeting
            </button>
        </div>
    )
}
function ButtonOwner() {
    return (
        <div className="px-6 pb-6 flex sm:flex-nowrap flex-wrap justify-center lg:justify-end lg:mr-6 lg:w-1/2 w-full">
            <a href="profile_page_edit.html" className="bg-white text-color-light border border-light w-44 h-10 rounded-lg  hover:shadow-xl hover:bg-gray-300 flex items-center justify-center mt-6">
                Edit Profile
            </a>
        </div>
    )
}
function ButtonOwnerOnCover() {
    return (
        <div className="flex items-center px-6 py-2 rounded absolute right-0 bottom-0 mr-6 mb-4 cursor-pointer">
								
            <button className="bg-white text-color-light w-44 h-10 rounded-lg  hover:shadow-xl hover:bg-gray-300 flex items-center justify-center hidden lg:block">
                Edit Cover Photo
            </button>

            <button className="bg-white w-14 h-14 p-2 mr-3 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center mt-6 lg:hidden">
                <iconify-icon icon="bx:edit" className="text-color-light" width="30"></iconify-icon>
            </button>
            
        </div>
    )
}
function Name({view}) {
    return (
        <div className="w-full flex lg:flex-nowrap flex-wrap">
            <div className="mt-16 lg:mt-6 lg:ml-48 lg:pb-6 flex flex-col lg:w-1/2 w-full text-color-light place-items-center lg:place-items-start">
                <span className="text-4xl"><b>Yen Nhi</b></span>
                <span className="text-xl">Developer</span>
            </div>
            {view === 'owner' && <ButtonOwner />}
            {view === 'visitor' && <ButtonVisitor />}
            {view == null && <ButtonVisitor />}
        </div>

    )
}
function Avatar() {
    return (
        <div className="w-36 h-36 rounded-full bg-cover bg-center bg-no-repeat absolute left-1/2 transform -translate-x-1/2 lg:left-10 lg:translate-x-0 bottom-0 -mb-10  shadow flex items-center justify-center">
            <img src={avatar} alt="avatar main" className="absolute z-0 h-full w-full object-cover rounded-full shadow top-0 left-0 bottom-0 right-0" />
            
        </div>    
    )
}
function Cover() {
    const { view } = useParams();
    
    return (
      <>
        <div className="mx-auto bg-white rounded-xl">
            <div className="w-full mx-0">
                <div className="rounded relative h-64 flex">
                    <img className="object-fill w-full" src={cover} alt="cover"/>
                    
                    {view === 'owner' && <ButtonOwnerOnCover />}
                    
                    <Route path="/edit">
                        <ButtonOwnerOnCover />
                    </Route>
                    
                    <Route path="/profile">
                        <Avatar />
                    </Route>
                </div>
            </div>
            <Route path="/profile">
                <Name view={view}/>
            </Route>
        </div>
      </>
    )
}

export default Cover