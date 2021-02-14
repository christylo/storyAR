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
import Header from '../components/header'



//const ENDPOINT = "https://storyar-server.herokuapp.com/";
const ENDPOINT = "https://localhost:4000";


export default function Present() {
    const [response, setResponse] = useState("");
    const [accessCode, setAccessCode] = useState("");
    const [hidden, setHidden] = useState(true);

    function nextSlide() {
        const socket = socketIOClient(ENDPOINT, {
            reconnection: true,
            reconnectionAttempts: 3,
            query: {accessCode: jsCookie.get('accessCode')}
        });
        socket.emit("slideEvent", jsCookie.get('accessCode'), "next");
        //console.log(response);
    }

    function previousSlide() {
        const socket = socketIOClient(ENDPOINT, {
            reconnection: true,
            reconnectionAttempts: 3,
            query: {accessCode: jsCookie.get('accessCode')}
        });
        socket.emit("slideEvent", jsCookie.get('accessCode'), "previous");
        //console.log(response);
    }

    function hideModel() {
        const socket = socketIOClient(ENDPOINT, {
            reconnection: true,
            reconnectionAttempts: 3,
            query: {accessCode: jsCookie.get('accessCode')}
        });
        socket.emit("modelHide", jsCookie.get('accessCode'), hidden);
        //console.log(response);
    }

    return (
        <div className={styles.presentContainer}>
            <Fonts />
            <ImageList cols={3} rowHeight={164} >
            </ImageList>

            <Header/>

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
