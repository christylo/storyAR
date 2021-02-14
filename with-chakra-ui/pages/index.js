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
  Button,
} from "@chakra-ui/react";
import { Fonts } from "./Fonts";

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Fonts />
      <Box>
        <Grid templateColumns="repeat(3, 2fr)" gap={100}>
          <Link href="/">
            <Text fontSize={48} color="white" fontFamily="BreadCrumb">• storyAR</Text>
          </Link>

          <Spacer></Spacer>
          <div className={styles.navTabs}>
            <Breadcrumb separator=" " spacing={4} fontFamily="BreadCrumb" fontWeight={50} color="white">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="/create">how does it work</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="/create">try it out</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
        </Grid>
      </Box>
      <div className={styles.buttonPadding}>
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
      </div>
    </div >
  )
}
