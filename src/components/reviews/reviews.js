import React from "react";
import {
  Wrapper,
  Column,
  SpacerImage,
  ContentBlock,
  CompanyIcon,
  Slider
} from "../";
import copy from "../../data/copy.json";

export const Reviews = () => {
  return (
    <Wrapper bgColor="transparent" width={"1149px"}>
      <Wrapper bgColor="transparent" width={100} direction="row">
        <Column width={50}>
          <Wrapper
            bgColor="transparent"
            width={100}
            direction="row"
            spacing="space-between"
          >
            <CompanyIcon src={copy.pages.reviews.icons.google} />
            <CompanyIcon src={copy.pages.reviews.icons.foodora} />
          </Wrapper>
          <Wrapper
            bgColor="transparent"
            width={100}
            direction="row"
            spacing="space-between"
          >
            <CompanyIcon src={copy.pages.reviews.icons.uber} />
            <CompanyIcon src={copy.pages.reviews.icons.thuisbezorgd} />
          </Wrapper>
        </Column>
        <Column width={50}>
          <ContentBlock
            bgColor="#D8D8D8"
            color="#292929"
            spacing="space-between"
          >
            <h2>
              {copy.pages.reviews.title}
            </h2>
            <SpacerImage src={copy.general.icons.spacer} />
            <Slider data={copy.pages.reviews.reviews} />
          </ContentBlock>
        </Column>
      </Wrapper>
    </Wrapper>
  );
};
