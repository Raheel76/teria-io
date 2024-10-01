import styled from "styled-components";

export const MainButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap:  16px;
  border: ${(props) => props.Border || "none"};
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor || "#605BFF"};
  color: ${(props) => props.textColor || "white"};
  padding: ${(props) => props.padding || "20px"};
  font-size: ${(props) => props.fontSize || "20px"};
  font-weight: ${(props)=> props.fontWeight || "700"};
  border-radius: ${(props) => props.borderRdius || "12px"};
  height: ${(props)=> props.height || "64px"};
  width: ${(props=> props.width || "auto")};

  a {
    color: ${(props) => props.textColor || "white"};
    font-size: ${(props) => props.fontSize || "14px"};
    font-weight: ${(props) => props.fontWeight || "400"};
  }
`;

// export default StyledButton;
