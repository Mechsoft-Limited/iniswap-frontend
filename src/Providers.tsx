import React from 'react'
import { ModalProvider, light, dark } from '@iniswap/uikit'
import { Web3ReactProvider } from '@web3-react/core'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { useThemeManager } from 'state/user/hooks'
import { getLibrary } from 'utils/web3React'
import { LanguageProvider } from 'contexts/Localization'
import { RefreshContextProvider } from 'contexts/RefreshContext'
import { ToastsProvider } from 'contexts/ToastsContext'
import store from 'state'

const colors = {
  colors: {
    background: '#0161C6', // "#14279B", // "#d3e1d8",
    backgroundDisabled: '#90d4cb',
    backgroundAlt: '#091353', // "#e6e7dc",
    backgroundAlt2: '#e6e7dc',
    cardBorder: '#091353', // "#89cdcb",
    contrast: '#621121',
    dropdown: '#3D56B2', // "#c3dfd4",
    dropdownDeep: '#5C7AEA', // "#a4d7cd",
    invertedContrast: '#091353', // "#e6e7dc",
    input: '#316B83', // "#5C7AEA", // "#a4d4d3",
    inputSecondary: '#172774', // "#4ab7cc",
    tertiary: '#a8ddd3',
    text: '#ffffff', // "#9c0c52",
    textDisabled: 'grey', // "#e4afa9",
    textSubtle: '#dd6393',
    disabled: 'black', // "#90d4cb",
    primary: '#79b4b7',
    primaryBright: '#45c9c9',
    primaryDark: '#00898b',
    secondary: '#FBB03B', // "#F4A442", // "#ce3ebb",
    success: '#3E7C17', // "#bfbc93",
    warning: '#e6a12f',
    failure: '#FF0075', // "#a04488"
  },
  gradients: {
    bubblegum: 'linear-gradient(139.73deg, #0161C6 0%, #b7d8dc 100%)',
    inverseBubblegum: 'linear-gradient(139.73deg, #b7d8dc 0%, #81e5dc 100%)',
    cardHeader: 'linear-gradient(111.68deg, #0161C6 0%, black 100%)',
    blue: 'linear-gradient(180deg, #0161C6 0%, #14279B 100%)',
    violet: 'linear-gradient(180deg, #0161C6 0%, #23a6d8 100%)',
    violetAlt: 'linear-gradient(180deg, #1bc2ce 0%, #5b90b4 100%)',
    gold: 'linear-gradient(180deg, #e6c300 0%, #df9b2b 100%)',
  },
}
const ThemeProviderWrapper = (props) => {
  const [isDark] = useThemeManager()
  // eslint-disable-next-line no-debugger
  // debugger

  //   light.colors={...light.colors,...colors.colors,gradients:colors.gradients}
  const theme = isDark ? dark : light
  //  theme.card.background=theme.colors.backgroundAlt;
  //  theme.modal.background=theme.colors.backgroundAlt;
  //  theme.alert.background = theme.colors.backgroundAlt;

  return <ThemeProvider theme={theme} {...props} />
}

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <ToastsProvider>
          <HelmetProvider>
            <ThemeProviderWrapper>
              <LanguageProvider>
                <RefreshContextProvider>
                  <ModalProvider>{children}</ModalProvider>
                </RefreshContextProvider>
              </LanguageProvider>
            </ThemeProviderWrapper>
          </HelmetProvider>
        </ToastsProvider>
      </Provider>
    </Web3ReactProvider>
  )
}

export default Providers
