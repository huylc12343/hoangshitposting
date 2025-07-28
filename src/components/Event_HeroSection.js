import React from 'react';
import event_bg from '../assets/event_bg_min.jpg';
import Ticket_Selection from './Ticket_Selection';
import Event_HeroSection2 from './Event_HeroSection2';
import Event_HeroSection3 from './Event_HeroSection3';
import Event_HeroSection4 from './Event_HeroSection4';
export default function Event_HeroSection() {
return (
    <section
    className="relative w-full pt-[100px] pb-20 text-white px-4 md:px-8 lg:px-12 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${event_bg})` }}
    >
    {/* Overlay */}
    <div
        className="absolute inset-0 z-0"
        style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,1))',
        }}
    ></div>

    {/* Content */}
    <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-12 mt-12">
        <div className="col-span-1"></div>

        <div className="col-span-10 text-left">
        <h1 className="text-5xl md:text-5xl font-bold font-imbue mb-4 whitespace-normal md:whitespace-nowrap">
        COVER SHOW "CÓ CẦN PHẢI CÓ LÝ KHÔNG?"
        </h1>


        <p className="text-base md:text-lg text-gray-200 mb-6">
            13/09/2025 - TP.HCM
        </p>

        {/* Ticket Section hiển thị bên dưới */}
        <Ticket_Selection/>
        <div className="mt-40">
        <Event_HeroSection2 />
        </div>
        <div className="mt-10">
        <Event_HeroSection3/>
        </div>
        <div className="mt-10">
        <Event_HeroSection4/>
        </div>
        </div>

        <div className="col-span-1"></div>
    </div>
    </section>
);
}
