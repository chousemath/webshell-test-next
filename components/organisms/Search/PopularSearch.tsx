import React from "react";
import { Row, Text } from "../../atoms";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";

SwiperCore.use([Scrollbar]);
interface popularSearchProps {
  items: Array<any>;
}

const setting = {
  scrollbar: true,
};

export const PopularSearch: React.FC<popularSearchProps> = ({ items }) => {
  return (
    <Swiper {...setting}>
      {items.map((page, idx) => (
        <SwiperSlide key={`swiper-id-${idx}`}>
          {page.map((item: object, index: number) => (
            <React.Fragment key={`item-id-${index}`}>
              <Row padding={"0 10px"} margin={"0 0 20px 0"}>
                <Text fs={"1.4rem"} fw={"bold"} padding={"0 10px"}>
                  {`${idx * 5 + index + 1}`}
                </Text>
                <Text fs={"1.4rem"}>{item}</Text>
              </Row>
            </React.Fragment>
          ))}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
