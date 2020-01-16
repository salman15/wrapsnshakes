import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: ${props => (props.spacing ? props.spacing : "center")};
  align-items: center;
  flex-direction: ${props => (props.direction ? props.direction : "column")};
  width: ${props => (props.width ? props.width + "%" : "100%")};
  height: 100%;
  padding: ${props => (props.padding ? props.padding + "px" : "64px")};
  background-color: ${props => (props.bgColor ? props.bgColor : "#ffffff9e")};
  border-radius: 62px;
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const MenuList = styled.ul`
  border-bottom: 2px solid #424242;
  width: 30%;
  margin: 0 16px;
`;

export const MenuListItem = styled.li`
  font-family: Roboto;
  font-size: 18px;
  margin: 16px 0;
`;

export const MenuProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-right: 32px;
`;

export const Column = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${props => (props.width ? props.width + "%" : "100%")};
  height: 100%;
  flex-direction: column;
`;

// export const Ball = styled.span`
//   background-color: white;
//   width: 100px;
//   height: 100px;
//   border-radius: 50%;
// `;

export const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  background-image: ${props => "url(" + props.bgImage + ")"};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  width: 100%;
  min-height: 70vh;
  margin-bottom: 200px;
`;

export const HeaderTitle = styled.h1`
  font-weight: 100;
  font-size: 200px;
`;

export const HeaderIcon = styled.img`
  position: absolute;
  bottom: -100px;
  object-fit: cover;
  width: 200px;
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
  width: 80%;
`;

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
  font-style: italic;
  font-family: Roboto;
  font-size: 24px;
`;

export const FoodImage = styled.img`width: 100%;`;

export const CompanyIcon = styled.img``;
