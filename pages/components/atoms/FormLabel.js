import styled from 'styled-components'

const FormLabel = styled.label`
color: ${props => props.invalidField ? '#FF6464' : '#ffffff'};
font-style: normal;
font-weight: bold;
font-size: 15px;
margin:0 .8em;
line-height: 18px;
display: flex;
align-items: center;
font-family: Helvetica Neu;
padding:1.6em 0 .2em 0;
`

export default FormLabel
