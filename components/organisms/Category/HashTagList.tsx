import React from "react";
import { HashTagContainer, HashTag } from "./style";

interface HashTagProps {
  items: string[];
}

export const HashTagList: React.FC<HashTagProps> = ({ items }) => {
  return (
    <HashTagContainer>
      {items.map((item, index) => (
        <React.Fragment key={`hashTag-id-${index}`}>
          <HashTag>{item}</HashTag>
        </React.Fragment>
      ))}
    </HashTagContainer>
  );
};
