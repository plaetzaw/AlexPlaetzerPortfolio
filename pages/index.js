import Head from 'next/head'
import styled from 'styled-components'

// Organisms
import HeroBlock from './components/organisms/HeroBlock'
import SkillsBlock from './components/organisms/SkillsBlock'
import ProjectBlock from './components/organisms/ProjectBlock'
import ContactBlock from './components/organisms/ContactBlock'

// Templates
import Block from './components/templates/Block'

const PurposeText = styled.div`
  font-family: ${({ theme }) => theme.fonts.Base};;
  font-size: 26px;
  line-height: 40px;
  display: flex;
  text-align: left;
  // background-color: ${({ theme }) => theme.colors.LightBlueAccent};
  // color: ${({ theme }) => theme.colors.BlueGreen};
  padding: 0 1em 0 1em;
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
        <HeroBlock />
      </Block>
      <Block>
        <PurposeText>
          Coming from the coaching world,
          I am a highly effective communicator
          and I'm looking for a full-time role in software development
        </PurposeText>
      </Block>
      <Block>
        <SkillsBlock />
      </Block>
      <Block>
        <ProjectBlock />
      </Block>
      <Block>
        <ContactBlock />
      </Block>
    </>
  )
}
