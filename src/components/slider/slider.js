import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { Slide } from "./slide";
import { SlideController } from "./slideController";
import { Wrapper } from "../";
const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Quote = styled.p`
  font-style: italic;
  font-size: 24px;
`;

const Person = styled.p`font-size: 16px;`;

export const Slider = ({ data }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    console.log(currentStep < data.length, currentStep);
    setCurrentStep(currentStep < data.length - 1 ? currentStep + 1 : 0);
  };

  useEffect(
    () => {
      data &&
        setTimeout(function() {
          nextStep();
        }, 5000);
    }
    //[data, nextStep]
  );

  return (
    <Container>
      <Wrapper bgColor="transparent">
        <Wrapper
          bgColor="transparent"
          direction="row"
          spacing="space-between"
          padding={1}
        >
          {data.map((item, index) =>
            <SlideController
              active={currentStep}
              setActive={setCurrentStep}
              index={index}
            />
          )}{" "}
        </Wrapper>

        {data.map((item, index) =>
          <Slide index={index} active={currentStep}>
            <Quote>"{item.quote}" </Quote>
            <br /> <Person>-{item.person}</Person>
          </Slide>
        )}
      </Wrapper>
    </Container>
  );
};
