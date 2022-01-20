import styled from "@emotion/styled";
import Image from "next/image";

export const HeartScore: React.FC<number | any> = ({ userScore }) => {
  const arrForMap = Array.from({ length: 5 }, (value, index) => {
    return userScore > index ? true : false;
  });

  return (
    <Container>
      {arrForMap.map((value, index) => {
        return (
          <ImageBox key={`${value}-${index}-${index * userScore}`}>
            <Image
              src={
                value
                  ? "/images/iconHeartFilled.png"
                  : "/images/iconHeartOutline.png"
              }
              width="20px"
              height="20px"
              objectFit="cover"
              alt="right-icon"
              priority
            />
          </ImageBox>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
const ImageBox = styled.div`
  margin-right: 5px;
`;
