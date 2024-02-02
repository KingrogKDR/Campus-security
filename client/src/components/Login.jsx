import { useState } from "react";
function Login(){
    const [email,setEmail] = useState("")
    const [aadhar_number,setAadharNumber] = useState("")
    const handleSubmitLogin=(e)=>{
        e.preventDefault();
        const res = fetch("http://localhost:5000/login",{
            method:"POST",
            headers:{
                'content-type':'application/json',
            },
            credentials:"include",
            body:JSON.stringify({
                email,
                aadhar_number
            })
        })
        if(res.ok){
            alert("Successfull")
        }
        else{
            alert("Something went wrong")
        }
    }
    return(
        <>
            <div className="w-full h-screen grid grid-rows-[200px_minmax(200px,_1fr)_250px] justify-center items-center">
                <p className="text-center text-4xl text-slate-400 font-semibold">Already a Trusted User,</p>
                <div className="shadow-lg flex items-center justify-center text-gray-500 border-[1px] border-slate-300 rounded-2xl">
                    <form onSubmit={(e)=>{handleSubmitLogin(e)}}>
                        <p className="mb-8 mt-6 font-medium text-xl">LOGIN</p>
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="shadow-lg border-2 border-slate-200 block mb-8 px-4 py-2 rounded-2xl"/>
                        <label htmlFor="aadhar">Aadhar Number</label>
                        <input type="text" id="aadhar" value={aadhar_number} onChange={(e)=>{setAadharNumber(e.target.value)}} className="shadow-lg border-2 border-slate-200 block mb-8 px-4 py-2 rounded-2xl"/>
                        <button className="shadow-lg py-3 px-6 rounded-2xl bg-gradient-to-t from-purple-500 to-violet-300 text-white mb-8 hover:ring-2 hover:ring-violet-200 hover:text-lg active:to-blue-200 transition duration-150 ease-in-out">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login