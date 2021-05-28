import styled from 'styled-components'

// Atoms
import GitBabel from '../atoms/GitBabel'
import YourNextBinge from '../atoms/YourNextBinge'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // background-color: ${({ theme }) => theme.colors.BlueGreen};
`
const Title = styled.h1`
font-family: ${({ theme }) => theme.fonts.Accent};
text-align: center;
`

const Logo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 1em;
`

const Text = styled.div`
text-align: left;
font-family: ${({ theme }) => theme.fonts.Base};
font-size: 18px;
line-height: 25px;
`

const Projects = [
  { id: 1, src: <GitBabel />, text: 'gitBabel is the first developer platform focused on team collaboration and continuous learning that will redefine how engineering teams grow and scale.', url: 'https://www.gitbabel.com' },
  { id: 2, src: <YourNextBinge />, text: 'YourNextBinge is designed to help the end user find the next movie or tv show to bingewatch. Also allows user to find the credits for a specific actor/actress.', url: 'https://yournextbinge.netlify.app/' }
]

const ProjectsMap = Projects.map((project) => {
  const Wrapper = styled.div`
  padding: 1em;
  align-items: center;
  `
  return (
    <Wrapper key={project.id}>
      <Logo>{project.src}</Logo>
      <Text>{project.text}</Text>
    </Wrapper>
  )
})

const ProjectBlock = () => {
  return (
    <Container>
        <Title>Current Projects</Title>
        {ProjectsMap}
      </Container>
  )
}

export default ProjectBlock
