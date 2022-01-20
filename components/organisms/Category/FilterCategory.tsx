import Link from "next/link";
import React from "react";
import { ScrollBox, ScrollContainer, QuickFilterBox } from "./style";

interface IProps {
  data: any;
}
export const FilterCategory: React.FC<IProps> = ({ data }) => {
  return (
    <ScrollBox>
      <ScrollContainer>
        {data.map((quick: any, index: number) => {
          return (
            <QuickFilterBox key={index}>
              <Link href="/product_list">
                <a>{quick.title}</a>
              </Link>
            </QuickFilterBox>
          );
        })}
      </ScrollContainer>
    </ScrollBox>
  );
};
