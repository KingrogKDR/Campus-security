import React from "react";

export default function Register(){
    return(
        <>
            <div className="flex justify-end">
                <div className="w-full h-screen flex lg:justify-end justify-center items-end bg-[#d4d4d4] text-lg">
                    <div className="bg-[#d4d4d4] w-4/5 p-6 text-slate-500 my-auto lg:mt-20">
                        <form>
                            <label htmlFor="fullname">
                                Full Name
                            </label>
                            <input type="text" id="fullname" className="w-full shadow-lg border-2 border-slate-200 block mb-8 px-4 py-2 rounded-2xl"/>
                            <label htmlFor="phone-number">
                                Phone Number
                            </label>
                            <input type="tel" id="phone-number" className="w-full shadow-lg border-2 border-slate-200 block mb-8 px-4 py-2 rounded-2xl"/>
                            <label htmlFor="aadhar">
                                Aadhar No.
                            </label>
                            <input type="tel" id="aadhar" className="w-full shadow-lg border-2 border-slate-200 block mb-8 px-4 py-2 rounded-2xl"/>
                            <label htmlFor="emailid">
                                Email Id
                            </label>
                            <input type="text" id="emailid" className="w-full shadow-lg border-2 border-slate-200 block mb-8 px-4 py-2 rounded-2xl"/>
                            <label htmlFor="dob">
                                Date of Birth
                            </label>
                            <input type="date" id="dob" className="w-full shadow-lg border-2 border-slate-200 block mb-8 px-4 py-2 rounded-2xl"/>
                            <div className="flex justify-end">
                                <button className="shadow-lg py-3 px-6 rounded-2xl bg-gradient-to-t from-purple-500 to-violet-300 text-white mb-8 w-[108px] hover:ring-2 hover:ring-violet-200 hover:text-lg active:to-blue-200 transition duration-150 ease-in-out">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}