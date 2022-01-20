import React from "react";
import { IProductCard } from "../../../interfaces/ICard";
import { ImgContainer, Icon } from "./style";
import Image from "next/image";

export const ProductCard: React.FC<IProductCard> = ({
  className,
  url,
  title,
  express_mark = false,
}) => {
  return (
    <>
      <ImgContainer className={className}>
        {url && <Image src={url} alt={title} layout="fill" priority />}
        {express_mark && (
          <Icon>
            <Image
              src="/images/iconHeartOutline.png"
              width={20}
              height={20}
              alt="icon"
            />
          </Icon>
        )}
      </ImgContainer>
    </>
  );
};
