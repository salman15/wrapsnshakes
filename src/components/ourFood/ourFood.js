import React from "react";
import {
  Wrapper,
  Column,
  ColumnText,
  ImageBlockContainer,
  ImageBlock,
  ImageBlockTwist
} from "..";
import copy from "../../data/copy.json";

export const OurFood = () => {
  return (
    <Wrapper bgColor="rgba(247,244,244,0.49)" height="100vh">
      <Wrapper bgColor="transparent" width={"1149px"} color="#292929">
        <h1>Our Food</h1>
        <Wrapper bgColor="transparent" direction="row" color="#292929">
          <Column width={50} spacing="center">
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
          <Column
            width={50}
            direction="column"
            spacing="center"
            alignText="right"
          >
            <h1>Food with a Twist</h1>
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
