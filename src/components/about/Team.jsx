import React from "react";

const Team = ()=>{
    return(

        <div>
            <div className="w-[90%] font-Manrope space-y-16 min-h-[70vh] m-auto">
                  <h1 className="text-4xl font-bold">Meet Our Team</h1>
                  <div className="grid gap-8  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
                       <div className="relative cursor-pointer rounded-xl overflow-hidden ">
                       <img className="" loading="lazy" src="https://assets.website-files.com/6399ec1645e218589086c9c0/63a0d01e8f6be932fd6e4375_Rectangle%201088.jpg" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 45vw, (max-width: 991px) 46vw, (max-width: 1279px) 22vw, 262.1953125px" />
                       <p className="text-white z-10 left-6 text-xl  absolute bottom-2">Jan Cooper</p>
                        <div className=" transparentbg "/>
                       </div>
                       <div className="relative cursor-pointer rounded-xl overflow-hidden ">
                      <img src=" https://assets.website-files.com/6399ec1645e218589086c9c0/63a48d02308826189f02495e_jordy-s-dtSaSlDob0c-unsplash.jpg" alt="" />
                       <p className="text-white z-10 left-6 text-xl  absolute bottom-2">Guy Hawkins</p>
                        <div className=" transparentbg "/>
                       </div>
                       <div className="relative cursor-pointer rounded-xl overflow-hidden ">
                      <img src=" https://assets.website-files.com/6399ec1645e218589086c9c0/63a48d1f6709523180495bc0_brian-tromp-MxkYQ39KFmE-unsplash.jpg" alt="" />
                       <p className="text-white z-10 left-6 text-xl  absolute bottom-2">Leslie Alexander</p>
                        <div className=" transparentbg "/>
                       </div>
                       <div className="relative  cursor-pointer rounded-xl overflow-hidden ">
                      <img src="https://assets.website-files.com/6399ec1645e218589086c9c0/63a0d046bb01a9a6075f0491_Rectangle%201091.jpg" alt="" />
                       <p className="text-white z-10 left-6 text-xl  absolute bottom-2">Bessie Cooper</p>
                        <div className=" transparentbg "/>
                       </div>
                  </div>
                  
            </div>
        </div>
    )
}

export default Team