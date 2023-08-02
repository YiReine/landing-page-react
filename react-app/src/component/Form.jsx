//import calendarHandler from "./calendarHandler"
import { useState, useEffect } from "react"
import _ from 'lodash'
import { useForm } from "react-hook-form"

function SaveBtn({state}) {
    if(state) {
        return (            
            <button type="submit" className="w-32 h-10 rounded-lg bg-gray-300 text-white 
            flex items-center justify-center mt-6" disabled>
                Save
            </button>
        )
    }
    return (            
        <button type="submit" className="w-32 h-10 rounded-lg bg-light text-white flex items-center justify-center mt-6">
            Save
        </button>
    )
}
function Calendar() {
    return (
      <div className="calendar calendar--hide">
        <p className="calendar__format">MM/DD/YYYY</p>
        <div className="calendar__wrapper">
          <header>
            <div className="select-group month">
              <i className="fa-sharp fa-solid fa-angle-left setting-month"></i>
              <div className="wrapper">
                <div className="select selected-item">
                  <span>Select item</span>
                  <i className="fa-solid fa-caret-down toggle"></i>
                </div>
                <div className="drop-list drop-list--hide">
                  <div className="option">Item1</div>
                  <div className="option option--selected">Item2</div>
                  <div className="option">Item3</div>
                </div>
              </div>
              <i className="fa-sharp fa-solid fa-angle-right setting-month"></i>
            </div>
            <div className="select-group year">
              <i className="fa-sharp fa-solid fa-angle-left setting-year"></i>
              <div className="wrapper">
                <div className="select selected-item">
                  <span>Select item</span>
                  <i className="fa-solid fa-caret-down toggle"></i>
                </div>
                <div className="drop-list drop-list--hide">
                  <div className="option">Item1</div>
                  <div className="option option--selected">Item2</div>
                  <div className="option">Item3</div>
                </div>
              </div>
              <i className="fa-sharp fa-solid fa-angle-right setting-year"></i>
            </div>
          </header>
          <div className="calendar__space">
            <ul className="weeks">
              <li>S</li>
              <li>M</li>
              <li>T</li>
              <li>W</li>
              <li>T</li>
              <li>F</li>
              <li>S</li>
            </ul>
            <ul className="days"></ul>
          </div>
          <div className="calendar__action">
            <span className="calendar__cancel">Cancel</span>
            <span className="calendar__ok">OK</span>
          </div>
        </div>
      </div>
    );
}

function Form() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);

    const registerOptions = {
        namef : { required : "First Name none"},
        namel : { required : "Last Name none"},
        title : { required : "Title is blank"},
        address : {required : "Address is blank"},
        phone : {required: {
            value: true,
            message: "Please add your mobile phone number, I won't call you, promise!"
          }, 
          pattern: {
            value: /^[0-9+-]+$/,
            message: "This is not a valid mobile phone to me, try again!"
          }, 
          minLength: {
            value: 6,
            message: "This number is too short, not gotta fly, try again"
          }, 
          maxLength: {
            value: 12,
            message: "...And now it's too damn long, make sure the number is right, would you?"
          }
        },
        email : {
            required: "Email is equired",
            pattern: {
              value: /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/,
              message: "Invalid email address"
            }
        }
    }

    const [save, setSave] = useState(true);
    const initial = {
        namef:'Deo',
        namel:'Charles',
        title:'UI/UX Designer',
        address:'2239 Hog Camp Road, Schaumburg',
        phone:'33757005467',
        email:'charles5182@ummoh.com',
        gender: 'Female',
        date: '06/26/1980'
    }
    const [data, setData] = useState(initial);

    useEffect(() => {
            if(!_.isEqual(data, initial))
                setSave(false);
            else
                setSave(true);  
    }, [data])

    // useEffect(() => {
    //     calendarHandler();
    // }, [])

    return (
      <>
   
        <div className="flex mt-10 w-full max-w-3xl lg:ml-3 xl:ml-6">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                
                <div className="px-9 pb-6 flex justify-end mr-6 w-full">
                    <button onClick={() => setData(initial)}
                    className="bg-white text-color-light border-light border w-32 h-10 rounded-lg hover:shadow-xl 
                    hover:bg-gray-300 flex items-center justify-center mt-6 mr-6">
                        Cancel
                    </button>
                    <SaveBtn state={save} />
                </div>
                <div className="flex flex-wrap mb-6 w-full px-6 justify-center">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block tracking-wide text-gray-500 text-sm mb-3">
                            First Name
                        </label>
                        <input {...register("firstName",registerOptions.namef)}
                        onChange={e=>setData({...data, [e.target.name]: e.target.value })}
                        className="w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:border-2 bg-white border-gray-500"  
                        type="text" name="namef" value={data.namef}/>
                        <p className="text-red-500 text-xs italic">{errors.firstName && errors.firstName.message}</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block tracking-wide text-gray-500 text-sm mb-3">
                            Last Name
                        </label>
                        <input {...register("lastName",registerOptions.namel)}
                        onChange={e=>setData({...data, [e.target.name]: e.target.value })}
                        className="w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:border-2 bg-white border-gray-500"  
                        type="text" name="namel" value={data.namel}/>
                        <p className="text-red-500 text-xs italic">{errors.lastName && errors.lastName.message}</p>
                    </div>

                </div>
                
                <div className="flex flex-wrap w-full mb-6 px-9">
                    <label className="block tracking-wide text-gray-500 text-sm mb-3">
                    Title
                    </label>
                    <input {...register("Title",registerOptions.title)}
                    onChange={e=>setData({...data, [e.target.name]: e.target.value })}
                    className="w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:border-2 bg-white border-gray-500"  
                    type="text" value={data.title} name="title"/>                    
                    <p className="text-red-500 text-xs italic">{errors.Title && errors.Title.message}</p>
                </div>

                <div className="flex w-full flex-col mx-3 mb-6 px-6">
                    <label className="block tracking-wide text-gray-500 text-sm mb-3">
                        Gender
                    </label>

                    <div className="inline-flex items-center">
                    
                        <label className="relative flex cursor-pointer items-center rounded-full p-3">
                            <input
                            onChange={e=>setData({...data, [e.target.name]: e.target.value })}
                            name="gender"
                            type="radio"
                            value="Male"
                            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border 
                            border-blue-gray-200 text-color-light transition-all before:absolute before:top-2/4 before:left-2/4 
                            before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full 
                            before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-fuchsia-600 
                            checked:before:bg-fuchsia-600 hover:before:opacity-10" checked={data.gender=='Male'}/>
                            <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 
                            text-color-light opacity-0 transition-opacity peer-checked:opacity-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3.5 w-3.5"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                >
                                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                </svg>
                            </div>
                        </label>
                        <label className="mt-px cursor-pointer select-none font-light text-gray-700">
                            Male
                        </label>

                        <label className="relative flex cursor-pointer items-center rounded-full p-3">
                            <input
                            onChange={e=>setData({...data, [e.target.name]: e.target.value })}
                            name="gender"
                            type="radio"
                            value="Female"
                            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border 
                            border-blue-gray-200 text-color-light transition-all before:absolute before:top-2/4 before:left-2/4 
                            before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full 
                            before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-fuchsia-600 
                            checked:before:bg-fuchsia-600 hover:before:opacity-10" checked={data.gender=='Female'}/>
                            <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 
                            text-color-light opacity-0 transition-opacity peer-checked:opacity-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3.5 w-3.5"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                >
                                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                </svg>
                            </div>
                        </label>
                        <label className="mt-px cursor-pointer select-none font-light text-gray-700">
                            Female
                        </label>
        
                        <label className="relative flex cursor-pointer items-center rounded-full p-3">
                            <input
                            onChange={e=>setData({...data, [e.target.name]: e.target.value })}
                            name="gender"
                            type="radio"
                            value="Order"
                            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border 
                            border-blue-gray-200 text-color-light transition-all before:absolute before:top-2/4 before:left-2/4 
                            before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full 
                            before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-fuchsia-600 
                            checked:before:bg-fuchsia-600 hover:before:opacity-10" checked={data.gender=='Order'}/>
                            <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 
                            text-color-light opacity-0 transition-opacity peer-checked:opacity-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3.5 w-3.5"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                >
                                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                </svg>
                            </div>
                        </label>
                        <label className="mt-px cursor-pointer select-none font-light text-gray-700">
                            Order
                        </label>
                    </div>
                    <span className="text-sm text-red-600 hidden" id="errorGender">Option has to be selected</span>
                </div>

                <div className="flex w-full flex-wrap mb-6 px-9">
                    <label className="block tracking-wide text-gray-500 text-sm mb-3">
                        Date
                    </label>
                    <input
                    type="date"
                    name="date" 
                    value="1980-06-26"
                    onclick="this.setAttribute('type', 'date');"
                    className="w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:border-2 bg-white border-gray-500"
                    />
                    <span className="text-xs text-gray-300">MM/DD/YY</span>
                </div>

                <div className="form__input-group">
                    <div className="form__input" id="input-calendar">
                    <label for="birthday">Birthday</label>
                    <div className="form__box birthday" name="birthday">
                        <input
                        hidden
                        type="date"
                        name="birthday"
                        id="birthday"
                        rules="required"
                        defaultValue="1980-06-26"
                        />
                        <span></span>
                        <svg
                        className="active"
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16 2H15V0H13V2H5V0H3V2H2C0.89 2 0 2.9 0 4V18C0 19.1 0.89 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM16 18H2V7H16V18ZM3.5 11C3.5 9.62 4.62 8.5 6 8.5C7.38 8.5 8.5 9.62 8.5 11C8.5 12.38 7.38 13.5 6 13.5C4.62 13.5 3.5 12.38 3.5 11Z"
                            fill="#A303A0"
                        />
                        </svg>
                    </div>
                    <span className="input__error"></span>
                    </div>
                    <Calendar />
                </div>

                <div className="flex flex-wrap w-full mb-6 px-9">
                    <label className="block tracking-wide text-gray-500 text-sm mb-3">
                    Address
                    </label>
                    <input {...register("Address",registerOptions.address)}
                    onChange={e=>setData({...data, [e.target.name]: e.target.value })}
                    className="w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:border-2 bg-white border-gray-500"  
                    type="text" value={data.address} name="address"/>
                    <p className="text-red-500 text-xs italic">{errors.Address && errors.Address.message}</p>
                </div>

                <div className="flex flex-wrap w-full mb-6 px-9">
                    <label className="block tracking-wide text-gray-500 text-sm mb-3">
                    Email
                    </label>
                    <input {...register("Email",registerOptions.email)}
                    onChange={e=>setData({...data, [e.target.name]: e.target.value })}
                    className="w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:border-2 bg-white border-gray-500"  
                    type="text" value={data.email} name="email"/>
                    <p className="text-red-500 text-xs italic">{errors.Email && errors.Email.message}</p>
                </div>

                <div className="flex flex-wrap w-full mb-6 px-9">
                    <label className="block tracking-wide text-gray-500 text-sm mb-3">
                    Phone Number
                    </label>
                    <input {...register("Phone",registerOptions.phone)}
                    onChange={e=>setData({...data, [e.target.name]: e.target.value })}
                    className="w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:border-2 bg-white border-gray-500"  
                    type="text" value={data.phone} name="phone"/>
                    <p className="text-red-500 text-xs italic">{errors.Phone && errors.Phone.message}</p>
                </div>
            </form>
        </div>
      </>
    )
}

export default Form