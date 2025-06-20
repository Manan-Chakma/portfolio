"use client";
import React from 'react';
import { TextGenerateEffect } from '../ui/text-generate-effect';

function Hero() {
    return (
        <div className='pb-20 pt-36'>
            <div className="flex justify-center">
                <div className="max-w-[89vw]">
                    <h2 className="tracking-widest text-xl text-center">
                        Welcome to My Portfolio
                        
                    </h2>
                    <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl"
                            words={"Hi, I'm Manan, a Next.js developer based in Perth"} />
                </div>
            </div>
        </div>
    )
}


export default Hero