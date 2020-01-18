import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: ${props => (props.spacing ? props.spacing : "center")};
  align-items: ${props => (props.position ? props.position : "center")};
  flex-direction: ${props => (props.direction ? props.direction : "column")};
  width: ${props => (props.width ? props.width : "100%")};
  max-width: 100%;
  height: ${props => (props.height ? props.height : "100%")};
  padding: ${props => (props.padding ? props.padding + "px" : "0px")};
  margin: ${props => (props.margin ? props.margin : "0px")};
  background-color: ${props => (props.bgColor ? props.bgColor : "#ffffff9e")};
  color: ${props => (props.color ? props.color : "#fff")};
  ${"" /* border-radius: 62px; */};
  @media (max-width: 475px) {
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

export const SpacerImage = styled.img``;

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
  font-family: Roboto;
  font-size: 32px;
  font-weight: 300;
  font-style: ${props => (props.fontStyle ? props.fontStyle : "italic")};
`;

export const FoodImage = styled.img`width: 100%;`;

export const Title = styled.h1`
  font-size: 159px;
  font-style: italic;
  @media (max-width: 475px) {
    font-size: 100px;
  }
`;

export const MobilePadding = styled.div`
  @media (max-width: 475px) {
    padding: 20px;
  }
`;
