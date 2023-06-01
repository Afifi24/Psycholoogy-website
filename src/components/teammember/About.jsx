import React from "react";
import {motion} from 'framer-motion'
import {fade} from '../../Animation'
const About = ()=>{
    return(
        <div className="min-h-screen relative font-Manrope lg:mb-32 " >
               <img className="absolute  left-0 top-[15%]" src="https://assets.website-files.com/6399ec1545e218ece386c9b6/63a0d6090c9cb441543b35e6_Vector%2023g.svg" alt="" />
            <div className="w-[90%] relative  m-auto">
                 <div className="flex flex-col gap-6  lg:flex-row items-start">
                    <div className="flex-1">
                        <img className="rounded-xl" src="https://assets.website-files.com/6399ec1645e218589086c9c0/63a0b54523087752b5681c4f_maria-lupan-fE5IaNta2KM-unsplash.jpg" alt="" />
                    </div>
                    <div className="flex flex-1 flex-col gap-3">
                      <h1 className="text-4xl mb-6 font-bold">About</h1>
                      <p className="text-[#737886] text-lg">Practice experience - 18+ years. </p>
                      <p className="text-[#737886] text-lg">Psychologist, certified psychotherapist, accredited trauma therapist, certified cognitive-behavioral consultant.</p>
                      <p className="text-lg text-[#737886]">Specializes in individual counseling and psychotherapy for adults.</p>
                      <button className='   rounded-full mt-10  z-50 hover:text-white   duration-200 border border-[#FF5142] hover:bg-[#FF5142] text-md md:text-lg py-2 md:py-4 px-5 w-fit  md:px-8'>Book a consultation</button>
                    </div>
                 
                 </div>
                 <div className="shaddow p-4 lg:p-10 mt-20 rounded-xl">
                   <div className="space-y-2">
                    <p className="text-lg text-[#737886]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae consectetur lectus, sed rhoncus urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean mollis ultrices lacinia. Nulla nunc elit, vulputate quis est vel, pretium pharetra velit. Etiam vel sollicitudin neque. Fusce nec neque aliquam, tincidunt metus quis, laoreet justo. Donec nisl tortor, blandit sed ultricies sed, congue viverra elit. Vivamus at consequat neque. Etiam semper dictum dui, eu scelerisque nibh luctus ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis aliquam felis.</p>
                    <p className="text-lg text-[#737886] ">Fusce sed dictum nunc. Suspendisse sed condimentum ante. Vivamus porttitor, ante a congue tempor, libero massa pulvinar quam, sed suscipit sem augue a turpis. Phasellus ut mollis felis, quis volutpat dui. Nulla quis luctus ante. Phasellus non erat a felis fringilla ullamcorper. Aliquam condimentum nisi ut fermentum placerat. Aliquam erat volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse vitae dapibus dolor. Maecenas in porta ligula. Duis non rhoncus ex. Mauris fermentum augue a faucibus ornare. Sed congue maximus ipsum in dapibus.</p>
                   </div>
                   <div className="mt-10">
                     <h1 className="font-bold text-4xl">Problems with wich a psychologist works :</h1>
                     <div className="mt-6 lg:pl-4 space-y-3">
                        <li className="text-lg " ><p className="text-[#737886]">Personal development and interpersonal relationships;</p></li>
                        <li className="text-lg " ><p className="text-[#737886]">Help with depression and anxiety disorders (panic attacks, increased anxiety and phobias);</p></li>
                        <li className="text-lg " ><p className="text-[#737886]">Treatment of obsessive-compulsive disorders (obsessive thoughts and behavior);</p></li>
                        <li className="text-lg " ><p className="text-[#737886]">Psychotherapeutic help with losses, crisis situations, insecurity, low self-esteem and complexes;</p></li>
                        <li className="text-lg " ><p className="text-[#737886]">Treatment of eating disorders, in particular compulsive overeating;</p></li>
                        <li className="text-lg " ><p className="text-[#737886]">Help with post-traumatic stress disorders (ptsd);</p></li>
                        <li className="text-lg " ><p className="text-[#737886]">Processing of a psychotraumatic experience that negatively affects the quality of current life;</p></li>
                        <li className="text-lg " ><p className="text-[#737886]">Development of dysfunctional patterns and behavior scenarios;</p></li>
                        <li className="text-lg " ><p className="text-[#737886]">Relationship work.</p></li>
                       
                     </div>
                   </div>
                 </div>

                 <div className="flex  flex-col lg:flex-row mt-28 items-center gap-10">
                      <motion.div variants={fade} initial='hidden' whileInView={'show'} className="flex-1 "> 
                        <img className=" rounded-xl object-cover " src="https://assets.website-files.com/6399ec1645e218589086c9c0/63a0c709c43de80a3a8e0be7_pexels-yan-krukov-8837166.jpg" alt="" />
                      
                      </motion.div>
                     <motion.div variants={fade} initial='hidden' whileInView={'show'} className="flex-1  ">
                      <img className=" rounded-xl object-cover " src="https://assets.website-files.com/6399ec1545e218ece386c9b6/63a1e45ab4ace124e6c03eae_pexels-pavel-danilyuk-6712704.webp" alt="" />
                      
                      </motion.div>
                 </div>
            </div>
        </div>
    )
}

export default About