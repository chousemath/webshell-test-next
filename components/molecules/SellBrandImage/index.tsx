import styled from "@emotion/styled";
import Image from "next/image";

interface ISellBrandImageProps {
  brandName: string;
  brandImage: string;
}
export const SellBrandImage: React.FC<ISellBrandImageProps> = ({
  brandName,
  brandImage,
}) => {
  return (
    <ImageBox>
      <Image
        src={brandImage}
        alt={brandName}
        width="100%"
        height="28px"
        layout="responsive"
        priority
      />
    </ImageBox>
  );
};

const ImageBox = styled.div`
  width: 100%;
  height: 120px;
  margin-bottom: 13px;
`;
