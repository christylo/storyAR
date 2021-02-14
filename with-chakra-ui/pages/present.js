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
    Spacer
} from "@chakra-ui/react";
import socketIOClient from "socket.io-client";
import {useState} from "react";
import jsCookie from 'js-cookie';

const ENDPOINT = "https://localhost:4000";


export default function Present() {
    const [response, setResponse] = useState("");
    const [accessCode, setAccessCode] = useState("");

    function nextSlide() {
        const socket = socketIOClient(ENDPOINT, {reconnection: true, reconnectionAttempts: 3, query: jsCookie.get('accessCode')});
        socket.emit("slideEvent",jsCookie.get('accessCode'),"next");
        //console.log(response);
    }

    function previousSlide() {
        const socket = socketIOClient(ENDPOINT, {reconnection: true, reconnectionAttempts: 3, query: jsCookie.get('accessCode')});
        socket.emit("slideEvent",jsCookie.get('accessCode'),"previous");
        //console.log(response);
    }

    return (
        <Flex align="center" justify="center" height="100vh">
            <Box>
                <Heading>
                    Present
                </Heading>
                <Heading>
                    Room Code: {jsCookie.get('accessCode')}
                </Heading>
                <Button m={25} padding={5} onClick={() => {
                    previousSlide();
                }}>
                    Previous
                </Button>
                <Button m={25} padding={5} onClick={() => {
                    nextSlide();
                }}>
                    Next
                </Button>
            </Box>
        </Flex>
    )
}
