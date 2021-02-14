import {Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Grid, Spacer, Text, useColorMode} from '@chakra-ui/react'
import Link from "next/link";
import styles from "../styles/Home.module.css";

export const Header = (props) => {
    return (
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
                            <BreadcrumbLink href="https://devpost.com/software/storyar">how does it work</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href="/create">try it out</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </Grid>
        </Box>
    )
}

export default Header;