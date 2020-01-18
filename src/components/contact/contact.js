import React from "react";
import styled from "styled-components";
import { Wrapper, Title } from "../";
import copy from "../../data/copy.json";

export const Contact = () => {
  return (
    <Wrapper bgColor="rgba(247,244,244,0.49)">
      <Wrapper bgColor="transparent" width={"1149px"} color="#292929">
        <Title>
          {copy.pages.contact.title}
        </Title>
        <Wrapper bgColor="transparent" color="#292929" margin="48px 0">
          <ContactType>
            {copy.pages.contact.email.title}
          </ContactType>
          <ContactText>
            {copy.pages.contact.email.support.title}
            <a href={"emailto:" + copy.pages.contact.email.support.email}>
              {copy.pages.contact.email.support.email}
            </a>
          </ContactText>
          <ContactText>
            {copy.pages.contact.email.work.title}
            <a href={"emailto:" + copy.pages.contact.email.work.email}>
              {copy.pages.contact.email.work.email}
            </a>
          </ContactText>
          <ContactText>
            {copy.pages.contact.email.info.title}
            <a href={"emailto:" + copy.pages.contact.email.info.email}>
              {copy.pages.contact.email.info.email}
            </a>
          </ContactText>
        </Wrapper>
        <Wrapper bgColor="transparent" color="#292929" margin="48px 0">
          <ContactType>
            {copy.pages.contact.tel.title}
          </ContactType>
          <ContactText>
            {copy.pages.contact.tel.text}{" "}
            <a href={"callto:" + copy.pages.contact.tel.number}>
              {copy.pages.contact.tel.number}
            </a>
          </ContactText>
        </Wrapper>

        <ContactListWrapper>
          <ContactList>
            {copy.pages.contact.adres.map(item =>
              <ContactListItem>
                {item.content}
              </ContactListItem>
            )}
          </ContactList>
          <ContactList>
            {copy.pages.contact.businessInfo.map(item =>
              <ContactListItem>
                {item.content}
              </ContactListItem>
            )}
          </ContactList>
          <ContactList>
            {copy.pages.contact.social.map(item =>
              <ContactListItem>
                {item.content}
              </ContactListItem>
            )}
          </ContactList>
        </ContactListWrapper>

        <Copyright>Copyright Wraps 'n Shakes - 2019</Copyright>
      </Wrapper>
    </Wrapper>
  );
};

const ContactListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 48px 0;
`;

const ContactType = styled.p`
  font-family: Roboto;
  font-size: 24px;
  font-style: italic;
  font-weight: bold;
`;

const ContactText = styled.p`
  font-family: Roboto;
  font-size: 24px;
  font-style: italic;
  font-weight: 300;
  a {
    color: #292929;
  }
`;

const ContactList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 33%;
`;

const ContactListItem = styled.li`
  font-family: Roboto;
  font-size: 16px;
  font-style: italic;
  line-height: 42px;
  text-align: center;
  width: 100%;
`;

const Copyright = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-style: italic;
  font-weight: bold;
`;
