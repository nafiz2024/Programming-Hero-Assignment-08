"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiBookOpen, FiPlayCircle, FiUsers } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import bannerSlideOne from "../assets/banner-slide-1.png";
import bannerSlideTwo from "../assets/banner-slide-2.png";
import bannerSlideThree from "../assets/banner-slide-3.png";

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
        <section className="px-3 pb-6 pt-2 sm:px-5 sm:pb-8 sm:pt-3 lg:px-0">
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
                        <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-white via-[#f7f8ff] to-[#eef1ff] px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10 xl:px-16 xl:py-14">
                            <div className="absolute -left-16 top-10 h-32 w-32 rounded-full bg-[#6852ff]/10 blur-3xl sm:h-40 sm:w-40"></div>
                            <div className="absolute bottom-0 right-0 h-36 w-36 rounded-full bg-[#4f8cff]/10 blur-3xl sm:h-48 sm:w-48"></div>

                            <div className="relative z-10 grid items-center gap-6 lg:grid-cols-[minmax(0,1.02fr)_minmax(320px,0.98fr)] lg:gap-8 xl:gap-12">
                                <div className="text-left">
                                    <div className="inline-flex max-w-full items-center gap-3 rounded-full bg-[#eef0ff] px-4 py-2.5 text-xs font-semibold text-[#2b43f4] shadow-sm sm:text-sm">
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#dfe4ff]">
                                            <FiBookOpen />
                                        </span>
                                        <span className="truncate">{slide.badge}</span>
                                    </div>

                                    <h1 className="mt-5 max-w-xl text-3xl font-black leading-[1.05] tracking-tight text-[#07143a] sm:mt-6 sm:text-4xl lg:text-5xl xl:text-6xl">
                                        {slide.title}
                                    </h1>

                                    <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-[#7a37ff] to-[#3457ff] sm:mt-5 sm:w-16"></div>

                                    <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-7 sm:text-base sm:leading-8 lg:text-lg">
                                        {slide.description}
                                    </p>

                                    <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                                        <Link
                                            href={slide.primaryLink}
                                            className="btn h-auto min-h-0 rounded-2xl border-0 bg-gradient-to-r from-[#2a2ef7] to-[#5b3fff] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#4b49ff]/30 hover:from-[#1e24d8] hover:to-[#4b33f1] sm:px-8 sm:py-4 sm:text-base"
                                        >
                                            {slide.primaryText}
                                            <FiArrowRight className="text-lg" />
                                        </Link>

                                        <Link
                                            href={slide.secondaryLink}
                                            className="btn h-auto min-h-0 rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50 sm:px-8 sm:py-4 sm:text-base"
                                        >
                                            <FiPlayCircle className="text-lg text-[#0d1d56]" />
                                            {slide.secondaryText}
                                        </Link>
                                    </div>

                                    <div className="mt-7 grid gap-3 rounded-[1.75rem] border border-[#dde3ff] bg-white/80 p-4 shadow-lg shadow-[#dfe3ff]/60 sm:mt-9 sm:grid-cols-3 sm:gap-4 sm:p-5">
                                        {slide.stats.map((stat) => (
                                            <div key={stat.id} className="flex items-center gap-3 border-b border-slate-100 pb-3 last:border-b-0 last:pb-0 sm:block sm:border-b-0 sm:border-r sm:pb-0 sm:last:border-r-0 sm:pr-4">
                                                <div className={`mb-0 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50 text-lg ${stat.color} sm:mb-3 sm:h-11 sm:w-11 sm:text-xl`}>
                                                    {bannerIcons[stat.icon]}
                                                </div>
                                                <div className="min-w-0">
                                                    <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">{stat.value}</h3>
                                                    <p className="mt-1 text-sm font-medium text-slate-600">{stat.label}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="relative order-first lg:order-none lg:px-2 xl:px-4">
                                    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-[#f4f5ff] p-2.5 shadow-2xl shadow-[#d8deff]/70 sm:aspect-[5/4] sm:p-3 lg:aspect-[4/5] lg:min-h-[520px]">
                                        <Image
                                            src={bannerImages[slide.image]}
                                            alt={slide.title}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 46vw"
                                            className="rounded-[1.4rem] object-cover object-center"
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
