import Cover from "./Cover"
import avatar from '../assets/img/avatar.png'
import Form from "./Form"
import { useEffect } from "react";
function Name() {
    function loadFile (e){
        var input = e.target;
        var file = input.files[0];
        //var type = file.type;

        var output = document.getElementById('preview_ava');

        output.src = URL.createObjectURL(e.target.files[0]);
        output.onload = function() {
            URL.revokeObjectURL(output.src) // free memory
        }
    }
    return (
        <div className="w-full lg:w-1/3 flex flex-col items-center border-light lg:border-r my-10">
            <div className="w-36 h-36 rounded-full bg-cover bg-center bg-no-repeat relative shadow flex items-center justify-center">
                <img src={avatar} id="preview_ava" alt="avatar main" className="absolute z-0 h-full w-full object-cover rounded-full shadow top-0 left-0 bottom-0 right-0" />

            </div>
            <div className="flex flex-col text-color-light place-items-center pt-6">
                <span className="text-4xl"><b>Yen Nhi</b></span>
                <span className="text-xl">Developer</span>
            </div>
            <div className="px-6 flex justify-center ">							  
                <input type="file" id="upload" onChange={loadFile} className="hidden"/>
                <label className="bg-white text-color-light border border-light w-44 h-10 rounded-lg  hover:shadow-xl hover:bg-gray-300 flex items-center justify-center my-6 cursor-pointer" for="upload">Upload photo</label>
            </div>
        </div>
    )
}
function Edit() {
  
    return (
      <>
        <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
            <main className="w-full flex-grow px-6 py-2">
                <Cover />
                <div className="flex rounded-lg bg-white mt-6 w-full h-full flex flex-col lg:flex-row">
                    <Name />
                    <Form />
                </div>
            </main>
        </div>
      </>
    )
  }
  
  export default Edit