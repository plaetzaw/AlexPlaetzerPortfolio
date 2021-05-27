import Head from 'next/head'
import styled from 'styled-components'

import LinkedIn from './components/atoms/LinkedIn'
import GitHub from './components/atoms/GitHub'
import Medium from './components/atoms/Medium'

// import Image from 'next/image'

const Block = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2em auto;
  width: 100%;
  max-width: 1200px;
`
const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Headshot = styled.img`
`

const Headline = styled.div`
  font-family: Odibee Sans;
  font-weight: 400;
  font-size: 36px;
  line-height: 40px;
`

const Accent = styled(Headline)`
  font-family: Nunito;
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

export default function Home () {
  return (
    <>
      <Head>
        <title>Alex Plaetzer - Front End Engineer</title>
        <meta name='description' content='Alex Plaetzer, Front End Engineer' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Nunito&family=Odibee+Sans&display=swap' rel='stylesheet' />
      </Head>

      <Block>
        <HeroContainer>
          <Headshot src='/Headshot.png' />
          <Headline>Hi I'm Alex Plaetzer</Headline>
          <Accent>and</Accent>
          <Headline>I'm a full-stack developer</Headline>
          <SocialMediaBox>
            <LinkedIn /> <GitHub /> <Medium />
          </SocialMediaBox>
        </HeroContainer>
      </Block>
    </>
  )
}
