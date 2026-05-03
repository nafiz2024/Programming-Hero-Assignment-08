"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiBookOpen, FiPlayCircle, FiUsers } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import bannerSlideOne from "@/assets/banner-slide-1.png";
import bannerSlideTwo from "@/assets/banner-slide-2.png";
import bannerSlideThree from "@/assets/banner-slide-3.png";

const bannerImages = {
    bannerSlideOne,
    bannerSlideTwo,
    bannerSlideThree,
};

const bannerIcons = {
    "<FiUsers />": <FiUsers />,
    "<FiBookOpen />": <FiBookOpen />,
    "<FiPlayCircle />": <FiPlayCircle />,
};

const Banner = ({ bannerData }) => {

    return (
        <section className="px-4 pb-8 pt-3 sm:px-6 lg:px-0">
            <Swiper
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="banner-swiper overflow-hidden rounded-[2rem]"
            >
                {bannerData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-white via-[#f7f8ff] to-[#eef1ff] px-6 py-10 sm:px-10 lg:px-16 lg:py-14">
                            <div className="absolute -left-16 top-10 h-40 w-40 rounded-full bg-[#6852ff]/10 blur-3xl"></div>
                            <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-[#4f8cff]/10 blur-3xl"></div>

                            <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.05fr_.95fr]">
                                <div className="text-left">
                                    <div className="inline-flex items-center gap-3 rounded-full bg-[#eef0ff] px-4 py-3 text-sm font-semibold text-[#2b43f4] shadow-sm">
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#dfe4ff]">
                                            <FiBookOpen />
                                        </span>
                                        {slide.badge}
                                    </div>

                                    <h1 className="mt-6 min-h-[150px] max-w-xl text-4xl font-black leading-tight text-[#07143a] sm:min-h-[190px] sm:text-5xl lg:min-h-[230px] lg:text-6xl">
                                        {slide.title}
                                    </h1>

                                    <div className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-[#7a37ff] to-[#3457ff]"></div>

                                    <p className="mt-8 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                                        {slide.description}
                                    </p>

                                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                        <Link
                                            href={slide.primaryLink}
                                            className="btn h-auto rounded-2xl border-0 bg-gradient-to-r from-[#2a2ef7] to-[#5b3fff] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#4b49ff]/30 hover:from-[#1e24d8] hover:to-[#4b33f1]"
                                        >
                                            {slide.primaryText}
                                            <FiArrowRight className="text-lg" />
                                        </Link>

                                        <Link
                                            href={slide.secondaryLink}
                                            className="btn h-auto rounded-2xl border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-800 shadow-sm hover:bg-slate-50"
                                        >
                                            <FiPlayCircle className="text-lg text-[#0d1d56]" />
                                            {slide.secondaryText}
                                        </Link>
                                    </div>

                                    <div className="mt-10 grid gap-4 rounded-[2rem] border border-[#dde3ff] bg-white/80 p-5 shadow-lg shadow-[#dfe3ff]/60 sm:grid-cols-3">
                                        {slide.stats.map((stat) => (
                                            <div key={stat.id} className="flex items-center gap-4 border-b border-slate-100 pb-4 last:border-b-0 last:pb-0 sm:block sm:border-b-0 sm:border-r sm:pb-0 sm:last:border-r-0 sm:pr-4">
                                                <div className={`mb-0 flex h-11 w-11 items-center justify-center rounded-full bg-slate-50 text-xl ${stat.color} sm:mb-3`}>
                                                    {bannerIcons[stat.icon]}
                                                </div>
                                                <h3 className="text-3xl font-black text-slate-900">{stat.value}</h3>
                                                <p className="mt-1 text-sm font-medium text-slate-600">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="relative lg:px-4">
                                    <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] bg-[#f4f5ff] p-3 shadow-2xl shadow-[#d8deff]/70 sm:min-h-[430px] lg:min-h-[560px]">
                                        <Image
                                            src={bannerImages[slide.image]}
                                            alt={slide.title}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            className="rounded-[1.6rem] object-fill object-center"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Banner;
