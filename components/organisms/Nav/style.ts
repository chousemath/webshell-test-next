import styled from "@emotion/styled";

export const NavContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: #fff;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 420px;
`;

export const NavButtonStyle = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;

  .imageContent {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    margin-bottom: 4px;
  }

  span {
    text-align: center;
  }
`;
