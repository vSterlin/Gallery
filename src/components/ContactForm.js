import React from 'react'
import styled from "styled-components";

const FormDiv = styled.div`
  background-color: #e8ffe8;

  padding: 200px 25vw;
  @media only screen and (max-width: 768px){
    padding: 100px 10vw;

  }
`;

const Form = styled.form`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const FormFieldWrapper = styled.div`
  width: 100%;

`;

const StyledInput = styled.input`
  width: ${({half}) => half ? "44%" : "90%"};
  box-sizing: border-box;
  height: 30px;
  margin: 5px 0;
  /* margin-${({side}) => side}: 2.5%; */
  ${({side}) => `margin-${side}: 1%;`}
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  resize: none;
  height: 120px;
  width: 90%;
  margin: 5px 0;

`;

const H2 = styled.h2`
  margin-bottom: 5px;
  font-family: 'Cookie', cursive;
 
`;

const P = styled.p`
  margin: 5px 0;

`;

const Button = styled.button`
  width: 90%;
  background-color: #0e153a;
  color: #e2f3f5;
  border: none;
  height: 20px;
  &:hover {
    background-color: #e2f3f5;
  color: #0e153a;
  }
  /* font-family: 'Oswald', sans-serif; */


`;

const ContactForm = () => {
  return (
    <FormDiv>
      <Form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" action="/success">
      <H2>Get in touch with us!</H2>
      <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, maxime?</P>
<FormFieldWrapper>

      <StyledInput side="right" required half type="text" placeholder="Name" name="name"/>
      <StyledInput side="left" required half type="tel" placeholder="Phone Number" name="phone"/>

</FormFieldWrapper>
<FormFieldWrapper>
      <StyledInput type="email" required placeholder="Email" name="email"/>

</FormFieldWrapper>
<FormFieldWrapper>
  <StyledTextArea  required placeholder="Your message" name="message"></StyledTextArea>
  <Button type="submit">Send</Button>

</FormFieldWrapper>
<input type="hidden" name="bot-field" />
<input type="hidden" name="form-name" value="contact" />
      </Form>
    </FormDiv>
  )
}

export default ContactForm
