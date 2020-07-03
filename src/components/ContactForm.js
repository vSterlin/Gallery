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
`;

const P = styled.p`
  margin: 5px 0;
`;

const ContactForm = () => {
  return (
    <FormDiv>
      <Form>
      <H2>Get in touch with us!</H2>
      <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio necessitatibus error, alias fugiat doloribus exercitationem ut beatae magni quas incidunt quam ipsa quidem ratione totam deleniti tempora. Corrupti, quo numquam?</P>
<FormFieldWrapper>

      <StyledInput side="right" half type="text" placeholder="Name" name="name"/>
      <StyledInput side="left" half type="tel" placeholder="Phone Number" name="phone"/>

</FormFieldWrapper>
<FormFieldWrapper>
      <StyledInput type="email" placeholder="Email" name="email"/>

</FormFieldWrapper>
<FormFieldWrapper>
  <StyledTextArea placeholder="Your message" name="message"></StyledTextArea>
</FormFieldWrapper>
      </Form>
    </FormDiv>
  )
}

export default ContactForm
