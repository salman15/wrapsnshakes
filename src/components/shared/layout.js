import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: ${props => (props.spacing ? props.spacing : "center")};
  align-items: center;
  flex-direction: ${props => (props.direction ? props.direction : "column")};
  width: ${props => (props.width ? props.width : "100%")};
  max-width: 100%;
  height: ${props => (props.height ? props.height : "100%")};
  padding: ${props => (props.padding ? props.padding + "px" : "0px")};
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
  justify-content: ${props =>
    props.spacing ? props.spacing : " space-between"};

  align-items: center;
  width: ${props => (props.width ? props.width + "%" : "100%")};
  height: 100%;
  flex-direction; column;
`;

export const ImageBlockTwist = styled.div`
  transform: rotate(-45deg);
  position: absolute;
  left: -150px;
`;

export const ImageBlockContainer = styled.div`
  display: flex;
  justify-content: ${props => (props.spacing ? props.spacing : "center")};
  align-items: center;
  width: ${props => (props.width ? props.width : "initial")};
  background-color: white;
  margin: 32px;
  padding: 64px;
  border-radius: 17px;
`;

export const ImageBlock = styled.img`width: 200px;`;

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
  &:before {
    content: " ";
    display: flex;
    position: absolute;
    width: calc(100% + 1000px);
    height: 140vh;
    bottom: 0px;
    background-color: #dd99bb;
    border-radius: 50%;
  }
`;

export const HeaderTitle = styled.h1`
  font-weight: 100;
  font-size: 200px;
  z-index: 1;
  margin-bottom: 0;
`;

export const HeaderContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 400px;
`;

export const HeaderSubTitle = styled.p`
  font-weight: 200;
  font-size: 32px;
  z-index: 1;
  font-style: italic;
`;

export const HeaderIcon = styled.img`
  position: absolute;
  bottom: ${props => (props.bottom ? props.bottom + "px" : "-200px")};
  left: ${props => (props.left ? props.left + "px" : "initial")};
  right: ${props => (props.right ? props.right + "px" : "initial")};
  object-fit: cover;
  width: ${props => (props.width ? props.width + "px" : "400px")};
`;

export const HeaderIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
  /*width: 80%;*/
  width: 1149px;
  z-index: 1;
  margin: 24px 0;
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
