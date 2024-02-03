import React from "react";
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
                <div className="w-full h-3/5 bg-purple-200">
                    <p className="text-center py-10 font-bold text-3xl lg:text-[48px] text-slate-700">Steps to follow</p>
                    <div className="flex justify-center items-center gap-6 lg:gap-56 mt-6">
                        <div className="space-y-3 text-sm lg:text-xl">
                            <p><span className="mr-2 bg-white rounded-full px-2">1</span>Register at the Gate</p>
                            <p>of the University</p>
                            <div className="space-y-3 pt-12">
                                <p><span className="mr-2 bg-white rounded-full px-2">2</span>Get your personalised</p>
                                <p>temporary id card</p>
                            </div>
                        </div>
                        <div className="">
                            <img alt="qr-code" />
                        </div>
                        <div className="space-y-3 text-sm lg:text-xl">
                            <p className="pt-6"><span className="mr-2 bg-white rounded-full px-2">3</span>Scan your id at the</p>
                            <p>places you want</p>
                            <p> to visit</p>
                            <div className="space-y-3 pt-10">
                                <p><span className="mr-2 bg-white rounded-full px-2">4</span>Enjoy your visit</p>
                                <p>at NIT Silchar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}