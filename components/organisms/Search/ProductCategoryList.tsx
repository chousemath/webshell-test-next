import React, { useState } from "react";
import { css } from "@emotion/react";
import { Row, Text } from "../../atoms";
import Image from "next/image";

const genderStyle = css`
  .on {
    color: #000;
    border-bottom: 1px solid #000;
  }
`;

interface categoryListProps {
  items: string[];
}

export const ProductCategoryList: React.FC<categoryListProps> = ({ items }) => {
  const genderList: string[] = ["WOMEN", "MEN", "KIDS"];
  const [genderFocus, setGenderFocus] = useState(0);
  const handleFocus = (index: number) => {
    setGenderFocus(index);
  };

  return (
    <>
      <Row padding={"0 10px 10px 10px"} css={genderStyle}>
        {genderList.map((gender, index) => (
          <React.Fragment key={`gender-id-${gender}`}>
            <Text
              color={"#ccc"}
              fs={"1.8rem"}
              fw={"800"}
              margin={"0 24px 0 0 "}
              className={genderFocus === index ? "on" : ""}
              _onClick={() => handleFocus(index)}
            >
              {gender}
            </Text>
          </React.Fragment>
        ))}
      </Row>
      {items.map((item) => (
        <React.Fragment key={`category-id-${item}`}>
          <Row justifyContent="space-between" padding={"10px 20px"}>
            <Text fs={"1.4rem"}>{item} </Text>
            <Image
              src="/images/arrow/icon-next.svg"
              width="16"
              height="16"
              alt="next"
            />
          </Row>
        </React.Fragment>
      ))}
    </>
  );
};
