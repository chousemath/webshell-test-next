import React from "react";
import { Text } from "../../atoms";
export const Copyright: React.FC = () => {
  return (
    <Text
      padding="50px"
      fs="1.2rem"
      textAlign="center"
      color="rgba(34, 34, 34, 0.3)"
    >
      © 2021 KREAM.Corp.
    </Text>
  );
};
