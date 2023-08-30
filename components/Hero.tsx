"use client";

import { useRef } from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
    const handleScroll = () => {
        const scrollSection = document.getElementById('discover');

        scrollSection?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className="hero">
            <div className='flex-1 pt-36 padding-x'>
                <h1 className="hero__title">
                    Найди, забронируй или купи машину - быстро и просто!
                </h1>

                <p className="hero__subtitle">
                    Упростите свой процесс аренды автомобиля с помощью нашего простого и доступного сервиса
                </p>

                <CustomButton
                    title="Начать смотреть"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>

            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero.png" alt='hero' fill className='object-contain' />
                </div>
                <div className='hero__image-overlay' />
            </div>
        </div>
    )
}

export default Hero