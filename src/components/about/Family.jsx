import React from "react";
const Family = ()=>{
    return(
        <div className="min-h-screen bg-[#FFFAF7] font-Manrope mt-14 py-10  lg:mt-28 lg:py-20">
          <div className="w-[90%] space-y-10 md:space-y-10  m-auto">
           <div className="space-y-6 flex flex-col md:flex-row rounded-xl shaddow gap-10 bg-white justify-center p-6 lg:p-10">
            <div className="flex order-2 md:order-1 flex-col gap-4 lg:gap-8">
                 <h1 className="text-4xl hover:text-[#ff5142] duration-200  font-bold">Family Issues</h1>
                 <p className="text-[#737886] text-lg">Mental health is not a goal, but a process. It’s about how drive, not where you go. Here i come with several services to help you understand how to drive well.</p>
                 <button className=' mt-10 w-fit  rounded-full  z-50 hover:text-white   duration-200 border border-[#FF5142] hover:bg-[#FF5142] text-md  md:text-lg py-4 px-5  md:px-8'>Learn More</button>
            </div>
              <div className="order-1 md:order-2">
              <img className="rounded-xl" src="https://assets.website-files.com/6399ec1645e218589086c9c0/63a22c9c41bfdb7073358007_pexels-ketut-subiyanto-4308057.jpg" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 86vw, (max-width: 991px) 89vw, (max-width: 1279px) 43vw, 514.09375px" />
              </div>
           </div>
           <div className="flex h-full flex-col md:flex-row  gap-10    ">
            <div className="flex order-2 w-full flex-1  bg-white rounded-xl shaddow p-7 lg:p-10 md:order-1 flex-col gap-4 lg:gap-4">
                 <h1 className="text-4xl  hover:text-[#ff5142] duration-200 font-bold">Self-Esteem Issues</h1>
                 <p className="text-[#737886] text-lg">Mental health is not a goal, but a process. It’s about how drive, not where you go. Here i come with several services to help you understand how to drive well.</p>
                 <button className=' mt-10 w-fit  rounded-full  z-50 hover:text-white   duration-200 border border-[#FF5142] hover:bg-[#FF5142] text-md  md:text-lg py-4 px-5  md:px-8'>Learn More</button>
            </div>
            <div className="flex order-2 flex-1 bg-white rounded-xl shaddow p-7 lg:p-10 md:order-1 flex-col gap-4 lg:gap-4">
                 <h1 className="text-4xl  hover:text-[#ff5142] duration-200 font-bold">Post-Traumatic Stress Disorders</h1>
                 <p className="text-[#737886] text-lg">Mental health is not a goal, but a process. It’s about how drive, not where you go. Here i come with several services to help you understand how to drive well.</p>
                 <button className=' mt-10 w-fit  rounded-full  z-50 hover:text-white   duration-200 border border-[#FF5142] hover:bg-[#FF5142] text-md  md:text-lg py-4 px-5  md:px-8'>Learn More</button>
            </div>
           </div>
          </div>
        </div>
    )
}


export default Family