import React from "react";
import styled from "styled-components";
import {
  Wrapper,
  Column,
  ColumnText,
  ImageBlockContainer,
  ImageBlock,
  ImageBlockTwist
} from "..";
import copy from "../../data/copy.json";

const FoodTitle = styled.h1`
  font-size: 159px;
  font-style: italic;
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
`;

export const OurFood = () => {
  return (
    <Wrapper bgColor="rgba(247,244,244,0.49)" height="90vh">
      <Wrapper bgColor="transparent" width={"1149px"} color="#292929">
        <FoodTitle>Our Food</FoodTitle>

        <Wrapper bgColor="transparent" direction="row" color="#292929">
          {/* 
          * Image Section
         */}
          <Column width={50} spacing="flex-end">
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
          </Column>
          {/* 
          * Text Section
         */}
          <Column
            width={50}
            direction="column"
            spacing="flex-start"
            alignText="right"
          >
            <FoodTextTitle>Food with a Twist</FoodTextTitle>
            <ColumnText>
              “De Libanese keuken is een keuken van de zon en een keuken uit het
              hart”.
            </ColumnText>
            <ColumnText>
              De kleuren weerspiegelen de 1001 zonnige landschappen en de
              diversiteit roept de overvloedige Libanese vrijgevigheid en
              gastvrijheid op.
            </ColumnText>
          </Column>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};
