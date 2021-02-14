import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {
    Heading,
    Flex,
    Box,
    Button,
    Input,
    FormControl,
    Spacer,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Grid,
    Text
} from "@chakra-ui/react";
import socketIOClient from "socket.io-client";
import { useState } from "react";
import jsCookie from 'js-cookie';
import { Fonts } from "../components/fonts";
import ImageList from '@material-ui/core/ImageList';




const ENDPOINT = "https://storyar-server.herokuapp.com/";


export default function Present() {
    const [response, setResponse] = useState("");
    const [accessCode, setAccessCode] = useState("");
    const [hidden, setHidden] = useState(true);

    function nextSlide() {
        const socket = socketIOClient(ENDPOINT, {
            reconnection: true,
            reconnectionAttempts: 3,
            query: jsCookie.get('accessCode')
        });
        socket.emit("slideEvent", jsCookie.get('accessCode'), "next");
        //console.log(response);
    }

    function previousSlide() {
        const socket = socketIOClient(ENDPOINT, {
            reconnection: true,
            reconnectionAttempts: 3,
            query: jsCookie.get('accessCode')
        });
        socket.emit("slideEvent", jsCookie.get('accessCode'), "previous");
        //console.log(response);
    }

    function hideModel() {
        const socket = socketIOClient(ENDPOINT, {
            reconnection: true,
            reconnectionAttempts: 3,
            query: jsCookie.get('accessCode')
        });
        socket.emit("modelHide", jsCookie.get('accessCode'), hidden);
        //console.log(response);
    }

    return (
        <div className={styles.presentContainer}>
            <Fonts />
            <ImageList cols={3} rowHeight={164} >
            </ImageList>
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
            <Flex align="center" justify="center" height="60vh">
                <Box>
                    <Heading fontFamily="Quicksand" color="white">
                        Present Room Code: {jsCookie.get('accessCode')}
                    </Heading>
                    <Button
                        fontFamily="Quicksand"
                        m={25}
                        padding={5}
                        onClick={() => {
                            previousSlide();
                        }}
                    >
                        Previous
                    </Button>
                    <Button fontFamily="Quicksand" m={25} padding={5} onClick={() => {
                        nextSlide();
                    }}>
                        Next
                    </Button>
                    <Button m={25} padding={5} onClick={() => {
                        setHidden(!hidden);
                        hideModel();
                    }}>
                        {hidden === true ? "Hide" : "Hidden"}
                    </Button>
                </Box>
            </Flex>
        </div>
    )
}
