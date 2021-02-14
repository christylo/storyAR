import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import { Fonts } from "../components/fonts"

const theme = extendTheme({
  fonts: {
    BreadCrumb: "Tomorrow",
    Quicksand: "Quicksand"
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )

}

export default MyApp
