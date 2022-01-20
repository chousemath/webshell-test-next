import React, { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { SwiperContainer, ImageContainer } from "./style";

import SwiperCore, { Autoplay, Scrollbar } from "swiper";
import "swiper/css/scrollbar";

/** SwiperCore 사용 */
SwiperCore.use([Autoplay, Scrollbar]);

export const SwiperLB: React.FC<ReactNode> = () => {
  const images = [
    {
      id: 1,
      url: "/images/slide01.jpeg",
    },
    {
      id: 2,
      url: "/images/slide02.png",
    },
    {
      id: 3,
      url: "/images/slide03.png",
    },
    {
      id: 4,
      url: "/images/slide04.png",
    },
  ];
  const setting = {
    autoplay: {
      delay: 4000,
    },
    scrollbar: true,
  };

  return (
    <SwiperContainer>
      <Swiper {...setting}>
        {images.map((img) => {
          return (
            <SwiperSlide key={img.id}>
              <ImageContainer>
                <Image src={img.url} layout="fill" alt="" priority />
              </ImageContainer>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SwiperContainer>
  );
};
