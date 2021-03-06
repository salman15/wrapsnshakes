import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Slide } from "./slide";
import { SlideController } from "./slideController";
import { Wrapper } from "../";

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
    },
    [currentStep, data, nextStep]
  );

  return (
    <Container>
      <ControllerContainer
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
        )}
      </ControllerContainer>

      <Wrapper
        bgColor="transparent"
        direction="row"
        spacing="space-between"
        padding={1}
      >
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

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  flex-direction: column;
  width: 50%;
`;

const ControllerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-direction: row;
  width: 100%;
  margin: 40px 0;
`;

const Quote = styled.p`
  font-style: italic;
  font-size: 24px;
  color: #292929;
`;

const Person = styled.p`
  font-size: 16px;
  color: #292929;
`;
