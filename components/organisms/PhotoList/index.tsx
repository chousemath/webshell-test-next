import styled from "@emotion/styled";
import Image from "next/image";
import { IPhotoList } from "../../../interfaces/IElements";

interface IPhotoListProps {
  datas: Array<IPhotoList>;
}
export const PhotoList: React.FC<IPhotoListProps> = ({ datas }) => {
  return (
    <Container>
      {datas.map((item: any, index: number) => {
        return (
          <ImageContainer key={index}>
            {item.url && (
              <Image
                src={item.url}
                layout="responsive"
                width="100%"
                height="100%"
                alt="example"
                objectFit="cover"
              />
            )}
          </ImageContainer>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  height: 252.656px;
`;

const ImageContainer = styled.div`
  width: 32.5%;
  height: 55%;
`;
