import React from "react";
import styled from "styled-components";
import { Wrapper, Column, ColumnText, MobilePadding } from "..";
import copy from "../../data/copy.json";

export const OurFood = () => {
  return (
    <Wrapper bgColor="rgba(247,244,244,0.49)" height="90vh" id="ourFood">
      <ImageBlockTwist>
        <ImageBlockContainer spacing="flex-end">
          <ImageBlock src={copy.pages.food.second} />
        </ImageBlockContainer>
        <Column direction="row">
          <ImageBlockContainer>
            <ImageBlock src={copy.pages.food.first} />
          </ImageBlockContainer>
          <ImageBlockContainer>
            <ImageBlock src={copy.pages.food.third} />
          </ImageBlockContainer>
        </Column>
      </ImageBlockTwist>
      <Wrapper bgColor="transparent" width={"1149px"} color="#292929">
        <FoodTitle>Our Food</FoodTitle>

        <Wrapper bgColor="transparent" direction="row" color="#292929">
          {/* 
          * Image Section
         */}
          <Column width={50} spacing="flex-end" index={1} />
          {/* 
          * Text Section
         */}
          <Column
            width={50}
            direction="column"
            spacing="flex-start"
            alignText="right"
            index={2}
          >
            <MobilePadding>
              <FoodTextTitle>Food with a Twist</FoodTextTitle>
              <ColumnText>
                “De Libanese keuken is een keuken van de zon en een keuken uit
                het hart”.
              </ColumnText>
              <ColumnText>
                De kleuren weerspiegelen de 1001 zonnige landschappen en de
                diversiteit roept de overvloedige Libanese vrijgevigheid en
                gastvrijheid op.
              </ColumnText>
            </MobilePadding>
          </Column>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

const FoodTitle = styled.h1`
  font-size: 159px;
  font-style: italic;
  position: relative;
  z-index: 2;
  @media (max-width: 1100px) {
    width: 100%;
    text-align: right;
    padding: 20px;
  }
  @media (max-width: 475px) {
    margin: 0;
  }
`;

const FoodTextTitle = styled.h4`
  opacity: 0.51;
  color: #292929;
  font-family: Roboto;
  font-size: 50px;
  font-style: italic;
  font-weight: 300;
  text-align: right;
  width: 100%;
  margin-bottom: 0;
  @media (max-width: 475px) {
    padding: 20px;
  }
`;

const ImageBlockTwist = styled.div`
  transform: rotate(-45deg);
  position: absolute;
  left: -150px;
  @media (max-width: 1100px) {
    opacity: 0.3;
  }
`;

const ImageBlockContainer = styled.div`
  display: flex;
  justify-content: ${props => (props.spacing ? props.spacing : "center")};
  align-items: center;
  width: ${props => (props.width ? props.width : "initial")};
  background-color: white;
  margin: 32px;
  padding: 64px;
  border-radius: 17px;
`;

const ImageBlock = styled.img`width: 200px;`;
