import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    BreadCrumb: "Tomorrow",
    heading: "Tomorrow",
    body: "Tomorrow",
  },
})

function MyApp({ Component, pageProps }) {
  return <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>

}

export default MyApp
