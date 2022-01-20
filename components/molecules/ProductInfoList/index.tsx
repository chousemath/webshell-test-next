import {
  Container,
  CardContainer,
  CardGrid,
  ImgContainer,
  Title,
  Desc,
} from "./style";

export interface IProductInfoProps {
  datas: Array<IProductInfo>;
}
export interface IProductInfo {
  title?: string;
  desc?: string;
}

export const ProductInfoList: React.FC<IProductInfoProps> = ({ datas }) => {
  return (
    <Container>
      <CardContainer>
        {datas.map((data, index) => {
          return (
            <CardGrid key={index}>
              <ImgContainer>
                <Title>{data.title}</Title>
                <Desc>{data.desc}</Desc>
              </ImgContainer>
            </CardGrid>
          );
        })}
      </CardContainer>
    </Container>
  );
};
