import React from "react";

export default function Register(){
    return(
        <>
            <div className="w-full h-screen justify-center items-center bg-[#d4d4d4] text-lg">
                <p className="py-4 px-6 bg-white shadow-md text-xl text-slate-500 mb-4 font-medium">Register Visitors</p>
                <div className="bg-white w-4/5 ml-[52px] p-6 text-slate-500 lg:ml-40 lg:right-10">
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
                        <label htmlFor="purpose">
                            Purpose of Visit
                        </label>
                        <input type="text" id="purpose" className="w-full shadow-lg border-2 border-slate-200 block mb-8 px-4 py-2 rounded-2xl"/>
                        <div className="flex justify-end">
                            <button className="shadow-lg py-3 px-6 rounded-2xl bg-gradient-to-t from-purple-500 to-violet-300 text-white mb-8 w-[108px] hover:ring-2 hover:ring-violet-200 hover:text-lg active:to-blue-200 transition duration-150 ease-in-out">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}