import styled from 'styled-components'

const FormTextArea = styled.textarea`
border-radius: 8px;
margin:0 .8em;
border: ${props => props.invalidField ? '3px solid #FF6464' : '3px solid #F3F3F3'};
padding:.8em .5em;
height: 150px;
width: 90%;
`

export default FormTextArea
