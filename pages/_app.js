
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { THEME } from '../constants'

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
}
`

function MyApp ({ Component, pageProps }) {
  return (
    <ThemeProvider theme={THEME}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
