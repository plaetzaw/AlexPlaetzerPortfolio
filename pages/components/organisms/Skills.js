import styled from 'styled-components'

const SkillsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: ${({ theme }) => theme.colors.BlackAccent};
`

const Type = styled.h1`
color: ${({ theme }) => theme.colors.BlueGreen};
`
const Items = styled.div`
// max-width: 100%;
display: flex;
color: white;
background-color: red;
flex-wrap: wrap;

`
const ItemWrapper = styled.div`
padding: 1em;
display: flex;
flex-direction: row;
`

const Skills = () => {
  const Languages = [
    { id: 1, item: 'NodeJS' }, { id: 2, item: 'Python' }, { id: 3, item: 'HTML' }, { id: 4, item: 'CSS' }
  ]
  const Frameworks = [
    { id: 1, item: 'React' }, { id: 2, item: 'NextJS' }, { id: 3, item: 'ExpressJS' }, { id: 4, item: 'ReduxJS' }
  ]
  const Technologies = [
    { id: 1, item: 'PostgreSQL & KnexJS' }, { id: 2, item: 'Storybook' }, { id: 3, item: 'Figma' }, { id: 4, item: 'GraphQL' }, { id: 5, item: 'Git' }, { id: 6, item: 'RestAPIs' }
  ]
  const LanguageMap = Languages.map((item) => {
    return (
      <ItemWrapper key={item.id}>
        {item.item}
      </ItemWrapper>
    )
  })
  const FrameworkMap = Frameworks.map((item) => {
    return (
      <ItemWrapper key={item.id}>
        {item.item}
      </ItemWrapper>
    )
  })
  const TechnologyMap = Technologies.map((item) => {
    return (
      <ItemWrapper key={item.id}>
        {item.item}
      </ItemWrapper>
    )
  })

  return (
    <SkillsContainer>
      <Type>Lanuages</Type>
      <Items>{LanguageMap}</Items>
      <Type>Frameworks</Type>
      <Items>{FrameworkMap}</Items>
      <Type>Technologies</Type>
      <Items>{TechnologyMap}</Items>
    </SkillsContainer>
  )
}

export default Skills
