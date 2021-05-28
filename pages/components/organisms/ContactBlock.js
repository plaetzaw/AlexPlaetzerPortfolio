import React, { useState } from 'react'
import styled from 'styled-components'

// Atoms
import ContactLabel from '../atoms/FormLabel'
import ContactInput from '../atoms/FormInput'
import ContactTextArea from '../atoms/FormTextArea'

const Container = styled.div`
// background-color: ${({ theme }) => theme.colors.SPACE_GREY}
  background-color: #343639;
  color: #fcfcfc;
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh
`
const ContactBlurb = styled.div`
  font-family: ${({ theme }) => theme.fonts.Accent};
  color: ${({ theme }) => theme.colors.BlueAccent};
  text-align: center;
  background-color: ${({ theme }) => theme.colors.BlackAccent};
  flex: 0 1 500px;
  margin: 50px;
  padding: 30px;
  font-size: 1.5rem;
  border-radius: 8px;
`

const ContactForm = styled.form`
  flex: 0 1 525px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.BlackAccent};
  margin-right: 35px;
  margin-left: 35px;
  margin-top: 35px;
  border: 1px dashed #28292A;
  box-sizing: border-box;
  border-radius: 8px;
`

const ContactButton = styled.a`
  display: block;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.TealAccent};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.regal};
  cursor: pointer;
  font-size: 1em;
  letter-spacing: .3px;
  width: 175px;
  margin-left 10px;
  margin-top: 20px;
  max-height: 30px;
  padding: .7em .3em .4em .3em;
  font-size: 18px;
  font-family: Rockwell;
`

const SuccessHeader = styled.h1`
  color: #24A5FF;
  text-align: center;
`
const SuccessText = styled.div`
  text-align: center;
  font-size: 20px;
`

const Index = () => {
  function encode (data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const NAME_PLACEHOLDER = 'John Doe'
  const EMAIL_PLACEHOLDER = 'myemail@company.com'
  const MESSAGE_PLACEHOLDER = 'Enter your message'

  //   const NAME_ERROR_MESSAGE = 'Please enter a valid name'
  //   const EMAIL_ERROR_MESSAGE = 'Please enter a valid email'
  //   const Message_ERROR_MESSAGE = 'Please enter a valid Message'

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [invalidName, setInValidName] = useState(false)
  const [invalidEmail, setInValidEmail] = useState(false)
  const [invalidMessage, setInvalidMessage] = useState(false)

  const onClick = async (e) => {
    e.preventDefault()
    let nameError = false
    let emailError = false
    let messageError = false
    /// Checking for validity of each field
    if (name.length <= 0) {
      nameError = true
    }

    if (email.length <= 0) {
      emailError = true
    }

    if (message.length <= 0) {
      messageError = true
    }
    // Helpful Error Handling
    // console.log(nameError, '&&', emailError, '&&', MessageError)
    // console.log(`Rendering Form -- (withErrors: ${showErrors}) and (invalidName:${invalidName})`)
    // console.log(`Rendering Form -- (withErrors: ${showErrors}) and (invalidEmail:${invalidEmail})`)
    // console.log(`Rendering Form -- (withErrors: ${showErrors}) and (invalidMessage:${invalidMessage})`)

    // Checking to see if the input values are valid, if so
    // it will initiate the fetch request
    if (nameError === false && emailError === false && messageError === false) {
      try {
        await window.fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': 'getting-started-leads',
            name: name,
            email: email,
            Message: message
          })
        })
        // console.log('awaited fetch result:', result)
        setSubmitted(true)
        console.log(name, email, message, 'information submitted?', submitted)
      } catch (e) {
        console.log(e)
      }
    // if the values are not valid, it will show the corresponding errors
    } else {
      setInValidName(nameError)
      setInValidEmail(emailError)
      setInvalidMessage(messageError)
    }
  }

  const contactForm = !submitted
    ? (
      <>
        <ContactForm
          name='getting-started-leads'
          method='post'
          data-netlify='true'
          data-netlify-honeypot='bot-field'
        >
          <ContactLabel invalidField={invalidName}>NAME</ContactLabel>
          <ContactInput
            type='text'
            name='name'
            value={name}
            invalidField={invalidName}
            placeholder={NAME_PLACEHOLDER}
            onChange={(e) => { setName(e.target.value) }}

          />
          <ContactLabel invalidField={invalidEmail}>EMAIL</ContactLabel>
          <ContactInput
            type='text'
            name='email'
            value={email}
            placeholder={EMAIL_PLACEHOLDER}
            onChange={(e) => { setEmail(e.target.value) }}
            invalidField={invalidEmail}
          />
          <ContactLabel invalidField={invalidMessage}>MESSAGE</ContactLabel>
          <ContactTextArea
            type='text'
            name='message'
            value={message}
            placeholder={MESSAGE_PLACEHOLDER}
            onChange={(e) => { setMessage(e.target.value) }}
            invalidField={invalidMessage}

          />
          <ContactButton
            onClick={onClick}
          >Get Started
          </ContactButton>
        </ContactForm>
      </>
      )
    : (
      <>
        <ContactForm>
          <SuccessHeader>Success!</SuccessHeader>
          <SuccessText>Thank you for your interest in gitBabel! Your message has been submitted and we will get back to you soon!</SuccessText>
        </ContactForm>
      </>
      )

  return (
    <>
      <Container>
        <ContactBlurb>
          Want to work with me?
        </ContactBlurb>
        {contactForm}
      </Container>
    </>
  )
}
export default Index
