import styled from "@emotion/styled";
import { ImgProps } from "./index";

export const ImageContainer = styled.div<ImgProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: ${({ radius }) => radius};

  span {
    border-radius: ${({ radius }) => radius};
  }
  &.user-img img {
    border-radius: 50%;
  }
`;
