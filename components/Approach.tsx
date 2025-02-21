'use client'
import Image from 'next/image'
import React from 'react'
import discovery from "../assets/approach/discovery.svg"
import design from "../assets/approach/design.svg"
import delivery from "../assets/approach/delivery.svg"
import top_bg from "../assets/approach/wave2.svg"
import bottom_bg from "../assets/approach/wave.svg"
import {motion} from "framer-motion"
import { fadeIn } from '@/app/varients'

const Approach = () => {
    const contents = [
        {
            image: discovery,
            title: "Discovery and Understanding",
            description: "We dive deep into your goals to craft precise, tailored solutions that meet your needs"
        },
        {
            image: design,
            title: "Design and Development",
            description: "We work closely with you, refining solutions and keeping you engaged at every stage"
        },
        {
            image: delivery,
            title: "Delivery and Ongoing Support",
            description: "We ensure seamless delivery and ongoing support for solutions that deliver long-term value"
        }
    ]

  return (
    <div className='overflow-hidden'>
        <motion.div 
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: true}}
            className='relative w-full pt-[86px] lg:pt-[100px]'>    
            <div className='absolute top-0 w-full'>
                <Image src={bottom_bg} alt='bottom bg' className='w-full h-full z-10'/>
            </div>
            <div className='absolute top-5 w-full'>
                <Image src={top_bg} alt='top bg' className='w-full h-full z-20'/>
            </div>
            <div className='bg-[#000B33] xl:bg-transparent'>
                <div className='relative max-w-[1280px] mx-auto px-5 pb-20 flex flex-col gap-10 overflow-hidden lg:gap-20 2xl:px-0'>
                    <h2 className='text-[#F0F7FF] text-[24px] font-bold leading-[28.8px] -tracking-[0.48px] lg:text-[40px] lg:leading-[54px] lg:-tracking-[0.8px]'>
                        Our Approach: Collaborative, Transparent, and Focused
                    </h2>
                    <div className='flex flex-col gap-6 lg:flex-row 2xl:gap-20'>
                        {
                            contents.map((content, index)=>(
                                <div key={index} className='flex flex-col gap-5'>
                                    <Image src={content?.image} alt='discovery'/>
                                    <h4 className='text-[#F0F7FF] text-2xl font-bold leading-[54px] -tracking-[0.48px]'>
                                        {content?.title}
                                    </h4>
                                    <p className='text-[#B2D6FF] text-base font-normal leading-[21.6px] -tracking-[0.32px]'>
                                        {content?.description}
                                    </p>
                                </div>
                            ))
                        }
                        
                    </div>
                </div>
            </div>
        </motion.div>
      
    </div>
  )
}

export default Approach
