import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import { ThemeProvider } from 'styled-components'

import Cabecalho from './components/Cabecalho'
import EstiloGlobal, { Container } from './styles'
import principal from './themes/principal'

function App() {
  return (
    <ThemeProvider theme={principal}>
      <EstiloGlobal />
      <Cabecalho />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
