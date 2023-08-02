
import imgUser1 from '../assets/img/user-1.png'
import imgUser2 from '../assets/img/user-2.png'
import imgUser3 from '../assets/img/user-3.png'
function Active() {
    return (
      <>
        <div className="mt-6 bg-white rounded-xl text-color py-6 px-8">
            <span className="text-xl font-bold">
                Active
            </span>
            
            <div className="py-3 flex">
                <div className="relative inline-block mr-3 shrink-0 z-10 place-self-center">
                    <img className="inline-block h-12 w-12 rounded-full" src={imgUser1} alt="Image Description"/>
                    <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-red-400"></span>
                </div>
                <div>
                    <p className="text-lg font-semibold">
                        <b>Future Stock</b>
                    </p>
                    <span className="text-base">offline</span>
                </div>
                <div className="text-[10px] flex-grow relative">
                    <span className="absolute pt-1 right-0">2 min ago</span>
                </div>
            </div>
                                        
            <div className="py-3 flex">
                <div className="relative inline-block mr-3 shrink-0 z-10 place-self-center">
                    <img className="inline-block h-12 w-12 rounded-full" src={imgUser2} alt="Image Description"/>
                    <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400"></span>
                </div>
                <div>
                    <p className="text-lg font-semibold">
                        <b>Future Stock</b>
                    </p>
                    <span className="text-base">online</span>
                </div>
                <div className="text-[10px] flex-grow relative">
                    <span className="absolute pt-1 right-0">2 min ago</span>
                </div>
            </div>
            <div className="py-3 flex">
                <div className="relative inline-block mr-3 shrink-0 z-10 place-self-center">
                    <img className="inline-block h-12 w-12 rounded-full" src={imgUser3} alt="Image Description"/>
                    <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400"></span>
                </div>
                <div>
                    <p className="text-lg font-semibold">
                        <b>Future Stock</b>
                    </p>
                    <span className="text-base">online</span>
                </div>
                <div className="text-[10px] flex-grow relative">
                    <span className="absolute pt-1 right-0">2 min ago</span>
                </div>
            </div>
        </div>
      </>
    )
}

export default Active