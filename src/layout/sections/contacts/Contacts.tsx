import { S } from "../contacts/Contacts_Styles";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import emailjs from "@emailjs/browser";
import React, { ElementRef, useRef } from "react";

export const Contacts: React.FC = () => {
  const form = useRef<ElementRef<"form">>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_2imuxou", "template_c8a8ltv", form.current, {
        publicKey: "HYreGlUu5MSyT5C0D",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  };
  
  return (
    <S.Contacts id={"contact"}>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <S.Form ref={form} onSubmit={sendEmail}>
          <S.Field required placeholder="name" name={"user_name"} />
          <S.Field required placeholder="email" name={"email"} />
          <S.Field required placeholder="subject" name={"subject"} />
          <S.Field required placeholder="message" as={"textarea"} name={"message"} />
          <Button type={"submit"}>Send message</Button>
        </S.Form>
      </Container>
    </S.Contacts>
  );
};
