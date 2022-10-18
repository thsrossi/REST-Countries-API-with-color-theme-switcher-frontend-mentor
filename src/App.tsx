import React from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
// import { ThemeProvider as MuiTheme } from '@mui/styled-engine-sc'
import GlobalStyle from './styles/global'
import { Header } from './Components/Header/header'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import usePersistedState from './utils/usePersistedState'
import Home from './pages/home'
import { ThemeProvider as MuiTheme, createTheme } from '@mui/material/styles'
import Slider from '@mui/material/Slider';


function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const themeMui = createTheme({
    palette: {
      primary: {
        main: '#087',
      },
    },
  })

  const toggleTheme = () =>{
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      
    <div className="App">
      <GlobalStyle/>
      <Header toggleTheme={toggleTheme}/>
      <MuiTheme theme={themeMui}>
      <Home/>
      
      </MuiTheme>
    </div>
    
    </ThemeProvider>
  )
}

export default App
