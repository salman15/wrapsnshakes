import React from "react";
import styled from "styled-components";
import { Wrapper, Column, SpacerImage, ContentBlock, ColumnText } from "../";
import copy from "../../data/copy.json";

export const AboutUs = ({ bgColor, title, children, id }) => {
  return (
    <Wrapper bgColor="transparent" width={"1149px"} height={"80vh"} id={id}>
      <ContentBlock
        color="#fff"
        direction="row"
        spacing="space-between"
        bgColor={bgColor}
      >
        <Column width={40} spacing="center">
          <Title>
            {title}
          </Title>
        </Column>
        <SpacerImage src={copy.general.icons.spacerWhite} />
        <Column width={50} spacing="center">
          <ColumnText>
            {children}
          </ColumnText>
        </Column>
      </ContentBlock>
    </Wrapper>
  );
};

const Title = styled.h2``;
