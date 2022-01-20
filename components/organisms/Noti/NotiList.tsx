import React from "react";
import Image from "next/image";
import { NotiContainer, NotiWrap, NotiImgWrap, NotiContent } from "./style";

export const NotiList: React.FC<any> = ({ data }) => {
  return (
    <NotiContainer>
      {data.map((noti: any, index: number) => {
        return (
          <NotiWrap key={index}>
            <NotiImgWrap>
              <Image
                src={noti.brandUrl}
                width="100%"
                height="100%"
                layout="responsive"
                alt=""
                priority
              />
            </NotiImgWrap>
            <NotiContent>{noti.content}</NotiContent>
          </NotiWrap>
        );
      })}
    </NotiContainer>
  );
};
