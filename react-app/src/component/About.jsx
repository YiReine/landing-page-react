function About() {
    return (
      <>
        <div className="w-full lg:w-1/4 text-lg xl:text-base lg:text-sm">
            <div className=" px-6 py-10 bg-white rounded-xl text-color-light">
                <span className="text-2xl"><b>About</b></span>
            
                <div className="pt-6 pb-3 flex items-center">
                    <i className="fas fa-user mr-3"></i> 
                    <span className="text-color">Female</span> 
                </div>
                <hr/>
                <div className="py-3 flex items-center">
                    <i className="fas fa-birthday-cake mr-3"></i> 
                    <span className="text-color">Born July 17, 1990</span> 
                </div>
                <hr/>
                <div className="py-3 flex items-center">
                    <i className="fas fa-map-marker-alt mr-3"></i> 
                    <span className="text-color">Nghe An, Viet Nam</span> 
                </div>
                <hr/>
                <div className="py-3 flex items-center">
                    <i className="fas fa-envelope mr-3"></i> 
                    <span className="text-color">happy321@gmail.com</span> 
                </div>
                <hr/>
                <div className="py-3 flex items-center">
                    <i className="fas fa-phone-alt mr-3"></i>
                    <span className="text-color">0854774582</span>
                </div>
            </div>
            
        </div>
      </>
    )
}

export default About