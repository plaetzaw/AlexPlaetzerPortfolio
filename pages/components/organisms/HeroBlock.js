import styled from 'styled-components'

import LinkedIn from '../atoms/LinkedIn'
import GitHub from '../atoms/GitHub'
import Medium from '../atoms/Medium'

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.BlackAccent};
`

const Headshot = styled.img`
`

const Headline = styled.div`
  font-family: Odibee Sans;
  font-family: ${({ theme }) => theme.fonts.Accent};
  font-weight: 400;
  font-size: 36px;
  line-height: 40px;
  color: ${({ theme }) => theme.colors.BlueAccent};
`

const Accent = styled(Headline)`
  font-family: ${({ theme }) => theme.fonts.Base};

`
const SocialMediaBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 180px;
  height: 60px;
  background: linear-gradient(180deg, #DBFF00 0%, rgba(255, 255, 255, 0) 100%), #031CFF;
  border: 1px solid #000000;
  margin: 1em 0 1em 0;
`

const HeroBlock = () => {
  return (
    <HeroContainer>
      <Headshot src='/Headshot.png' />
      <Headline>Hi I'm Alex Plaetzer</Headline>
      <Accent>and</Accent>
      <Headline>I'm a full-stack developer</Headline>
      <SocialMediaBox>
        <LinkedIn /> <GitHub /> <Medium />
      </SocialMediaBox>
    </HeroContainer>
  )
}

export default HeroBlock
