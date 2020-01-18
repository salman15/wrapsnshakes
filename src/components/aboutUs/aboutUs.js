import React from "react";
import { Wrapper, Column, SpacerImage, ContentBlock, ColumnText } from "../";
import copy from "../../data/copy.json";

export const AboutUs = ({ bgColor, title, children }) => {
  return (
    <Wrapper bgColor="transparent" width={"1149px"} height={"80vh"}>
      <ContentBlock
        color="#fff"
        direction="row"
        spacing="space-between"
        bgColor={bgColor}
      >
        <Column width={40} spacing="center">
          <h2>
            {title}
          </h2>
        </Column>
        <SpacerImage src={copy.general.icons.spacerWhite} />
        <Column width={50} spacing="center">
          <ColumnText>
            <p>
              {children}
            </p>
          </ColumnText>
        </Column>
      </ContentBlock>
    </Wrapper>
  );
};
