import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Spacer,
    Box,
    Grid,
    Text,
    Button, Flex, Image,
} from "@chakra-ui/react";
import { Fonts } from "../components/fonts";
import Header from "../components/header";

export default function Home() {

  return (
    <Box className={styles.container} backgroundImage={"/Group 2.svg"}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Fonts />

      <Header/>

        {/*<Flex align="center" justify="center" w={"100wv"}>*/}
        {/*    <Box>*/}
        {/*        <Image src={"/Group 2.svg"}/>*/}
        {/*    </Box>*/}
        {/*</Flex>*/}

        <Spacer h={"82vh"}/>

        <Flex align="center" justify="center">
      <Box >
        <Link href="/create">
          <Button
            size="lg"
            color="white"
            backgroundColor="#8055DA"
            height="48px"
            width="200px"
            colorScheme="pink"
            fontFamily="Quicksand"
          >
            try now
      </Button>
        </Link>
      </Box>
    </Flex>
    </Box >
  )
}
