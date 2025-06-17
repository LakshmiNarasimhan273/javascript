import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Hero() {
    return (
        <div className='flex justify-center items-center bg-gray-100'>
            <div className='w-full mx-w-2xl shadow-lg overflow-hidden'>
                <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                className='rounded-lg'
                >
                    <div>
                        <img src="https://i.pinimg.com/736x/d2/ca/11/d2ca119bc2804c1f665c1a2049dce134.jpg" alt="" />
                        
                    </div>

                    <div>
                        <img src="https://i.pinimg.com/736x/cd/82/f7/cd82f7a9563ef5865fdfa477aa4fda85.jpg" alt="" />
                        
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Hero