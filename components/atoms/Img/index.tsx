import React from "react";
import Image from "next/image";
import { ImageContainer } from "./style";

export interface ImgProps {
  testId?: string;
  className?: string;
  src: string;
  alt?: string;
  size?: string;
  width?: string;
  height?: string;
  radius?: string;
}

export const Img: React.FC<ImgProps> = ({
  testId,
  className,
  src,
  alt,
  size,
  width,
  height,
  radius,
}): React.ReactElement => {
  return (
    <ImageContainer
      data-testid={testId}
      className={className}
      size={size}
      src={src}
      radius={radius}>
      <Image
        src={src}
        alt={alt}
        width={size ? size : width}
        height={size ? size : height}
        layout="responsive"
      />
    </ImageContainer>
  );
};

Img.defaultProps = {
  testId: 'test-atom-img',
  width: "100%",
  height: "100%",
};
