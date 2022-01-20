import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BrandBox, BrandImgBox, ScrollBox, ScrollContainer } from "./style";

interface IProps {
  data: any;
}
export const ProductCategory: React.FC<IProps> = ({ data }) => {
  return (
    <ScrollBox>
      <ScrollContainer>
        {data.map((brand: any, index: number) => {
          return (
            <BrandBox key={index}>
              <BrandImgBox>
                <Image
                  src="/images/brand_shanel.png"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  priority
                  alt={brand.brand}
                />
              </BrandImgBox>
              <Link href="/">
                <a>{brand.brand}</a>
              </Link>
            </BrandBox>
          );
        })}
      </ScrollContainer>
    </ScrollBox>
  );
};
