import React from "react";
import qr from "../assets/qr.svg"
export default function Home(){
    return(
        <>
            <section className="bg-purple-50 border-t-[1px] border-gray-500">
                <div className="w-full h-screen md:h-fit">
                    <div className="w-full h-2/5 lg:h-4/5 bg-no-repeat bg-cover mb-1" style={{backgroundImage:`url("download.webp")`}}>
                        <div className="w-full h-full text-center backdrop-blur-[6px] lg:backdrop-blur-md pt-20 lg:pt-52">
                            <h1 className=" text-3xl lg:text-[72px] font-extrabold">Want to Visit NIT Silchar?</h1> 
                            <p className="mt-12 text-lg lg:text-3xl font-semibold lg:mt-24">Get personalized ID card for your visit.</p>
                            <p className="mt-14 lg:mt-32 text-xs lg:text-xl lg:pb-14">Scroll to learn more</p>
                        </div>
                    </div>
                    <div className="w-full h-3/5 lg:h-full bg-purple-100">
                        <p className="text-center pt-8 pb-6 font-bold text-3xl lg:text-[48px] text-slate-700">Steps to follow:</p>
                        <div className="w-full flex justify-center items-center gap-6 lg:gap-56 pb-8">
                            <div className="w-1/5 lg:w-2/5 space-y-2 text-sm lg:text-xl ml-2 lg:ml-20">
                                <div className="mt-7">
                                <span><span className="mr-2 bg-white rounded-full px-2">1</span>Register at the Gate of the University.</span>
                                </div>
                                <div className="space-y-2 pt-6">
                                    <span><span className="mr-2 bg-white rounded-full px-2">2</span>Get your personalised temporary ID card by logging in the website.</span>
                                </div>
                            </div>
                            <div className="w-2/5 lg:w-1/5 grid justify-center mt-4 pb-8">
                                <img src={qr} alt="qr-code" className="z-10 inset-0 shadow-lg rounded-xl size-full"/>
                                <div className="bg-gray-500/85 p-2 rounded-full blur-md z-2 inset-0 w-44"></div>
                            </div>
                            <div className="w-1/5 lg:w-2/5 space-y-2 text-sm lg:text-xl ml-2 lg:mr-20">
                                <div className="pb-8">
                                    <span><span className="mr-2 bg-white rounded-full px-2">3</span>Scan your ID at the places you want to visit.</span>
                                </div>
                                <div className="space-y-2 pt-6">
                                    <span><span className="mr-2 bg-white rounded-full px-2">4</span>Enjoy your visit at NIT Silchar!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}