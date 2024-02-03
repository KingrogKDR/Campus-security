import React, { useState } from "react";

export default function Register(){
    const [name,setName]= useState("")
    const [aadhar_number,setAadharNumber]= useState("")
    const [dob,setDob]= useState("")
    
    const [phoneno,setPhoneno]= useState("")
    const [emailid,setEmailId]= useState("")
    const handleSubmitRegister = async (e) => {
        e.preventDefault()

        const response = await fetch("http://localhost:5001/register", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                name,
                aadhar_number,
                dob,
                emailid,
                phoneno
            }),
        })
        if(response.ok){
            alert("Registered successfully")
        }
        else{
            alert("Registration failed")
        }
    }
    return(
        <>
            <div className="w-full flex justify-end">
                <div className="w-full h-screen flex justify-end items-end bg-[#d4d4d4] text-lg">
                    <div className="bg-[#d4d4d4] w-4/5 p-6 text-slate-500">
                        <form onSubmit={handleSubmitRegister}>
                            <label htmlFor="fullname">
                                Full Name
                            </label>
                            <input type="text" id="fullname"value={name} onChange={(e)=>setName(e.target.value)} className="w-full shadow-lg border-2 border-slate-200 block mb-8 px-4 py-2 rounded-2xl"/>
                            <label htmlFor="phone-number">
                                Phone Number
                            </label>
                            <input type="tel" value={phoneno} onChange={(e)=>setPhoneno(e.target.value)} id="phone-number" className="w-full shadow-lg border-2 border-slate-200 block mb-8 px-4 py-2 rounded-2xl"/>
                            <label htmlFor="aadhar">
                                Aadhar No.
                            </label>
                            <input type="tel" value={aadhar_number} onChange={(e)=>setAadharNumber(e.target.value)} id="aadhar" className="w-full shadow-lg border-2 border-slate-200 block mb-8 px-4 py-2 rounded-2xl"/>
                            <label htmlFor="emailid">
                                Email Id
                            </label>
                            <input type="text" id="emailid" value={emailid} onChange={(e)=>setEmailId(e.target.value)} className="w-full shadow-lg border-2 border-slate-200 block mb-8 px-4 py-2 rounded-2xl"/>
                            <label htmlFor="dob">
                                Date of Birth
                            </label>
                            <input type="date" id="dob" value={dob} onChange={(e)=>setDob(e.target.value)} className="w-full shadow-lg border-2 border-slate-200 block mb-8 px-4 py-2 rounded-2xl"/>
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