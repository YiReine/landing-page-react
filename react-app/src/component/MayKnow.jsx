import imgUser1 from '../assets/img/user-1.png'
import imgUser2 from '../assets/img/user-2.png'
import imgUser3 from '../assets/img/user-3.png'
function MayKnow() {
    return (
      <>
		<div className=" bg-white rounded-xl text-color py-6 px-10">
			<span className="text-xl font-bold">
				You might know
			</span>
			
			<div className="py-3 flex items-center">
				<a href="#" className="realtive shrink-0 z-10 w-10 h-10 mr-3 rounded-full overflow-hidden">
					<img src={imgUser1} alt="avatar user"/>
				</a>
				<div>
					<p className="text-base font-semibold">
						<b>Future Stock</b>
					</p>
					<span className="text-sm">ancomchua@gmail.com</span>
				</div>
			</div>
										
			<div className="py-3 flex items-center">
				<a href="#" className="realtive shrink-0 z-10 w-10 h-10 mr-3 rounded-full overflow-hidden hover:border-gray-300 focus:border-gray-300 focus:outline-none">
					<img src={imgUser2} alt="avatar user"/>
				</a>
				<div>
					<p className="text-base font-semibold">
						<b>Future Stock</b>
					</p>
					<span className="text-sm">ancomchua@gmail.com</span>
				</div>
			</div>
			
			<div className="py-3 flex items-center">
				<a href="#" className="realtive shrink-0 z-10 w-10 h-10 mr-3 rounded-full overflow-hidden hover:border-gray-300 focus:border-gray-300 focus:outline-none">
					<img src={imgUser3} alt="avatar user"/>
				</a>
				<div>
					<p className="text-base font-semibold">
						<b>Future Stock</b>
					</p>
					<span className="text-sm">ancomchua@gmail.com</span>
				</div>
			</div>
		</div>
					
      </>
    )
}

export default MayKnow