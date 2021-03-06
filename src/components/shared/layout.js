import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({
    spacing,
    position,
    direction,
    width,
    height,
    padding,
    margin,
    bgColor,
    color,
    bgImage,
    borderRadius,
    boxShadow
  }) => css`
    display: flex;
    justify-content: ${spacing || "center"};
    align-items: ${position || "center"};
    flex-direction: ${direction || "column"};
    width: ${width || "100%"};
    max-width: 100%;
    height: ${height || "100%"};
    padding: ${padding + "px" || "0px"};
    margin: ${margin || "0px"};
    background-color: ${bgColor || "#ffffff9e"};
    background-image: url(${bgImage || "none"});
    background-position: repeat;
    color: ${color || "#fff"};
    border-radius: ${borderRadius || "0"};
    box-shadow: ${boxShadow || "none"}
`};
  ${"" /* border-radius: 62px; */};
  @media (max-width: 475px) {
    position: relative;
    flex-direction: column;
    height: 100%;
    margin: 20px 0;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: ${props => (props.spacing ? props.spacing : "center")};
  align-items: center;
  flex-direction: column;
  width: ${props => (props.width ? props.width + "%" : "100%")};
  height: 100%;
  @media (max-width: 475px) {
    width: 100%;
  }
`;

export const Column = styled.div`
  display: flex;
  justify-content: ${props =>
    props.spacing ? props.spacing : " space-between"};

  align-items: center;
  width: ${props => (props.width ? props.width + "%" : "100%")};
  height: ${props => (props.height ? props.height : "100%")};
  flex-direction: ${props => (props.direction ? props.direction : "column")};
  text-align: ${props => (props.alignText ? props.alignText : "left")};
  z-index: ${props => (props.index ? props.index : "0")};
  position: relative;
  @media (max-width: 475px) {
    flex-direction: column;
    width: 100%;
    position: relative;
  }
`;

// export const Ball = styled.span`
//   background-color: white;
//   width: 100px;
//   height: 100px;
//   border-radius: 50%;
// `;

export const SpacerImage = styled.img`
  @media (max-width: 475px) {
    width: 30px;
    padding: 20px 0;
  }
`;

export const Button = styled.a`
  border-radius: 43.5px;
  background-color: #212121;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  color: #ffffff;
  font-family: Roboto;
  font-size: 32px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  margin: 0 16px;
`;

export const ColumnText = styled.p`
  ${({ fontStyle, textAlign }) => css`
  font-family: Roboto;
  font-size: 32px;
  font-weight: 300;
  text-align: ${textAlign || "left"};
  font-style: ${fontStyle || "italic"};
  @media (max-width: 475px) {
    font-size: 24px;
    padding: 24px 0;
  }
  `};
`;

export const FoodImage = styled.img`width: 100%;`;

export const Title = styled.h1`
  font-size: 159px;
  font-style: italic;
  text-align: center;
  @media (max-width: 475px) {
    font-size: 100px;
  }
`;

export const MobilePadding = styled.div`
  width: 100%;
  @media (max-width: 1100px) {
    padding: 20px;
  }
`;
