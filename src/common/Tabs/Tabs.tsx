"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import useTage from '@/hooks/useTage';

interface Tab {
    Id: number;
    Title: string;
}

interface TabsProps {
    onTabClick: (id: number) => void;
    activeTabId: number;
}

const Tabs: React.FC<TabsProps> = ({ onTabClick, activeTabId }) => {
    const { data } = useTage();

    return (
        <Swiper freeMode={true}
            className="category-swiper"
            modules={[Navigation]}
            spaceBetween={10}
            navigation
            breakpoints={{
                320: {
                    slidesPerView: 2
                },
                420: {
                    slidesPerView: 2.5
                },
                520: {
                    slidesPerView: 2.9
                },
                620: {
                    slidesPerView: 3.5
                },
                720: {
                    slidesPerView: 3.9
                },
                820: {
                    slidesPerView: 4.5
                },
                920: {
                    slidesPerView: 4.9
                },
                1350: {
                    slidesPerView: 5.5
                },
                1550: {
                    slidesPerView: 6
                },
            }
            }
            onSlideChange={(swiper) => onTabClick(swiper.activeIndex)}>
            {data?.map((data: Tab) => (
                <SwiperSlide key={data.Id} className={`${activeTabId === data.Id && 'active-tab'}`} onClick={() => onTabClick(data.Id)}>
                    {data.Title}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Tabs;
