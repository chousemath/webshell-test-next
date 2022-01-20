import React from "react";
import Image from "next/image";
import { UserImgGrid } from "./style";
import { IUserImg } from "../../../interfaces/IUser";
import { Text } from "../../atoms";

export const UserProfile: React.FC<IUserImg> = ({
  className,
  src,
  width,
  height,
  userName,
}) => {
  return (
    <div>
      <UserImgGrid className={className} width={width} height={height}>
        <Image
          src={src}
          width={width}
          height={height}
          alt=""
          layout="responsive"
          priority
        />
      </UserImgGrid>
      <Text margin="10px 0 0 0" fs="1.4rem">
        {userName}
      </Text>
    </div>
  );
};
