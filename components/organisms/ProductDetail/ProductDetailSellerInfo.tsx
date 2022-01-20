import Link from "next/link";
import Image from "next/image";

import styled from "@emotion/styled";
import { ITheme } from "../../../interfaces/ITheme";

import { IProductDetailSellerData } from "../../../interfaces/IElements";
import { FollowButton, HeartScore } from "../../molecules";

export const ProductDetailSellerInfo: React.FC<IProductDetailSellerData> = ({
  userId,
  userName,
  userScore,
  userImage,
}) => {
  return (
    <Container>
      <div>
        <Image
          width="70px"
          height="70px"
          src={userImage}
          alt=""
          layout="responsive"
          priority
        />
      </div>
      <SellerInfoBox>
        <div>
          <Link href="/my" passHref>
            <UserName>
              {userName}
              <Image
                src={"/images/next-icon.png"}
                width="13px"
                height="13px"
                objectFit="cover"
                alt="right-icon"
                priority
              />
            </UserName>
          </Link>
          <FollowButton />
        </div>
        <div>
          <P>PAP 지수</P>
          <HeartScore userScore={userScore} />
        </div>
      </SellerInfoBox>
    </Container>
  );
};

const Container = styled.div`
  border-top: 4px solid rgb(236, 236, 236);
  border-bottom: 4px solid rgb(236, 236, 236);
  min-height: 100px;
  width: 100%;
  padding: 5px 0;
  display: flex;
  align-items: center;

  & > div:nth-of-type(1) {
    width: 70px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 15px;
  }
`;

const SellerInfoBox = styled.div`
  width: calc(100% - 85px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div:nth-of-type(1) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    width: 50%;
    min-height: 40px;
  }

  & > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    min-height: 40px;
  }
`;

const UserName = styled.a<ITheme>`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const P = styled.p<ITheme>`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;
