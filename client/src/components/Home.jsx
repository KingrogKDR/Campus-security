import React from "react";
import qr from "../assets/qr.svg"
export default function Home(){
    return(
        <>
            <div className="w-full h-screen inset-0">
                <div className="w-full h-2/5 lg:h-4/5 bg-no-repeat bg-cover mb-5" style={{backgroundImage:`url("download.webp")`}}>
                    <div className="w-full h-full text-center backdrop-blur-[6px] pt-20 lg:pt-52">
                        <h1 className=" text-3xl lg:text-[72px] font-extrabold">Want to Visit NIT Silchar</h1> 
                        <p className="mt-12 text-lg lg:text-3xl font-semibold lg:mt-24">Get your personalized id card for your visits</p>
                        <p className="mt-14 lg:mt-40 text-xs lg:text-xl">Scroll to learn more</p>
                    </div>
                </div>
                <div className="w-full h-3/5 lg:h-full bg-purple-100">
                    <p className="text-center py-10 font-bold text-3xl lg:text-[48px] text-slate-700">Steps to follow</p>
                    <div className="w-full flex justify-center items-center gap-6 lg:gap-56">
                        <div className="w-2/5 space-y-2 text-sm lg:text-xl ml-2 lg:ml-20">
                            <div className="mt-7">
                               <span><span className="mr-2 bg-white rounded-full px-2">1</span>Register at the Gate of the University</span>
                            </div>
                            <div className="space-y-2 pt-6">
                                <span><span className="mr-2 bg-white rounded-full px-2">2</span>Get your personalised temporary ID card through login in the website or at your provided email id</span>
                            </div>
                        </div>
                        <div className="w-1/5 grid justify-center mt-4">
                            <img src={qr} alt="qr-code" className="z-10 inset-0 shadow-lg rounded-xl"/>
                            <div className="bg-gray-500/85 p-2 rounded-full blur-md z-2 inset-0 w-20 lg:w-44"></div>
                        </div>
                        <div className="w-2/5 space-y-2 text-sm lg:text-xl ml-2 lg:mr-20">
                            <div className="">
                                <span><span className="mr-2 bg-white rounded-full px-2">3</span>Scan your id at the places you want to visit</span>
                            </div>
                            <div className="space-y-2 pt-6">
                                <span><span className="mr-2 bg-white rounded-full px-2">4</span>Enjoy your visit at NIT Silchar</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}