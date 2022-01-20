import React from "react";
import { SellButton } from "../../molecules";
import { ISellButtonProps } from "../../../interfaces/IElements";

export const SellHeader: React.FC<ISellButtonProps> = ({
  children = "Submit an Item",
}) => {
  return (
    <SellButton isLeftBtn type="back">
      {children}
    </SellButton>
  );
};
