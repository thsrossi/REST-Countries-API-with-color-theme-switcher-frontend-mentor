import {createTheme} from '@mui/material/styles'

const themeMui  = (theme: any) => (createTheme({
    
    palette: {
      mode: theme?.title == 'light' ? 'light' : 'dark',
      background: {
        default: theme.colors.background,
        paper: theme.colors.backgroundSecondary
      },
      primary: {
        main: theme.colors.primary,
        dark: theme.colors.primary,
        light: theme.colors.primary,
        contrastText: theme.colors.primary
      },
      secondary: {
        main: theme?.colors?.secondary,
        dark: theme?.colors?.secondary,
        light: theme?.colors?.secondary,
        contrastText: theme?.colors?.secondary
      }
    },
    typography: {
      h6: {
        display: 'inline-block',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        maxWidth: '100%',
        fontWeight: 600
      },
      body1:{
        color: theme.colors.primary,
        fontWeight: 600
      },
      body2:{
        color: theme.colors.secondary,
        fontWeight: 300,
        fontSize: '1rem'
      },
      button: {
        textTransform: 'none'
      }
    }
  }
))

export default themeMui