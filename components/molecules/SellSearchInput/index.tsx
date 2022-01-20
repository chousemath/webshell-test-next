import styled from "@emotion/styled";
import { ITheme } from "../../../interfaces/ITheme";
import Image from "next/image";

interface SellSearchInputProps {
  placeholder?: string;
  _onChange?: (e: any) => void;
  search?: any;
}
export const SellSearchInput: React.FC<SellSearchInputProps> = ({
  placeholder = "브랜드명",
  _onChange,
  search,
}) => {
  return (
    <Container>
      <SearchInput
        type="text"
        placeholder={placeholder}
        value={search}
        maxLength={20}
        onChange={_onChange}
      />
      <ImageBox>
        <Image
          src="/images/searchIcon.png"
          width="30px"
          height="30px"
          objectFit="cover"
          alt="search-icon"
        />
      </ImageBox>
    </Container>
  );
};

const Container = styled.div`
  padding: 10px 16px;
  height: 65px;
  position: relative;
`;

const SearchInput = styled.input<ITheme>`
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  text-align: center;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  font-size: 1.5rem;
`;

const ImageBox = styled.div`
  position: absolute;
  display: block;
  left: 25px;
  top: 50%;
  transform: translateY(-50%);
`;
